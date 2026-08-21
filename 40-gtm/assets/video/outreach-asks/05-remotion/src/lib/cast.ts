export type Person = {
  id: string;
  name: string;
  initials: string;
  company: string;
  role: "founder" | "enterprise";
};

export const DANA: Person = {
  id: "dana",
  name: "Dana",
  initials: "D",
  company: "Northline",
  role: "enterprise",
};

export const PEOPLE: Person[] = [
  DANA,
  { id: "marcus", name: "Marcus", initials: "M", company: "Harbor", role: "founder" },
  { id: "priya", name: "Priya", initials: "P", company: "Kite", role: "founder" },
  { id: "elena", name: "Elena", initials: "E", company: "Vellum", role: "enterprise" },
  { id: "james", name: "James", initials: "J", company: "Ridge", role: "enterprise" },
  { id: "sofia", name: "Sofia", initials: "S", company: "Lumen", role: "founder" },
  { id: "kenji", name: "Kenji", initials: "K", company: "Nori", role: "founder" },
  { id: "amira", name: "Amira", initials: "A", company: "Sable", role: "enterprise" },
  { id: "cole", name: "Cole", initials: "C", company: "Drift", role: "founder" },
  { id: "tess", name: "Tess", initials: "T", company: "Orchard", role: "enterprise" },
  { id: "rowan", name: "Rowan", initials: "R", company: "Pike", role: "founder" },
  { id: "mei", name: "Mei", initials: "M", company: "Field", role: "enterprise" },
  { id: "luis", name: "Luis", initials: "L", company: "Cove", role: "founder" },
  { id: "harper", name: "Harper", initials: "H", company: "Ash", role: "enterprise" },
];

export const MARCH_QUOTE =
  "Honestly? Onboarding took three weeks and I never got the hours back.";

export const THEME = "Onboarding takes too long";

export const QUOTES: { personId: string; text: string }[] = [
  { personId: "dana", text: MARCH_QUOTE },
  { personId: "marcus", text: "We lost a week just getting SSO working." },
  { personId: "priya", text: "I still don't know who my CSM is." },
  { personId: "elena", text: "Three weeks before anyone could invite the team." },
  { personId: "james", text: "The setup guide assumed we had an admin we don't have." },
  { personId: "sofia", text: "I never got the hours back. That was the thing." },
  { personId: "kenji", text: "Onboarding felt like a second job." },
  { personId: "amira", text: "Legal sat on access for twelve days." },
  { personId: "cole", text: "We almost churned before we started." },
];

export const WAITING: {
  personId: string;
  status: string;
  kind: "quiet" | "partial" | "yes" | "dana";
}[] = [
  { personId: "marcus", status: "opened, went quiet 6 days", kind: "quiet" },
  { personId: "dana", status: "Said yes on Tuesday", kind: "dana" },
  { personId: "priya", status: "said yes — hasn't picked a time", kind: "yes" },
  { personId: "elena", status: "answered 4 of 7", kind: "partial" },
  { personId: "james", status: "opened, went quiet 6 days", kind: "quiet" },
  { personId: "sofia", status: "said yes — hasn't picked a time", kind: "yes" },
  { personId: "kenji", status: "answered 4 of 7", kind: "partial" },
  { personId: "amira", status: "opened, went quiet 6 days", kind: "quiet" },
  { personId: "cole", status: "said yes — hasn't picked a time", kind: "yes" },
];

export function personById(id: string): Person {
  return PEOPLE.find((p) => p.id === id) ?? DANA;
}
