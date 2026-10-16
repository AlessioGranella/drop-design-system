import { asset } from '../../asset';
import { marchio } from '../../tokens';
import { Codice } from '../Codice';
import { Logo } from '../../components/Logo';

const VARIANTI: [string, string, boolean, string][] = [
  ['drop.svg', 'A colori · positivo', false, 'Versione preferenziale, su bianco o chiari neutri.'],
  ['drop.svg', 'A colori · sfondo soft', false, 'Su superfici teal molto chiare (≤ teal-100). Mantieni il contrasto.'],
  ['drop-bianco-arancio.svg', 'Bianco + arancione', true, 'Su teal scuro o fotografie scure: la «O» resta riconoscibile.'],
  ['drop-bianco.svg', 'Bianco · monocromo', true, 'Su fondi scuri uniformi, quando l’accento arancione non è leggibile o non è voluto.'],
];

const ERRORI = [
  'Non ruotare il marchio.',
  'Non distorcere, non comprimere.',
  'Non aggiungere ombre, bagliori o effetti.',
  'Non cambiare i colori del marchio.',
  'Non collocarlo su sfondi rumorosi o ad alto contrasto.',
  'Non ridurre l’opacità del marchio.',
];

export function Marchio() {
  const h = 120;
  const x = marchio.areaRispetto(h);
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Marca · brand book 03</span>
          <h1>Marchio</h1>
          <p className="drop-lead">
            Quattro lettere costruite su forme geometriche pulite, ispirate alla goccia: l'unità
            minima del primario. La «O» arancione è il fulcro del segno — l'innovazione, il punto
            in cui radici e futuro si incontrano. Il lockup è un blocco bloccato: non si altera.
          </p>
        </div>

        <div className="dx-demo" style={{ display: 'grid', placeItems: 'center', padding: 'var(--drop-space-16)' }}>
          <Logo altezza={96} />
        </div>
        <table className="dx-tabella">
          <tbody>
            <tr><td style={{ width: '24%' }}><strong>D</strong></td><td>Radici</td></tr>
            <tr><td><strong>R</strong></td><td>Relazione</td></tr>
            <tr><td><strong>O</strong></td><td>Goccia · innovazione — l'unico elemento in arancione</td></tr>
            <tr><td><strong>P</strong></td><td>Partner</td></tr>
          </tbody>
        </table>
      </section>

      <section className="dx-section">
        <h2>Quattro varianti</h2>
        <p>
          Ogni applicazione ha quattro varianti per coprire ogni fondo. In caso di dubbio, si
          sceglie sempre quella che garantisce contrasto e leggibilità maggiori.
        </p>
        <div className="dx-tiles" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', marginBottom: 'var(--drop-space-8)' }}>
          {VARIANTI.map(([file, nome, scuro, nota], i) => (
            <div key={i} className={`dx-tile${scuro ? ' dx-tile--scuro' : ''}`}
                 style={{ background: i === 1 ? 'var(--drop-teal-100)' : undefined, justifyItems: 'start', textAlign: 'left' }}>
              <img src={asset(`brand/loghi/${file}`)} alt={nome} style={{ height: 34, alignSelf: 'center' }} />
              <strong style={{ fontSize: 12, color: scuro ? '#fff' : 'var(--drop-fg-title)' }}>{nome}</strong>
              <span>{nota}</span>
            </div>
          ))}
        </div>

        <h2>Con descrittore</h2>
        <p>
          Per la prima comunicazione con chi non conosce ancora DROP, il marchio si accompagna al
          descrittore «Marketing &amp; Comunicazione». È bloccato e proporzionato come l'originale:
          non si compone a mano.
        </p>
        <div className="dx-row" style={{ marginBottom: 'var(--drop-space-8)' }}>
          <div className="dx-demo" style={{ flex: 1, marginBottom: 0 }}><Logo descrittore altezza={70} /></div>
          <div className="dx-demo dx-demo--teal" style={{ flex: 1, marginBottom: 0 }}>
            <Logo variante="bianco-arancio" descrittore altezza={70} />
          </div>
        </div>
      </section>

      <section className="dx-section">
        <h2>Costruzione e area di rispetto</h2>
        <p>
          Tutte le proporzioni sono in unità <strong>X</strong>. Il marchio misura
          {' '}<strong>8X × 2.3X</strong>, e l'area di rispetto su ogni lato è uguale a X: dentro
          quell'area non entrano testi, icone, altri loghi o margini di pagina. Più area di
          rispetto c'è, meglio è.
        </p>

        <div className="dx-demo" style={{ display: 'grid', placeItems: 'center' }}>
          <div style={{ padding: x, outline: '1px dashed var(--drop-orange)', outlineOffset: 0,
                        background: 'var(--drop-orange-100)' }}>
            <div style={{ background: '#fff' }}><Logo altezza={h} /></div>
          </div>
          <p className="drop-caption" style={{ marginTop: 'var(--drop-space-4)', marginBottom: 0 }}>
            AREA DI RISPETTO = X = ALTEZZA / 2,3 — QUI {Math.round(x)} PX SU UN MARCHIO DA {h} PX
          </p>
        </div>

        <div className="dx-note">
          <p>
            <strong>Una nota onesta sulla X.</strong> Il brand book definisce X come «l'altezza del
            cerchio interno della O»; nel file vettoriale quel cerchio misura un po' più della X
            implicita nella costruzione 8X × 2.3X. Il sistema segue la costruzione, che è l'unica
            verificabile a qualunque scala: <code>X = altezza del marchio / 2,3</code>.
          </p>
        </div>

        <h2>Dimensioni minime</h2>
        <p>
          Sotto 7 mm di altezza gli archi geometrici perdono leggibilità: si passa alla versione
          semplificata o all'iniziale. Il componente <code>Logo</code> forza da solo questi minimi.
        </p>
        <table className="dx-tabella">
          <thead><tr><th>Versione</th><th>Stampa / web</th><th>Minimo assoluto</th></tr></thead>
          <tbody>
            <tr><td>Marchio principale</td>
                <td>{marchio.minimi.marchio.mm.consigliato} mm · {marchio.minimi.marchio.consigliato} px</td>
                <td>{marchio.minimi.marchio.mm.assoluto} mm · {marchio.minimi.marchio.assoluto} px</td></tr>
            <tr><td>Marchio con descrittore</td>
                <td>{marchio.minimi.descrittore.mm.consigliato} mm · {marchio.minimi.descrittore.consigliato} px</td>
                <td>{marchio.minimi.descrittore.mm.assoluto} mm · {marchio.minimi.descrittore.assoluto} px</td></tr>
          </tbody>
        </table>

        <div className="dx-note dx-note--teal">
          <p>
            <strong>L'iniziale.</strong> Sotto soglia — favicon, avatar, bollo — si usa la sola «O»:
            <code> brand/loghi/o-arancio.svg</code> e le sue varianti. Non è una quinta variante di
            marchio: è la versione semplificata prevista a pag. 023, e non sostituisce mai il
            lockup dove c'è spazio per il lockup.
          </p>
        </div>
        <div className="dx-row" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {['o-arancio', 'o-teal'].map(n => (
            <div key={n} className="dx-tile" style={{ width: 120 }}>
              <img src={asset(`brand/loghi/${n}.svg`)} alt={n} style={{ height: 40 }} />
              <span>{n}.svg</span>
            </div>
          ))}
          <div className="dx-tile dx-tile--scuro" style={{ width: 120 }}>
            <img src={asset('brand/loghi/o-bianco.svg')} alt="o-bianco" style={{ height: 40 }} />
            <span>o-bianco.svg</span>
          </div>
        </div>
      </section>

      <section className="dx-section">
        <h2>Posizionamento</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sempre</h4>
            <ul>
              <li>Allineato a <strong>sinistra</strong> — uso preferito.</li>
              <li><strong>Centrato</strong> su cover, badge e applicazioni simmetriche.</li>
              <li>In alto a sinistra o in basso a sinistra nelle slide, sulla griglia di pagina.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Mai</h4>
            <ul>
              <li>Allineato a destra.</li>
              <li>Inclinato.</li>
              <li>Dentro l'area di rispetto di altri elementi.</li>
            </ul>
          </div>
        </div>

        <h2>Errori comuni</h2>
        <ul className="drop-small" style={{ paddingLeft: 'var(--drop-space-6)', lineHeight: 2, marginBottom: 'var(--drop-space-8)' }}>
          {ERRORI.map(e => <li key={e}>{e}</li>)}
        </ul>

        <Codice>{`import { Logo } from 'drop-design-system';

<Logo />                                  {/* a colori, 45px */}
<Logo variante="⟦bianco-arancio⟧" altezza={64} />   {/* su fondo teal o foto scura */}
<Logo ⟦descrittore⟧ altezza={70} />       {/* prima comunicazione */}

// il componente forza i minimi: sotto 25px (45 col descrittore) non scende`}</Codice>
      </section>
    </>
  );
}
