// Single source of truth for Previous/Next project navigation. Must match
// the homepage's own Selected Work order exactly (see the `projects` array
// in app/page.tsx) — that homepage order is itself the source of truth this
// list is required to follow, not an independent ordering.
export const projectOrder = [
  "sourcefold",
  "auric-signal",
  "professional-experience",
  "trace",
  "smart-puppy",
] as const;
