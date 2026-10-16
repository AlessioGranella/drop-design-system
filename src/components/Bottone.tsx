import type { ComponentProps } from 'react';
/**
 * Bottone a pillola. L'arancione è l'azione primaria — uno per schermata.
 */
export function Bottone({
  variante = 'primario', piccolo = false, className = '', ...resto
}: {
  variante?: 'primario' | 'secondario' | 'contorno' | 'su-scuro';
  piccolo?: boolean;
} & ComponentProps<'button'>) {
  const v = variante === 'primario' ? '' : ` drop-btn--${variante}`;
  return <button className={`drop-btn${v}${piccolo ? ' drop-btn--s' : ''} ${className}`} {...resto} />;
}
