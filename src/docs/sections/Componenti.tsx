import { Codice } from '../Codice';
import { Bottone } from '../../components/Bottone';
import { Scheda } from '../../components/Scheda';
import { BadgeSettore } from '../../components/BadgeSettore';
import { Citazione } from '../../components/Citazione';
import { Occhiello } from '../../components/Occhiello';
import { Logo } from '../../components/Logo';

export function Componenti() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Costruire</span>
          <h1>Componenti</h1>
          <p className="drop-lead">
            Ogni componente esiste in due forme: una classe CSS, per gli HTML statici e i
            materiali una-tantum, e un componente React, per il codice di prodotto. Le due forme
            sono la stessa cosa: il React non fa altro che comporre le classi.
          </p>
        </div>

        <h2>Occhiello</h2>
        <p>La firma tipografica di una sezione: un tick arancione da 40×2 px e sotto l'etichetta.</p>
        <div className="dx-demo">
          <Occhiello>I settori di riferimento</Occhiello>
          <h2 style={{ marginBottom: 0 }}>Agri · Food · Formazione</h2>
        </div>
        <div className="dx-demo dx-demo--teal">
          <Occhiello suScuro>Partner strategico</Occhiello>
          <h2 style={{ color: '#fff', marginBottom: 0 }}>Su fondo scuro l'etichetta diventa bianca</h2>
        </div>
        <Codice>{`<span class="⟦drop-occhiello⟧">I settori di riferimento</span>
<span class="drop-occhiello ⟦drop-occhiello--chiaro⟧">Su fondo scuro</span>`}</Codice>

        <h2>Bottoni</h2>
        <p>
          Sempre a pillola. L'arancione è l'azione primaria e ne va <strong>uno solo</strong> per
          schermata: se ce ne sono due, una delle due non è primaria.
        </p>
        <div className="dx-demo dx-row">
          <Bottone>Parliamone</Bottone>
          <Bottone variante="secondario">Scopri i servizi</Bottone>
          <Bottone variante="contorno">Leggi di più</Bottone>
          <Bottone piccolo>Piccolo</Bottone>
        </div>
        <div className="dx-demo dx-demo--teal dx-row">
          <Bottone>Parliamone</Bottone>
          <Bottone variante="su-scuro">Su fondo scuro</Bottone>
        </div>
        <Codice>{`<button class="⟦drop-btn⟧">Parliamone</button>
<button class="drop-btn ⟦drop-btn--secondario⟧">Scopri i servizi</button>
<button class="drop-btn ⟦drop-btn--contorno⟧">Leggi di più</button>
<button class="drop-btn ⟦drop-btn--su-scuro⟧">Sopra una fascia teal</button>`}</Codice>
      </section>

      <section className="dx-section">
        <h2>Card</h2>
        <p>
          L'anatomia del deck: foto 3:4 in alto, titolo, una frase. Nessun bordo a filo — la
          separazione la fa l'ombra. In una griglia 3-up, <strong>una card su tre va in teal
          pieno</strong>: è la regola di ritmo, non una decorazione.
        </p>
        <div className="dx-demo">
          <div className="drop-griglia">
            <div className="drop-col-4"><Scheda titolo="Radici e Innovazione" testo="Conosciamo il settore primario nel profondo, ma guardiamo avanti." /></div>
            <div className="drop-col-4"><Scheda scura titolo="Strategia Sostenibile" testo="Evitiamo sprechi e sovrastrutture: ogni azione genera valore reale." /></div>
            <div className="drop-col-4"><Scheda titolo="Alleanza Trasparente" testo="Non lavoriamo per i clienti, ma con loro." /></div>
          </div>
        </div>
        <Codice>{`<article class="⟦drop-card⟧">
  <div class="drop-card__media"><img src="…" alt=""></div>
  <h3>Radici e Innovazione</h3>
  <p>Conosciamo il settore primario nel profondo.</p>
</article>

<article class="drop-card ⟦drop-card--scura⟧">…</article>   <!-- una ogni tre -->`}</Codice>

        <h2>Badge di settore</h2>
        <p>
          Foto verticale con il cerchio ad anello arancione agganciato al piede. È l'unico
          contenitore-etichetta del brand, e sta al posto delle icone. Il badge sporge di 32 px:
          lascia spazio sotto la griglia.
        </p>
        <div className="dx-demo">
          <div className="drop-griglia" style={{ paddingBottom: 40 }}>
            {['Agri', 'Food', 'Formazione'].map(s => (
              <div className="drop-col-4" key={s}><BadgeSettore nome={s} /></div>
            ))}
          </div>
        </div>

        <h2>Citazione</h2>
        <div className="dx-demo">
          <Citazione fonte="Claudio Mariani · founder">
            Conosciamo il settore <span className="drop-accento">perché ne facciamo parte</span>, da oltre 25 anni.
          </Citazione>
        </div>
      </section>

      <section className="dx-section">
        <h2>Campi e form</h2>
        <p>
          Bordo teal-200 di 1,5 px che passa all'arancione in focus, con un alone morbido.
          Niente ombre interne, niente fondi grigi.
        </p>
        <div className="dx-demo" style={{ display: 'grid', gap: 'var(--drop-space-4)', maxWidth: 460 }}>
          <div>
            <label className="drop-etichetta" htmlFor="dx-email">La tua email</label>
            <input className="drop-campo" id="dx-email" placeholder="nome@azienda.it" />
          </div>
          <div>
            <label className="drop-etichetta" htmlFor="dx-msg">Raccontaci il progetto</label>
            <textarea className="drop-campo drop-campo--area" id="dx-msg" placeholder="Due righe bastano." />
          </div>
          <Bottone>Invia</Bottone>
        </div>
        <div className="dx-demo dx-demo--teal" style={{ maxWidth: 460 }}>
          <input className="drop-campo drop-campo--su-scuro" placeholder="La tua email" />
        </div>

        <h2>Navigazione</h2>
        <p>Barra a pillola bianca che galleggia sul contenuto. La voce attiva è arancione.</p>
        <div className="dx-demo dx-demo--paper">
          <nav className="drop-nav">
            <Logo altezza={30} />
            <div className="drop-nav__voci">
              <a href="#componenti" aria-current="page">Agenzia</a>
              <a href="#componenti">Servizi</a>
              <a href="#componenti">Settori</a>
              <a href="#componenti">Contatti</a>
            </div>
            <Bottone piccolo>Parliamone</Bottone>
          </nav>
        </div>

        <h2>Tabella</h2>
        <div className="dx-demo">
          <table className="drop-tabella drop-tabella--numerica">
            <thead><tr><th>Servizio</th><th>Durata</th><th>Formato</th></tr></thead>
            <tbody>
              <tr><td>Strategia di marketing e comunicazione</td><td>6 mesi</td><td>Retainer</td></tr>
              <tr><td>Brand identity</td><td>8 settimane</td><td>Progetto</td></tr>
              <tr><td>Formazione AI pratica</td><td>2 giornate</td><td>Aula</td></tr>
            </tbody>
          </table>
        </div>

        <div className="dx-note dx-note--teal">
          <p>
            <strong>Prima di aggiungere un componente.</strong> Guarda se esiste già in
            <code> components.css</code>. Se lo aggiungi: solo token semantici, spaziature dalla
            scala, e una voce qui dentro con anteprima dal vivo e snippet copiabile.
          </p>
        </div>
      </section>
    </>
  );
}
