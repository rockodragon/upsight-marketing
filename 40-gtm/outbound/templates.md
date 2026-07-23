# Outbound Email Templates — base set (Apollo-ready)

**Use:** paste as Apollo sequence templates (or hand to Apollo's AI writer as the base). `{{merge_fields}}` are Apollo variables. **`[PERSONALIZE — …]`** is a slot you (or Apollo AI) fill per prospect from one real research fact — a recent post, their actual offer, the client type they serve. **If you can't fill the `[PERSONALIZE]` line with something real, don't send it** — a generic first line is worse than no email.

**What makes these work:** under ~120 words · one real hook up top, not flattery · one low-friction ask (not "book 30 min") · plain human voice, no "hope this finds you well" · the value is framed as *their* problem, not our feature list.

**ICP:** consultants / fractional operators. **Product in one line:** UpSight turns customer conversations into searchable evidence ("receipts") — the exact quote, who said it, when — clustered into themes your client can see.

---

## 1. Cold — consultant / fractional operator (lead_source: apollo)

**Subject (pick one):**
- your discovery calls → evidence you can cite
- the part of discovery that eats the hours
- {{company}} + turning calls into receipts

**Body:**
> Hi {{first_name}},
>
> [PERSONALIZE — one real line about their offer or a recent post, e.g. "saw you run fractional RevOps for seed-stage SaaS."]
>
> The part that usually eats the hours is turning those discovery calls into something you can actually *cite* back to a client — the exact quote, who said it, when. That's the one thing UpSight does: every conversation becomes searchable evidence, clustered into themes your client can see for themselves.
>
> Worth a 2-minute example on one of your engagements?
>
> Best,
> Rick

---

## 2. Warm — referral intro (lead_source: referral)

**Subject:** {{referrer}} said we should talk · intro via {{referrer}}

**Body:**
> Hi {{first_name}},
>
> {{referrer}} mentioned you're [PERSONALIZE — their context, e.g. "running customer discovery across a few DTC brands"] and thought UpSight might fit how you work.
>
> Short version: we turn customer conversations into evidence your whole team can search, share, and act on — no more digging through recordings for that one quote.
>
> Open to me sending a short example tailored to [their world]?
>
> Best,
> Rick

*(Referral opener earns a little more room and a softer ask — no need to prove the hook, {{referrer}} already did.)*

---

## 3. Public-survey respondent — the dogfood loop (lead_source: linkedin)

**Subject:** what your answer surfaced · I ran your answer through UpSight

**Body:**
> Hi {{first_name}},
>
> Thanks for answering my question about [survey topic] — genuinely useful.
>
> Here's the fun part: I ran all the responses through UpSight and it clustered [N] of you around [theme], with the exact quotes and clips pulled automatically. That clustering *is* the product.
>
> If you ever want that on your own customer calls or surveys, happy to show you how it works — takes two minutes.
>
> Best,
> Rick

*(This is the strongest play we have — it demonstrates the product on data they helped create. Apollo can't write this one; it has no access to the survey analysis. This is the slice worth doing in UpSight.)*

---

## 4. Re-engagement — talked before, went quiet (lead_source: any)

**Subject:** picking this back up · an update since we last talked

**Body:**
> Hi {{first_name}},
>
> We talked a while back about [prior topic]. Since then we [PERSONALIZE — new capability/proof relevant to them, e.g. "shipped an AI interviewer that runs the discovery call and pulls the receipts for you"].
>
> Given [their situation], felt worth a nudge. Want me to send a quick before/after so you can see if it changes the math for you?
>
> Best,
> Rick

---

## 5. Trigger — react to a recent public post (lead_source: linkedin / apollo)

**Subject:** your post on [topic] · [their specific point] — yes

**Body:**
> Hi {{first_name}},
>
> Your post on [specific point] nailed it — [PERSONALIZE — one line agreeing + extending, in your own words].
>
> It's basically why we built UpSight: [the one-line connection to what we do]. 
>
> Curious — how are you capturing that today? Spreadsheets, or something that actually keeps the receipts?
>
> Best,
> Rick

---

## Personalization checklist (before you send)
- [ ] The `[PERSONALIZE]` line names something **specific and real** about *them* (not their industry in general).
- [ ] The email is about **their** problem, and our product is the one-line answer — not a feature dump.
- [ ] One ask, low-friction. No calendar link on the first touch.
- [ ] Reads like a human wrote it to one person. Read it out loud — if it sounds like a mail-merge, rewrite the top line.
