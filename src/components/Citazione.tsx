import type { ReactNode } from 'react';
/** Il claim in grande, con la parola chiave in arancione via `.drop-accento`. */
export function Citazione({ children, fonte }: { children: ReactNode; fonte?: string }) {
  return (
    <blockquote className="drop-citazione">
      <p>{children}</p>
      {fonte && <footer>{fonte}</footer>}
    </blockquote>
  );
}
