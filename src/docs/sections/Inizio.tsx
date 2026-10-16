import { Codice } from '../Codice';

export function Inizio() {
  return (
    <section className="dx-section">
      <div className="dx-h">
        <span className="drop-occhiello">Design System · v1.0</span>
        <h1>Due colori, un carattere, <span className="drop-accento">molta fotografia</span>.</h1>
        <p className="drop-lead">
          Questo sistema traduce in codice il Brand Book DROP v1.0. Tiene i valori normativi —
          colori, carattere, proporzioni del marchio, regole di composizione — e aggiunge quello
          che il brand book non copre: gli stati dell'interfaccia, i componenti, le ricette di
          impaginato. Dove un materiale già prodotto si discosta dal brand book, vince il brand book.
        </p>
      </div>

      <div className="dx-note">
        <p>
          <strong>La regola di partenza.</strong> DROP è un brand sottrattivo: due colori e basta,
          un carattere e basta, nessuna icona. Quando manca qualcosa, la risposta quasi sempre non è
          aggiungere un elemento grafico — è una fotografia, o dello spazio bianco.
        </p>
      </div>

      <Codice>{`<link rel="stylesheet" href="src/styles/colors_and_type.css">
<link rel="stylesheet" href="src/styles/components.css">

<section class="⟦drop-fascia drop-fascia--bianca⟧">
  <div class="drop-fascia__inner">
    <span class="⟦drop-occhiello⟧">I settori di riferimento</span>
    <h2>Aiutiamo le imprese del <span class="⟦drop-accento⟧">settore primario</span></h2>
    <button class="⟦drop-btn⟧">Parliamone</button>
  </div>
</section>`}</Codice>

      <h2>Cosa contiene</h2>
      <div className="drop-griglia" style={{ marginBottom: 'var(--drop-space-12)' }}>
        {[
          ['Fondamenta', 'Colore, tipografia, spazio e griglia: i valori normativi del brand book, più i derivati che servono all’interfaccia.'],
          ['Marca', 'Il marchio con le sue quattro varianti e le regole di costruzione, il pattern goccia, la fotografia, la voce.'],
          ['Costruire', 'I componenti pronti e le ricette di impaginato — slide, pagina web, brand space.'],
        ].map(([t, d]) => (
          <div className="drop-col-4" key={t}>
            <article className="drop-card drop-card--paper">
              <h3>{t}</h3><p>{d}</p>
            </article>
          </div>
        ))}
      </div>

      <h2>Le regole che non si negoziano</h2>
      <div className="dx-do-dont">
        <div className="dx-do">
          <h4>Sempre</h4>
          <ul>
            <li>Titoli in <strong>teal</strong>, corpo in <strong>ink</strong>, evidenze in <strong>arancione</strong>.</li>
            <li>Il corpo del testo è Sora <strong>Medium (500)</strong>, non Regular.</li>
            <li>Fotografia reale al posto delle icone.</li>
            <li>Riga di testo fra <strong>50 e 75 caratteri</strong>.</li>
            <li>Il marchio allineato a sinistra o centrato, mai a destra.</li>
          </ul>
        </div>
        <div className="dx-dont">
          <h4>Mai</h4>
          <ul>
            <li>Colori fuori palette: qualsiasi altra tinta non è autorizzata.</li>
            <li>Nero puro o bianco puro come colore di testo o fondo pieno.</li>
            <li>Emoji, punti esclamativi, Title Case all'inglese.</li>
            <li>Il pattern goccia teal su bianco: esiste solo bianco su teal.</li>
            <li>Foto quadrate 1:1, o deformazioni ed effetti sul marchio.</li>
          </ul>
        </div>
      </div>

      <h2>Se cambi qualcosa</h2>
      <p>
        I token stanno in <code>src/styles/colors_and_type.css</code> e hanno uno specchio in
        JavaScript in <code>src/tokens.ts</code>: sono due copie e vanno allineate a mano.
        I componenti usano solo token semantici — <code>--drop-accent</code>,
        <code> --drop-bg-dark</code>, <code>--drop-fg-title</code> — mai i colori brand in chiaro:
        così ricolorare un contesto non richiede un solo override per-componente.
      </p>
    </section>
  );
}
