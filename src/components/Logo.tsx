import type { ComponentProps } from 'react';
import { asset } from '../asset';

/**
 * Il marchio DROP. ◆ 03
 *
 * Quattro varianti ufficiali (p.021) più le versioni con descrittore
 * (p.022). La scelta si fa sul fondo, non sul gusto: vince sempre il
 * contrasto maggiore.
 *
 * L'altezza minima è forzata qui, così un marchio non può finire sotto
 * soglia per distrazione: 25 px nudo, 45 px con descrittore (◆ p.023).
 */
export type VarianteLogo = 'colore' | 'bianco' | 'bianco-arancio' | 'mono';

const FILE: Record<VarianteLogo, string> = {
  colore: 'drop.svg',
  bianco: 'drop-bianco.svg',
  'bianco-arancio': 'drop-bianco-arancio.svg',
  mono: 'drop-mono.svg',
};

const FILE_DESCRITTORE: Record<VarianteLogo, string> = {
  colore: 'drop-descrittore.svg',
  bianco: 'drop-descrittore-bianco.svg',
  'bianco-arancio': 'drop-descrittore-bianco-arancio.svg',
  mono: 'drop-descrittore-mono.svg',
};

export function Logo({
  variante = 'colore',
  descrittore = false,
  altezza,
  style,
  ...resto
}: {
  variante?: VarianteLogo;
  /** Aggiunge «Marketing & Comunicazione». Per chi non conosce ancora DROP. */
  descrittore?: boolean;
  altezza?: number;
} & Omit<ComponentProps<'img'>, 'height'>) {
  const minimo = descrittore ? 45 : 25;
  const h = Math.max(altezza ?? (descrittore ? 70 : 45), minimo);
  const file = (descrittore ? FILE_DESCRITTORE : FILE)[variante];
  return (
    <img
      src={asset(`brand/loghi/${file}`)}
      alt="DROP"
      style={{ height: h, width: 'auto', display: 'block', ...style }}
      {...resto}
    />
  );
}
