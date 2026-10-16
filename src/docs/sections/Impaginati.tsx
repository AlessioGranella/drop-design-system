import { assetUrl } from '../../asset';
import { Codice } from '../Codice';
import { Slide } from '../../components/Slide';
import { Scheda } from '../../components/Scheda';
import { Bottone } from '../../components/Bottone';
import { Logo } from '../../components/Logo';
import { Occhiello } from '../../components/Occhiello';
import { Footer } from '../../components/Footer';

export function Impaginati() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Costruire</span>
          <h1>Ricette di impaginato</h1>
          <p className="drop-lead">
            Una ricetta per famiglia di materiali: come si monta una slide, come si apre una
            pagina web, come si chiude. Sono punti di partenza verificati, non gabbie — ma se ti
            allontani, allontanati sapendo da cosa.
          </p>
        </div>

        <h2>Deck · slide di sezione</h2>
        <p>
          Formato 16:9, margini interni al 4,1%. Occhiello-tick in alto a sinistra, titolo che
          occupa metà larghezza, marchio e numero di slide in basso a sinistra. Il primo terzo
          resta vuoto: è la regola di whitespace del brand book.
        </p>
        <div className="dx-demo" style={{ display: 'grid', gap: 'var(--drop-space-4)', gridTemplateColumns: '1fr 1fr' }}>
          <Slide occhiello="02 · Voce & Tono" numero="013">
            <h2 style={{ maxWidth: '12ch', marginTop: 'auto' }}>Parliamo come parlano le persone del settore</h2>
          </Slide>
          <Slide occhiello="Valori" numero="010" teal>
            <h2 style={{ maxWidth: '14ch', marginTop: 'auto', color: '#fff' }}>
              Tre principi che orientano <span className="drop-accento">ogni scelta</span>
            </h2>
          </Slide>
        </div>
        <Codice>{`import { Slide } from 'drop-design-system';

<Slide occhiello="Valori" numero="010" ⟦teal⟧>
  <h2>Tre principi che orientano <span class="drop-accento">ogni scelta</span></h2>
</Slide>`}</Codice>

        <h2>Deck · griglia 3-up con highlight</h2>
        <p>Tre card in fila, la centrale in teal. È il modulo più riconoscibile del deck.</p>
        <div className="dx-demo">
          <Slide occhiello="Valori" numero="010">
            <div className="drop-griglia" style={{ marginTop: 'var(--drop-space-4)', gap: 12 }}>
              {[['Radici e Innovazione', false], ['Strategia Sostenibile', true], ['Alleanza Trasparente', false]].map(([t, scura]) => (
                <div className="drop-col-4" key={t as string}>
                  <div style={{ background: scura ? 'var(--drop-teal)' : '#fff', color: scura ? '#fff' : 'var(--drop-teal)',
                    borderRadius: 'var(--drop-radius-md)', padding: 12, boxShadow: 'var(--drop-shadow-sm)',
                    fontWeight: 700, fontSize: 13, lineHeight: 1.2, minHeight: 64 }}>{t as string}</div>
                </div>
              ))}
            </div>
          </Slide>
        </div>
      </section>

      <section className="dx-section">
        <h2>Web · apertura di pagina</h2>
        <p>
          Nav a pillola che galleggia, hero su fondo teal con il pattern goccia sulla destra,
          titolo con una sola parola in arancione, due azioni di cui una sola primaria.
        </p>
        <div className="dx-demo" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: 'var(--drop-space-4)' }}>
            <nav className="drop-nav">
              <Logo altezza={26} />
              <div className="drop-nav__voci">
                <a href="#impaginati" aria-current="page">Agenzia</a>
                <a href="#impaginati">Servizi</a>
                <a href="#impaginati">Contatti</a>
              </div>
              <Bottone piccolo>Parliamone</Bottone>
            </nav>
          </div>
          <section className="drop-fascia drop-fascia--teal" style={{ paddingBlock: 'var(--drop-space-16)' }}>
            <span className="drop-pattern" style={{ ['--drop-pattern-src' as string]: assetUrl('brand/pattern/goccia-bianco.svg') }} />
            <div className="drop-fascia__inner">
              <Occhiello suScuro>Partner strategico</Occhiello>
              <h1 style={{ color: '#fff', maxWidth: '16ch' }}>
                Parliamo la lingua del <span className="drop-accento">settore primario</span>
              </h1>
              <p style={{ maxWidth: '52ch' }}>
                Aiutiamo imprese agroalimentari e zootecniche a crescere e comunicare con il
                mercato. Conosciamo il settore perché ne facciamo parte, da oltre 25 anni.
              </p>
              <div className="dx-row" style={{ marginTop: 'var(--drop-space-6)' }}>
                <Bottone>Parliamone</Bottone>
                <Bottone variante="su-scuro">Scopri i servizi</Bottone>
              </div>
            </div>
          </section>
        </div>

        <h2>Web · fascia di contenuto</h2>
        <div className="dx-demo" style={{ padding: 0, overflow: 'hidden' }}>
          <section className="drop-fascia drop-fascia--bianca" style={{ paddingBlock: 'var(--drop-space-12)' }}>
            <div className="drop-fascia__inner">
              <Occhiello>Di cosa ci occupiamo</Occhiello>
              <h2 style={{ maxWidth: '20ch' }}>Quattro cose, fatte bene</h2>
              <div className="drop-griglia" style={{ marginTop: 'var(--drop-space-8)' }}>
                {[['Strategia', 'Marketing e comunicazione su misura per le filiere.'],
                  ['Brand identity', 'Marchi riconoscibili, coerenti, che durano.'],
                  ['Contenuti & tools', 'Dal sito ai contenuti che lo alimentano.']].map(([t, d], i) => (
                  <div className="drop-col-4" key={t}>
                    <Scheda titolo={t} testo={d} scura={i === 1} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <h2>Web · chiusura</h2>
        <p>Fascia teal con pattern, una domanda, un campo e un bottone. Poi il footer.</p>
        <div className="dx-demo" style={{ padding: 0, overflow: 'hidden' }}>
          <section className="drop-fascia drop-fascia--teal" style={{ paddingBlock: 'var(--drop-space-12)' }}>
            <span className="drop-pattern" style={{ ['--drop-pattern-src' as string]: assetUrl('brand/pattern/goccia-bianco.svg') }} />
            <div className="drop-fascia__inner">
              <Occhiello suScuro>Parliamone</Occhiello>
              <h2 style={{ color: '#fff', maxWidth: '18ch' }}>
                Raccontaci la tua Azienda, ti diciamo <span className="drop-accento">da dove partire</span>
              </h2>
              <div className="dx-row" style={{ maxWidth: 520 }}>
                <input className="drop-campo drop-campo--su-scuro" style={{ flex: 1, minWidth: 200 }} placeholder="La tua email" />
                <Bottone>Invia</Bottone>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </section>

      <section className="dx-section">
        <h2>Cosa è fuori sistema</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Dentro</h4>
            <ul>
              <li>Fasce alternate bianco / paper / teal, con il teal usato con parsimonia.</li>
              <li>Una sola azione primaria arancione per schermata.</li>
              <li>Fotografia dove verrebbe voglia di mettere un'icona.</li>
              <li>Spazio vuoto prima del titolo.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Fuori</h4>
            <ul>
              <li>Gradienti decorativi, glassmorphism, ombre colorate diverse dal teal.</li>
              <li>Parallasse, scroll-jacking, tipografia cinetica: il brand è calmo.</li>
              <li>Card con bordo a filo invece dell'ombra.</li>
              <li>Due colori brand dentro lo stesso livello di testo.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
