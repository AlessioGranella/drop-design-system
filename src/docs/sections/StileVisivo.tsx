import { asset, assetUrl } from '../../asset';
import { pattern } from '../../tokens';
import { Codice } from '../Codice';

export function StileVisivo() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Marca · brand book 06</span>
          <h1>Pattern e fotografia</h1>
          <p className="drop-lead">
            DROP è un brand fortemente fotografico: non usa icone, usa immagini. Il pattern goccia
            è la firma grafica che ricuce tutto. Sono i due soli elementi decorativi del sistema.
          </p>
        </div>

        <h2>Il pattern goccia</h2>
        <p>
          Una forma a tracce concentriche, disegnata a mano, che evoca la goccia e le linee della
          terra arata. Si usa <strong>bianco su teal</strong> come watermark, oppure
          {' '}<strong>arancione</strong> come accento grafico su superfici grandi: vetrate, fiere,
          packaging.
        </p>

        <div className="dx-demo dx-demo--teal" style={{ position: 'relative', overflow: 'hidden', minHeight: 260 }}>
          <span className="drop-pattern" style={{ ['--drop-pattern-src' as string]: assetUrl('brand/pattern/goccia-bianco.svg'),
            opacity: pattern.opacitaDefault }} />
          <div style={{ position: 'relative' }}>
            <span className="drop-occhiello drop-occhiello--chiaro">Parliamone</span>
            <h2 style={{ color: '#fff', maxWidth: '18ch' }}>
              Costruiamo insieme il tuo <span className="drop-accento">valore reale</span>
            </h2>
          </div>
        </div>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Usi corretti</h4>
            <ul>
              <li>Watermark su divisore di sezione, parete vetrata, fondali di fiera.</li>
              <li>Opacità fra il {pattern.opacitaMin * 100}% e il {pattern.opacitaMax * 100}% quando decora una foto.</li>
              <li>Arancione a piena saturazione sui brand space fisici.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Mai così</h4>
            <ul>
              <li>Teal su bianco: esiste solo bianco su teal.</li>
              <li>Ritagliato o ruotato in modo arbitrario.</li>
              <li>Sopra un testo: il pattern sta sempre sotto, a <code>z-index: 0</code>.</li>
            </ul>
          </div>
        </div>

        <Codice>{`<section class="drop-fascia drop-fascia--teal">
  <span class="⟦drop-pattern⟧" style="--drop-pattern-src: url(brand/pattern/goccia-bianco.svg)"></span>
  <div class="drop-fascia__inner">…</div>
</section>`}</Codice>
      </section>

      <section className="dx-section">
        <h2>Fotografia</h2>
        <p>
          La fotografia fa il lavoro metaforico che altrove farebbero le icone: una foto di radici
          per «Radici e Innovazione», una forma di formaggio per «Food». Reale, atmosferica,
          leggermente desaturata, cinematografica. Mai patinata.
        </p>
        <table className="dx-tabella">
          <thead><tr><th>Soggetti</th><th>Mood</th><th>Trattamento</th><th>Inquadrature</th></tr></thead>
          <tbody>
            <tr>
              <td>Agricoltura, natura, mani, radici, animali, food, acqua.</td>
              <td>Fresco, atmosferico, golden hour. Mai patinato, mai stock corporate.</td>
              <td>Contrasto leggermente alto, saturazione naturale. Mai filtri.</td>
              <td>3:4 verticale per le card. 16:9 per il full-bleed. Mai 1:1 squadrato.</td>
            </tr>
          </tbody>
        </table>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sì</h4>
            <ul>
              <li>Mani, gesto, terra. Persone che lavorano davvero.</li>
              <li>Cielo, acqua, paesaggio agricolo.</li>
              <li>Prodotto, filiera, food fotografato con luce naturale.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>No</h4>
            <ul>
              <li>Stock people in giacca e cravatta.</li>
              <li>Filtri Instagram, saturazioni spinte, HDR.</li>
              <li>Illustrazioni o icone al posto della foto.</li>
              <li>Foto quadrata.</li>
            </ul>
          </div>
        </div>

        <h2>Se serve un'icona di interfaccia</h2>
        <div className="dx-note">
          <p>
            <strong>Sostituzione segnalata.</strong> Il brand non ha un set di icone: è una scelta,
            non una mancanza. Per le sole affordance di interfaccia — menu, chiudi, chevron,
            ricerca — si usa <strong>Lucide</strong> a tratto 1,5 px, 20 px, in
            <code> var(--drop-teal)</code>. È un default ragionevole dato il segno geometrico di
            Sora, non una regola del brand book: se arriva un set ufficiale, si sostituisce.
            Le icone non entrano mai nei contenuti al posto di una fotografia.
          </p>
        </div>

        <h2>Layout ricorrenti</h2>
        <div className="drop-griglia">
          {[
            ['Layout A · whitespace + titolo', 'Titolo a sinistra, contenuto a destra. Il default per le slide di sezione.'],
            ['Layout B · 3-up con highlight', 'Tre card in fila, la centrale in teal per dare ritmo.'],
            ['Layout C · full-bleed photo', 'Foto a tutto fondo, titolo bianco in alto a sinistra, marchio in basso a sinistra.'],
          ].map(([t, d]) => (
            <div className="drop-col-4" key={t}>
              <article className="drop-card drop-card--paper"><h3 style={{ fontSize: 'var(--drop-fs-h4)' }}>{t}</h3><p>{d}</p></article>
            </div>
          ))}
        </div>
      </section>

      <section className="dx-section">
        <h2>Brand space</h2>
        <p>
          Sulle vetrate, sulle pareti e nei fondali fieristici il marchio si compone con il pattern
          goccia in arancione a piena saturazione. Spessore del tratto coerente con il marchio,
          circa 2 mm a scala 1:1. Quando un ambiente riceve un nome proprio — «DROP Space» — questo
          si compone sotto il marchio in Sora Medium, allineato al wordmark.
        </p>
        <figure style={{ margin: 0 }}>
          <img src={asset('brand/esempi/porta-vetrata.jpg')} alt="DROP Space, porta vetrata di ingresso"
               style={{ width: '100%', borderRadius: 'var(--drop-radius-lg)', display: 'block' }} />
          <figcaption className="drop-caption" style={{ marginTop: 'var(--drop-space-3)' }}>
            ESEMPIO · DROP SPACE, PORTA VETRATA DI INGRESSO
          </figcaption>
        </figure>
      </section>
    </>
  );
}
