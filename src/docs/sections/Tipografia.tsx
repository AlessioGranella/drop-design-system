import { tipografia } from '../../tokens';
import { Codice } from '../Codice';

const PESI: [string, number, string][] = [
  ['Thin', 100, 'solo display, ≥ 60 pt'],
  ['ExtraLight', 200, 'solo display'],
  ['Light', 300, 'solo display, ≥ 28 pt'],
  ['Regular', 400, 'uso secondario'],
  ['Medium ★', 500, 'corpo testo — il default DROP'],
  ['SemiBold ★', 600, 'occhielli, eyebrow, label'],
  ['Bold ★', 700, 'titoli, display, headline'],
  ['ExtraBold', 800, 'display estremo'],
];

const SCALA: [string, string, string, string][] = [
  ['Display', '72 pt', 'var(--drop-fs-display)', 'Copertina, claim, numeri che devono fermare la lettura.'],
  ['H1', '48 pt', 'var(--drop-fs-h1)', 'Titolo di pagina.'],
  ['H2', '34 pt', 'var(--drop-fs-h2)', 'Titolo di sezione o di slide.'],
  ['H3', '22 pt', 'var(--drop-fs-h3)', 'Titolo di card.'],
  ['H4', '16 pt', 'var(--drop-fs-h4)', 'Sottotitolo, intestazione breve.'],
  ['Body L', '13 pt', 'var(--drop-fs-body-lg)', 'Paragrafo introduttivo.'],
  ['Body', '10,5 pt', 'var(--drop-fs-body)', 'Testo standard, Medium 500.'],
  ['Eyebrow / caption', '—', 'var(--drop-fs-label) / --drop-fs-caption', 'Occhiello, didascalia, numero di pagina.'],
];

export function Tipografia() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Fondamenta · brand book 05</span>
          <h1>Tipografia</h1>
          <p className="drop-lead">
            Sora è l'unico carattere del brand: un sans geometrico open source, razionale ma
            cordiale, in sintonia con il wordmark arrotondato. Si usa in ogni applicazione —
            stampa, web, mobile, presentazioni. Tutto ciò che esce da qui non è autorizzato.
          </p>
        </div>

        <div className="dx-demo">
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, color: 'var(--drop-teal)', letterSpacing: '-.02em' }}>Aa</div>
          <p className="drop-caption" style={{ marginTop: 'var(--drop-space-4)' }}>SORA · BOLD · 8 PESI · OPEN SOURCE</p>
          <p style={{ fontSize: 20, letterSpacing: '.02em', marginBottom: 4 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p style={{ fontSize: 20, letterSpacing: '.02em', marginBottom: 4 }}>abcdefghijklmnopqrstuvwxyz</p>
          <p style={{ fontSize: 20, letterSpacing: '.02em', marginBottom: 0 }}>0123456789 .,;:!?&amp;()€</p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Otto pesi, tre in uso</h2>
        <p>
          Light, Thin ed ExtraLight non sono ammessi per testi sotto i 16 pt: a piccole dimensioni
          perdono leggibilità.
        </p>
        <table className="dx-tabella">
          <thead><tr><th>Peso</th><th>Valore</th><th>Uso DROP</th><th>Saggio</th></tr></thead>
          <tbody>
            {PESI.map(([nome, peso, uso]) => (
              <tr key={peso}>
                <td>Sora {nome}</td>
                <td><code>{peso}</code></td>
                <td>{uso}</td>
                <td style={{ fontWeight: peso, fontSize: 18, color: 'var(--drop-fg-title)' }}>Marketing gentile</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="dx-section">
        <h2>Scala</h2>
        <p>
          La gerarchia è una scala modulare di ragione ~1.4 (quarta giusta): fra due livelli vicini
          si salta sempre uno step, e fra titolo e corpo la dimensione idealmente raddoppia.
          I punti sono i valori di stampa del brand book; a schermo la stessa gerarchia diventa
          fluida, con gli stessi rapporti.
        </p>
        <table className="dx-tabella">
          <thead><tr><th>Livello</th><th>Stampa</th><th>Token</th><th>Quando</th></tr></thead>
          <tbody>
            {SCALA.map(([liv, pt, token, uso]) => (
              <tr key={liv}><td><strong>{liv}</strong></td><td>{pt}</td><td><code>{token}</code></td><td>{uso}</td></tr>
            ))}
          </tbody>
        </table>

        <div className="dx-demo">
          <p className="drop-display">Display</p>
          <h1>Page title</h1>
          <h2>Section title</h2>
          <h3>Card title</h3>
          <h4>Sub heading</h4>
          <p className="drop-lead">Paragrafo introduttivo, leggermente più grande del corpo standard.</p>
          <p>
            Testo standard in Sora Medium. Aiutiamo imprese agroalimentari e zootecniche a crescere
            e comunicare con il mercato, con un marketing gentile, <span className="drop-accento">concreto e su misura</span>.
          </p>
          <p className="drop-caption" style={{ marginBottom: 0 }}>EYEBROW / CAPTION · 014</p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Regole di colore</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sempre</h4>
            <ul>
              <li>Titoli in <strong>teal</strong>.</li>
              <li>Corpo in <strong>ink</strong> #1F2A33.</li>
              <li>Evidenze in <strong>arancione</strong>, peso 700, solo su parole o frasi brevi.</li>
              <li><code>&lt;strong&gt;</code> resta ink: alza il peso, non cambia colore.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Mai</h4>
            <ul>
              <li>Colori diversi dentro lo stesso livello gerarchico.</li>
              <li>Un paragrafo intero in arancione.</li>
              <li>Titoli in ink o in nero.</li>
              <li>Testo in Regular 400 come corpo: il default è Medium 500.</li>
            </ul>
          </div>
        </div>

        <h2>Sei regole di composizione</h2>
        <table className="dx-tabella">
          <tbody>
            <tr><td><strong>01 · Allinea a sinistra</strong></td><td>Sempre rag-right. Il flusso di lettura italiano scorre da sinistra a destra: rispettalo.</td></tr>
            <tr><td><strong>02 · Aggancia x-height o baseline</strong></td><td>Due blocchi affiancati si allineano sulla baseline o sulla x-height, non sui bounding box.</td></tr>
            <tr><td><strong>03 · Dai spazio</strong></td><td>Lo spazio bianco è un elemento di progetto. Se due cose sono legate, avvicinale; se no, separale davvero.</td></tr>
            <tr><td><strong>04 · Salta peso, raddoppia size</strong></td><td>Per contrasto tipografico salta uno step di peso (500 → 700) e raddoppia la dimensione.</td></tr>
            <tr><td><strong>05 · Sorveglia il rag</strong></td><td>Il margine destro non deve disegnare forme strane: ritocca la copy o il contenitore.</td></tr>
            <tr><td><strong>06 · Riga 50-75 caratteri</strong></td><td>Anche cambiando corpo. Il token <code>--drop-misura</code> vale {tipografia.misura[1]}ch ed è già applicato ai paragrafi.</td></tr>
          </tbody>
        </table>

        <Codice>{`<h2>Conosciamo il settore <span class="⟦drop-accento⟧">perché ne facciamo parte</span></h2>
<p class="⟦drop-lead⟧">Da oltre 25 anni.</p>

/* La misura è già sui paragrafi. Se serve più stretta: */
p { max-width: ⟦var(--drop-misura)⟧; }`}</Codice>
      </section>
    </>
  );
}
