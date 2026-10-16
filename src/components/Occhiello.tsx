import type { ReactNode } from 'react';
/**
 * L'occhiello con il tick arancione. ◆ 07 p.048
 * Sta in alto a sinistra sopra il titolo di sezione o di slide.
 */
export function Occhiello({ children, suScuro = false }: { children: ReactNode; suScuro?: boolean }) {
  return <span className={`drop-occhiello${suScuro ? ' drop-occhiello--chiaro' : ''}`}>{children}</span>;
}
