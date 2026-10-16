import { brand, stampa, teal, orange, neutri, combinazioni, rubriche, bordeaux } from '../../tokens';
import { Codice } from '../Codice';
import { useCopia } from '../Copiabile';

const SEMANTICI: [string, string][] = [
  ['--drop-bg', 'Fondo pagina: bianco. Lo whitespace è un elemento di progetto, non spazio avanzato.'],
  ['--drop-bg-soft', 'Fascia tenue e card secondarie, in paper #E3EFFA.'],
  ['--drop-bg-dark', 'Fascia piena in teal: hero, CTA, divisori di sezione.'],
  ['--drop-bg-deep', 'Fondo profondo in black #021222: footer, chiusure.'],
  ['--drop-fg', 'Corpo del testo, in ink #1F2A33.'],
  ['--drop-fg-title', 'Titoli, in teal. Mai in ink, mai in arancione.'],
  ['--drop-accent', 'Arancione: parole evidenziate, CTA, tick dell’occhiello.'],
  ['--drop-on-dark / --drop-on-dark-muted', 'Testo e testo secondario sopra una fascia scura.'],
  ['--drop-data-1 … --drop-data-6', 'Serie dei grafici, in ordine di lettura.'],
];

export function Colore() {
  const [copiato, copia] = useCopia();

  const Scala = ({ voci, chiari }: { voci: [string, string][]; chiari: Set<string> }) => (
    <div className="dx-scala">
      {voci.map(([passo, hex]) => (
        <button key={passo} type="button" style={{ background: hex, color: chiari.has(passo) ? '#1F2A33' : '#fff' }}
                onClick={() => copia(hex)} title={`Copia ${hex}`}>
          <span>{passo}</span><span style={{ opacity: .8 }}>{hex}</span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Fondamenta · brand book 04</span>
          <h1>Colore</h1>
          <p className="drop-lead">
            L'identità DROP è costruita su due soli colori brand: un teal profondo e un arancione
            caldo. Tutto il resto è neutro, tinta o accento di supporto. Qualsiasi colore fuori da
            questa sezione è considerato non autorizzato.
          </p>
        </div>

        <h2>Palette primaria</h2>
        <p className="dx-suggerimento">Clic su un colore per copiarne l'esadecimale.</p>
        <div className="drop-griglia" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {([['Drop Teal', brand.teal, stampa.teal, 'Primario · titoli, corpo, wordmark, sfondi pieni.'],
             ['Drop Orange', brand.orange, stampa.orange, 'Accento · la «O» del logo, parole evidenziate, CTA, dettagli.']] as const)
            .map(([nome, hex, st, ruolo]) => (
            <div className="drop-col-6" key={nome}>
              <div className="dx-swatch">
                <button type="button" className="dx-swatch__chip" style={{ height: 150, background: hex }}
                        onClick={() => copia(hex)} aria-label={`Copia ${hex}`} />
                <div className="dx-swatch__meta" style={{ padding: 'var(--drop-space-4)' }}>
                  <strong style={{ fontSize: 'var(--drop-fs-h4)' }}>{nome}</strong>
                  <code onClick={() => copia(hex)}>{hex}</code>
                  <table className="dx-tabella" style={{ marginTop: 'var(--drop-space-3)', marginBottom: 0 }}>
                    <tbody>
                      <tr><td>Pantone</td><td>{st.pantoneC}</td></tr>
                      <tr><td>RGB</td><td>{st.rgb.join(' · ')}</td></tr>
                    </tbody>
                  </table>
                  <p className="drop-small" style={{ marginTop: 'var(--drop-space-3)', marginBottom: 0 }}>{ruolo}</p>
                </div>
                {copiato === hex && <span className="dx-copiato">copiato</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="dx-note">
          <p>
            È consigliato il Pantone Matching System per garantire coerenza su ogni supporto.
            Valori aggiornati al 16/10/2026 dalla tavola «Nuovo Pantone», che dà i soli coated:
            CMYK e uncoated vanno riverificati prima di andare in stampa.
          </p>
        </div>

        <h2>Rubriche social</h2>
        <p>
          Ogni rubrica dei social ha una coppia: un fondo scuro e un accento chiaro per la pillola
          del tag, i cerchi e la goccia. Si usano solo nei template della rubrica, mai nel marchio
          né sul sito.
        </p>
        <div className="dx-swatches" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {([...Object.values(rubriche).flatMap((r) => [[`${r.nome} · scuro`, r.scuro], [`${r.nome} · chiaro`, r.chiaro]]),
             ['Bordeaux · ruolo da definire', bordeaux]] as [string, string][])
            .map(([nome, hex]) => (
            <div className="dx-swatch" key={nome}>
              <button type="button" className="dx-swatch__chip" style={{ background: hex }}
                      onClick={() => copia(hex)} aria-label={`Copia ${hex}`} />
              <div className="dx-swatch__meta">
                <strong>{nome}</strong>
                <code onClick={() => copia(hex)}>{hex}</code>
              </div>
              {copiato === hex && <span className="dx-copiato">copiato</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="dx-section">
        <h2>Scale</h2>
        <p>
          Derivano dai due colori brand e servono a superfici, sfondi, bordi e stati hover/active
          dell'interfaccia. Non sostituiscono mai i colori brand nella composizione del marchio.
        </p>
        <h3 style={{ fontSize: 'var(--drop-fs-h4)' }}>Teal · il 700 è il colore brand</h3>
        <div style={{ marginBottom: 'var(--drop-space-8)' }}>
          <Scala voci={Object.entries(teal) as [string, string][]} chiari={new Set(['050', '100', '200', '300'])} />
        </div>
        <h3 style={{ fontSize: 'var(--drop-fs-h4)' }}>Arancione · il 500 è il colore brand</h3>
        <div style={{ marginBottom: 'var(--drop-space-8)' }}>
          <Scala voci={Object.entries(orange) as [string, string][]} chiari={new Set(['100', '200', '300'])} />
        </div>

        <h2>Neutri</h2>
        <p>
          Bianco e nero fanno parte della palette ma non sono mai puri: bianco caldo «paper»,
          nero blu profondo «black». Per i testi si tiene sempre un contrasto minimo di 4.5:1.
        </p>
        <div className="dx-swatches" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {(Object.entries(neutri) as [string, string][]).map(([nome, hex]) => (
            <div className="dx-swatch" key={nome}>
              <button type="button" className="dx-swatch__chip"
                      style={{ background: hex, border: hex === '#FFFFFF' ? '1px solid rgba(0,0,0,.08)' : 'none' }}
                      onClick={() => copia(hex)} aria-label={`Copia ${hex}`} />
              <div className="dx-swatch__meta">
                <strong>{nome}</strong>
                <code onClick={() => copia(hex)}>{hex}</code>
              </div>
              {copiato === hex && <span className="dx-copiato">copiato</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="dx-section">
        <h2>Combinazioni</h2>
        <p>
          Quasi tutti i colori della palette si combinano fra loro: cerca sempre la leggibilità,
          soprattutto nei testi. Le combinazioni vietate sono quelle a basso contrasto o
          cromaticamente dissonanti.
        </p>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Funzionano</h4>
            <ul>{combinazioni.ok.map(([, , nome]) => <li key={nome}>{nome}</li>)}</ul>
          </div>
          <div className="dx-dont">
            <h4>Non funzionano</h4>
            <ul>{combinazioni.no.map(([, , nome]) => <li key={nome}>{nome}</li>)}</ul>
          </div>
        </div>
        <div className="dx-row" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {combinazioni.ok.map(([fg, bg, nome]) => (
            <div key={nome} style={{ background: bg, color: fg, padding: '22px 26px',
              borderRadius: 'var(--drop-radius-md)', fontWeight: 700, fontSize: 22,
              border: bg === '#FFFFFF' || bg === '#E3EFFA' ? '1px solid var(--drop-border)' : 'none' }}>
              DR<span style={{ color: 'var(--drop-orange)' }}>O</span>P
            </div>
          ))}
        </div>

        <h2>Token semantici</h2>
        <p>
          I componenti si agganciano solo a questi. Chi ricolora un contesto rimappa questi token,
          mai i colori brand in chiaro.
        </p>
        <table className="dx-tabella">
          <thead><tr><th style={{ width: '38%' }}>Token</th><th>A cosa serve</th></tr></thead>
          <tbody>{SEMANTICI.map(([t, d]) => <tr key={t}><td><code>{t}</code></td><td>{d}</td></tr>)}</tbody>
        </table>

        <Codice>{`/* Un contesto scuro non ha override: rimappa i token e basta. */
.drop-fascia--teal {
  background: ⟦var(--drop-bg-dark)⟧;
  color: ⟦var(--drop-on-dark)⟧;
}`}</Codice>
      </section>
    </>
  );
}
