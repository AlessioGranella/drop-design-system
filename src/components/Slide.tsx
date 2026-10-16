import type { ReactNode } from 'react';
import { Logo } from './Logo';
import { Occhiello } from './Occhiello';

/**
 * Il telaio di una slide DROP. ◆ 07 p.048
 * 16:9, margini interni al 4,1% (22 mm su 1920), occhiello-tick in alto a
 * sinistra, marchio e numero di slide in basso a sinistra.
 */
export function Slide({
  occhiello, numero, teal = false, children,
}: {
  occhiello?: string;
  numero?: number | string;
  teal?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`drop-slide${teal ? ' drop-slide--teal' : ''}`}>
      <div className="drop-slide__inner">
        {occhiello && <Occhiello suScuro={teal}>{occhiello}</Occhiello>}
        {children}
        <div className="drop-slide__piede">
          <Logo variante={teal ? 'bianco-arancio' : 'colore'} altezza={25} />
          {numero !== undefined && <span>{numero}</span>}
        </div>
      </div>
    </div>
  );
}
