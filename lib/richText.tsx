import type { ReactNode } from "react";

function parseInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/**
 * Minimal markdown-lite renderer for approved copy: paragraphs separated by
 * blank lines, "- " bullet lists, "N. " ordered lists, and **bold** inline.
 * Keeps case-study content as plain data rather than JSX.
 */
export function RichText({ body }: { body: string }) {
  if (!body.trim()) return null;

  const groups = body.trim().split(/\n\n+/);

  return (
    <>
      {groups.map((group, i) => {
        const lines = group.split("\n").filter((l) => l.trim().length > 0);
        const isBulletList = lines.every((l) => l.trim().startsWith("- "));
        const isOrderedList = lines.every((l) => /^\d+\.\s/.test(l.trim()));

        if (isBulletList) {
          return (
            <ul key={i}>
              {lines.map((line, j) => (
                <li key={j}>{parseInline(line.trim().slice(2))}</li>
              ))}
            </ul>
          );
        }

        if (isOrderedList) {
          return (
            <ol key={i}>
              {lines.map((line, j) => (
                <li key={j}>{parseInline(line.trim().replace(/^\d+\.\s/, ""))}</li>
              ))}
            </ol>
          );
        }

        return <p key={i}>{parseInline(lines.join(" "))}</p>;
      })}
    </>
  );
}
