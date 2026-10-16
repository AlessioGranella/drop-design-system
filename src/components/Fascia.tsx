import type { ComponentProps, ReactNode } from 'react';
import { assetUrl } from '../asset';

/**
 * Fascia a tutta larghezza con il contenuto incolonnato dentro.
 *
 * Il padding orizzontale sta sul wrapper interno, non sulla fascia:
 * è l'unico modo perché i bordi sinistri di fasce diverse combacino.
 *
 * `pattern` accende la goccia — ◆ 06 p.042: bianca su teal, mai il
 * contrario.
 */
export function Fascia({
  fondo = 'bianca', pattern = false, children, ...resto
}: {
  fondo?: 'bianca' | 'paper' | 'teal' | 'nera';
  pattern?: boolean;
  children: ReactNode;
} & ComponentProps<'section'>) {
  const scura = fondo === 'teal' || fondo === 'nera';
  return (
    <section className={`drop-fascia drop-fascia--${fondo}`} {...resto}>
      {pattern && scura && (
        <span className="drop-pattern" style={{ ['--drop-pattern-src' as string]: assetUrl('brand/pattern/goccia-bianco.svg') }} />
      )}
      <div className="drop-fascia__inner">{children}</div>
    </section>
  );
}
