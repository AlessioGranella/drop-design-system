import { Citazione } from '../../components/Citazione';

const SIAMO: [string, string][] = [
  ['Caldi e sicuri', 'Freddi, distanti'],
  ['Insider, parte del settore', 'Pitchers da fuori'],
  ['Concreti, su misura', 'Buzzword, hype, slogan'],
  ['In prima persona plurale (noi)', 'Impersonali, in terza persona'],
];

const PAROLE = [
  'partner strategico', 'settore primario', 'agroalimentare', 'zootecniche', 'filiere',
  'brand riconosciuti', 'risultati condivisi', 'valore reale', 'innovazione',
  'strategia sostenibile', 'alleanza trasparente', 'concreto', 'utile', 'su misura',
  'aiutiamo', 'supportiamo', 'trasformiamo',
];

export function VoceTono() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Marca · brand book 02</span>
          <h1>Voce e tono</h1>
          <p className="drop-lead">
            La voce di DROP è calda, consapevole, radicata e silenziosamente orgogliosa. È la voce
            di un'agenzia che parla dall'interno del mondo dei suoi clienti, non dall'esterno.
            Non vende: lascia che siano il lavoro e i risultati a parlare.
          </p>
        </div>

        <div className="dx-demo">
          <Citazione fonte="DROP · Brand Book v1.0, p.014">
            DROP è l'agenzia di comunicazione e marketing strategico che parla la lingua del
            settore primario. Con un marketing gentile, <span className="drop-accento">concreto e su misura</span>,
            trasformiamo le imprese in brand riconosciuti, affidabili e competitivi.
          </Citazione>
        </div>

        <h2>Siamo / non siamo</h2>
        <table className="dx-tabella">
          <thead><tr><th>Siamo</th><th>Non siamo</th></tr></thead>
          <tbody>{SIAMO.map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody>
        </table>

        <h2>Parole che diciamo spesso</h2>
        <p>Ricorrono in tutte le comunicazioni perché esprimono come pensiamo: orientati alle persone, all'azione, alla sostanza.</p>
        <div className="dx-row" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {PAROLE.map(p => (
            <span key={p} style={{ background: 'var(--drop-teal-050)', color: 'var(--drop-teal)',
              border: '1px solid var(--drop-teal-200)', borderRadius: 'var(--drop-radius-pill)',
              padding: '6px 14px', fontSize: 'var(--drop-fs-label)', fontWeight: 500 }}>{p}</span>
          ))}
        </div>
      </section>

      <section className="dx-section">
        <h2>Master style list</h2>
        <table className="dx-tabella">
          <tbody>
            <tr><td style={{ width: '28%' }}><strong>Nome del brand</strong></td>
                <td>DROP in maiuscolo nel testo formale; Drop nel testo discorsivo. Mai «drop» tutto minuscolo.</td></tr>
            <tr><td><strong>Titoli</strong></td>
                <td>Sentence case, non Title Case all'inglese. Nomi propri capitalizzati.</td></tr>
            <tr><td><strong>Persona</strong></td>
                <td>Sempre prima persona plurale (noi). Il cliente in seconda persona: tu, la tua Azienda.</td></tr>
            <tr><td><strong>Punteggiatura</strong></td>
                <td>Apostrofi tipografici (’). Niente punti esclamativi. Niente emoji.</td></tr>
            <tr><td><strong>Numeri</strong></td>
                <td>«25 anni», non «venticinque anni». Telefono: 335.5321140.</td></tr>
            <tr><td><strong>Email</strong></td>
                <td>In minuscolo: claudio.mariani@digitaldrop.eu.</td></tr>
          </tbody>
        </table>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Così</h4>
            <ul>
              <li>«Aiutiamo imprese agroalimentari e zootecniche a crescere e comunicare con il mercato.»</li>
              <li>Verbo in prima persona plurale, presente, soggetto chiaro.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Non così</h4>
            <ul>
              <li>«DROP è la migliore agenzia digitale per l'agroalimentare.»</li>
              <li>Hype, autocelebrativo, distante.</li>
            </ul>
          </div>
        </div>

        <h2>I tre valori</h2>
        <div className="drop-griglia">
          {[
            ['Radici e Innovazione', 'Conosciamo il settore primario nel profondo, ma guardiamo avanti, innovando in modo concreto e utile.'],
            ['Strategia Sostenibile', 'Evitiamo sprechi e sovrastrutture: ogni azione è pensata per generare valore reale.'],
            ['Alleanza Trasparente', 'Non lavoriamo per i clienti, ma con loro. Costruiamo relazioni basate su fiducia e risultati condivisi.'],
          ].map(([t, d], i) => (
            <div className="drop-col-4" key={t}>
              <article className={`drop-card${i === 1 ? ' drop-card--scura' : ''}`}>
                <h3>{t}</h3><p>{d}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
