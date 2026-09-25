/**
 * Outbound email linter.
 *
 * "Write a less cringy email" is not enforceable. A rule that fails a draft containing
 * "I hope this finds you well" is. This module encodes the playbook's sending rules as checks
 * that run before an email goes out, so the standard does not drift with whoever is drafting.
 *
 * Source of truth for the rules: `40-gtm/outbound/targeting-and-response-playbook.md`
 * (one real sourced hook per email, ask for a call, one-to-one) and the brief system prompt
 * in `schema.ts` (no em dashes).
 */

export type Severity = "error" | "warn";

export type Finding = {
  rule: string;
  severity: Severity;
  message: string;
  /** The offending text, when the rule matched something specific. */
  match?: string;
};

type Phrase = { pattern: RegExp; label: string; why: string };

/**
 * Phrases that mark an email as machine-written or insincere. Grouped by why they fail, since
 * the fix differs: filler gets deleted, flattery gets replaced with a real observation.
 */
const BANNED_PHRASES: Phrase[] = [
  // Filler openers. They cost a line and say nothing.
  { pattern: /\bi hope (this|you)\b[^.!?]*\b(well|finds you)\b/i, label: "hope this finds you well", why: "filler" },
  { pattern: /\bjust (circling back|following up|touching base|checking in)\b/i, label: "just following up", why: "filler" },
  { pattern: /\btouching base\b/i, label: "touching base", why: "filler" },
  { pattern: /\bquick question\b/i, label: "quick question", why: "filler" },
  { pattern: /\bi'?m reaching out\b/i, label: "I'm reaching out", why: "filler" },
  { pattern: /\bi (came across|stumbled (up)?on)\b/i, label: "I came across", why: "filler" },

  // Flattery. Reads as fake because it usually is.
  { pattern: /\b(big fan|huge fan) of\b/i, label: "big fan of", why: "flattery" },
  { pattern: /\blove what you'?re (doing|building)\b/i, label: "love what you're doing", why: "flattery" },
  { pattern: /\b(really |very )?impressed (by|with)\b/i, label: "impressed by", why: "flattery" },
  { pattern: /\byour (impressive|amazing|incredible)\b/i, label: "your impressive...", why: "flattery" },
  { pattern: /\bpick(ing)? your brain\b/i, label: "pick your brain", why: "flattery" },

  // Presumption. Claiming to know their pain without evidence.
  { pattern: /\bi (imagine|bet|know) (you|your team)\b/i, label: "I imagine you...", why: "presumption" },
  { pattern: /\bi know how (hard|tough|difficult)\b/i, label: "I know how hard", why: "presumption" },
  { pattern: /\byou'?re probably (struggling|dealing|drowning)\b/i, label: "you're probably struggling", why: "presumption" },

  // Hype and jargon.
  { pattern: /\bgame[- ]?chang(er|ing)\b/i, label: "game-changer", why: "hype" },
  { pattern: /\brevolutioni[sz]e\b/i, label: "revolutionize", why: "hype" },
  { pattern: /\bsupercharge\b/i, label: "supercharge", why: "hype" },
  { pattern: /\b(cutting[- ]edge|best[- ]in[- ]class|world[- ]class|state[- ]of[- ]the[- ]art)\b/i, label: "cutting-edge", why: "hype" },
  { pattern: /\b10x\b/i, label: "10x", why: "hype" },
  { pattern: /\bseamless(ly)?\b/i, label: "seamless", why: "jargon" },
  { pattern: /\bleverage\b/i, label: "leverage", why: "jargon" },
  { pattern: /\bsynerg(y|ies|istic)\b/i, label: "synergy", why: "jargon" },
  { pattern: /\bmove the needle\b/i, label: "move the needle", why: "jargon" },
  { pattern: /\blow[- ]hanging fruit\b/i, label: "low-hanging fruit", why: "jargon" },
  { pattern: /\bat scale\b/i, label: "at scale", why: "jargon" },
  { pattern: /\bthought leader\b/i, label: "thought leader", why: "jargon" },
  { pattern: /\bcompanies like (yours|you)\b/i, label: "companies like yours", why: "jargon" },

  // Model slop. Words that are rare in human email and common in generated text.
  { pattern: /\bdelve\b/i, label: "delve", why: "ai-tell" },
  { pattern: /\btapestry\b/i, label: "tapestry", why: "ai-tell" },
  { pattern: /\b(a )?testament to\b/i, label: "testament to", why: "ai-tell" },
  { pattern: /\bin the realm of\b/i, label: "in the realm of", why: "ai-tell" },
  { pattern: /\bnavigat(e|ing) the\b[^.!?]*\blandscape\b/i, label: "navigating the landscape", why: "ai-tell" },
  { pattern: /\bit'?s worth noting\b/i, label: "it's worth noting", why: "ai-tell" },
  { pattern: /\b(furthermore|moreover)\b/i, label: "furthermore/moreover", why: "ai-tell" },
  { pattern: /\bin today'?s (fast[- ]paced|ever[- ]changing|competitive)\b/i, label: "in today's fast-paced world", why: "ai-tell" },
  { pattern: /\bunlock (the )?(power|potential|value)\b/i, label: "unlock the potential", why: "ai-tell" },

  // Weak closes that invite no reply.
  { pattern: /\blet me know if you'?d like to (learn more|know more)\b/i, label: "let me know if you'd like to learn more", why: "weak-close" },
  { pattern: /\bdoes (that|this) resonate\b/i, label: "does that resonate", why: "weak-close" },
  { pattern: /\bthoughts\?\s*$/i, label: "Thoughts?", why: "weak-close" },
];

export type LintOptions = {
  /** Word ceiling for the body. The playbook's emails are short and one-to-one. */
  maxWords: number;
  /** Longest acceptable single sentence, in words. */
  maxSentenceWords: number;
  /** Links beyond this many read as a newsletter, not a personal note. */
  maxLinks: number;
  /**
   * Text of the prospect's brief. When provided, the draft must reuse a concrete detail from it,
   * which is how the playbook's "one real, specific, sourced hook" rule gets enforced.
   */
  briefText?: string;
};

export const DEFAULT_LINT_OPTIONS: LintOptions = {
  maxWords: 120,
  maxSentenceWords: 30,
  maxLinks: 1,
};

/** Strip a leading `Subject:` line so body rules do not fire on it. */
export function splitSubjectAndBody(text: string): { subject?: string; body: string } {
  const match = text.match(/^\s*subject\s*:\s*(.+?)\r?\n([\s\S]*)$/i);
  if (!match) return { body: text };
  return { subject: match[1].trim(), body: match[2] };
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Concrete details worth reusing from a brief: dated events, proper nouns, and numbers.
 * Used to check that a draft is actually grounded in the research rather than generic.
 */
export function extractBriefAnchors(briefText: string): string[] {
  const anchors = new Set<string>();

  // Trigger bullets look like: - **March 2026** — text
  for (const match of briefText.matchAll(/\*\*([A-Z][a-z]+ \d{4})\*\*/g)) {
    anchors.add(match[1]);
  }
  // Multi-word capitalised phrases: product names, companies, people.
  for (const match of briefText.matchAll(/\b([A-Z][a-zA-Z]+(?: [A-Z][a-zA-Z]+)+)\b/g)) {
    anchors.add(match[1]);
  }
  // Standalone figures such as "185M" or "20%".
  for (const match of briefText.matchAll(/\b(\d[\d,.]*\s?(?:%|[MBK]\b))/g)) {
    anchors.add(match[1].trim());
  }

  return [...anchors].filter((anchor) => anchor.length > 3);
}

export function lintEmail(text: string, options: Partial<LintOptions> = {}): Finding[] {
  const config = { ...DEFAULT_LINT_OPTIONS, ...options };
  const { subject, body } = splitSubjectAndBody(text);
  const findings: Finding[] = [];

  for (const phrase of BANNED_PHRASES) {
    const match = text.match(phrase.pattern);
    if (match) {
      findings.push({
        rule: phrase.why,
        severity: "error",
        message: `Cut "${phrase.label}".`,
        match: match[0].trim(),
      });
    }
  }

  // The brief system prompt bans em dashes, so drafts built from briefs should not contain them.
  const emDash = body.match(/[—–]/);
  if (emDash) {
    findings.push({
      rule: "em-dash",
      severity: "error",
      message: "Em dashes read as generated. Use a period or a comma.",
      match: emDash[0],
    });
  }

  const words = countWords(body);
  if (words > config.maxWords) {
    findings.push({
      rule: "length",
      severity: "error",
      message: `${words} words. Keep it under ${config.maxWords}.`,
    });
  }

  for (const sentence of body.split(/(?<=[.!?])\s+/)) {
    const count = countWords(sentence);
    if (count > config.maxSentenceWords) {
      findings.push({
        rule: "sentence-length",
        severity: "warn",
        message: `A ${count}-word sentence. Split it.`,
        match: sentence.trim().slice(0, 60),
      });
    }
  }

  const links = body.match(/https?:\/\/\S+/g) ?? [];
  if (links.length > config.maxLinks) {
    findings.push({
      rule: "links",
      severity: "error",
      message: `${links.length} links. One at most, or it reads as a broadcast.`,
    });
  }

  // Two asks in one email splits the reply. The playbook's CTA is a single call request.
  const questions = (body.match(/\?/g) ?? []).length;
  if (questions > 2) {
    findings.push({
      rule: "multiple-asks",
      severity: "error",
      message: `${questions} questions. Ask one thing.`,
    });
  }

  const iCount = (body.match(/\b(I|I'm|I've|I'd|we|our|my)\b/gi) ?? []).length;
  const youCount = (body.match(/\b(you|your|you're|you've)\b/gi) ?? []).length;
  if (iCount > youCount * 2 && iCount >= 4) {
    findings.push({
      rule: "self-centred",
      severity: "warn",
      message: `${iCount} references to us against ${youCount} to them. Rewrite around them.`,
    });
  }

  if (subject != null) {
    if (countWords(subject) > 8) {
      findings.push({
        rule: "subject-length",
        severity: "warn",
        message: `Subject is ${countWords(subject)} words. Aim for under 8.`,
      });
    }
    if (/^(re|fwd?)\s*:/i.test(subject)) {
      findings.push({
        rule: "fake-thread",
        severity: "error",
        message: 'A fake "Re:" subject is a trust bomb. Do not.',
      });
    }
  }

  if (config.briefText) {
    const anchors = extractBriefAnchors(config.briefText);
    const grounded = anchors.some((anchor) => body.toLowerCase().includes(anchor.toLowerCase()));
    if (!grounded) {
      findings.push({
        rule: "no-hook",
        severity: "error",
        message:
          "No specific detail from the brief appears in the draft. Every email needs one real, sourced hook.",
      });
    }
  }

  return findings;
}

export function formatFindings(findings: Finding[]): string {
  if (findings.length === 0) return "Clean. No findings.";

  const errors = findings.filter((f) => f.severity === "error");
  const warnings = findings.filter((f) => f.severity === "warn");
  const lines: string[] = [];

  for (const finding of [...errors, ...warnings]) {
    const tag = finding.severity === "error" ? "FAIL" : "warn";
    const quoted = finding.match ? `  ("${finding.match}")` : "";
    lines.push(`  ${tag}  [${finding.rule}] ${finding.message}${quoted}`);
  }

  lines.push("");
  lines.push(`${errors.length} blocking, ${warnings.length} advisory.`);
  return lines.join("\n");
}
