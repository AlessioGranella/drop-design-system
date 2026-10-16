import { useState } from 'react';
import { asset } from '../../asset';

/**
 * Materiali già prodotti, da guardare prima di partire.
 * Sono riferimenti, non norma: dove si discostano dal brand book,
 * vince il brand book.
 */
const PEZZI: [string, string][] = [
  ['brand/esempi/slide-intro.png', 'Deck · paragrafo di apertura con evidenze in arancione'],
  ['brand/esempi/slide-partner-strategico.png', 'Deck · mission, titolo su foto a tutto fondo'],
  ['brand/esempi/slide-valori.png', 'Deck · i tre valori, 3-up con card centrale in teal'],
  ['brand/esempi/slide-servizi.png', 'Deck · «Di cosa ci occupiamo?», tile su fondo lavanda'],
  ['brand/esempi/slide-settori.png', 'Deck · i settori di riferimento, badge circolari'],
  ['brand/esempi/porta-vetrata.jpg', 'Brand space · porta vetrata con pattern goccia arancione'],
];

export function Galleria() {
  const [aperto, setAperto] = useState<[string, string] | null>(null);
  return (
    <section className="dx-section">
      <div className="dx-h">
        <span className="drop-occhiello">Marca</span>
        <h1>Galleria</h1>
        <p className="drop-lead">
          Materiali già prodotti, utili come riferimento visivo prima di iniziare qualcosa di
          nuovo. Sono esempi, non norma: dove si discostano dal brand book, vince il brand book.
        </p>
      </div>

      <div className="dx-galleria">
        {PEZZI.map(([file, didascalia]) => (
          <figure className="dx-gal" key={file}>
            <button type="button" onClick={() => setAperto([file, didascalia])}>
              <img src={asset(file)} alt={didascalia} loading="lazy" />
            </button>
            <figcaption>{didascalia}</figcaption>
          </figure>
        ))}
      </div>

      {aperto && (
        <div className="dx-lightbox" onClick={() => setAperto(null)} role="presentation">
          <img src={asset(aperto[0])} alt={aperto[1]} />
          <p>{aperto[1]}</p>
        </div>
      )}
    </section>
  );
}
