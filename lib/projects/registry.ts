import { auricSignalProject } from "./auric-signal";
import { traceProject } from "./trace";
import { smartPuppyProject } from "./smart-puppy";
import { professionalExperienceProject } from "./professional-experience";

/** Minimal per-slug lookup used to render Previous/Next links from projectOrder. */
export const projectRegistry: Record<string, { title: string; href: string }> = {
  "auric-signal": { title: auricSignalProject.title, href: "/work/auric-signal" },
  trace: { title: traceProject.title, href: "/work/trace" },
  "smart-puppy": { title: smartPuppyProject.title, href: "/work/smart-puppy" },
  "professional-experience": {
    title: professionalExperienceProject.title,
    href: "/work/professional-experience",
  },
};
