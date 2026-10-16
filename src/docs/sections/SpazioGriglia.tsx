import { spazio, raggi, slide } from '../../tokens';
import { Codice } from '../Codice';

export function SpazioGriglia() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Fondamenta · brand book 06</span>
          <h1>Spazio e griglia</h1>
          <p className="drop-lead">
            DROP usa margini ampi: il primo terzo — o la prima metà — di una pagina o di una slide
            resta vuoto prima che compaia il titolo. I contenuti si organizzano in griglie da 3 o 4
            colonne, con una card in teal a dare ritmo.
          </p>
        </div>

        <h2>Scala di spazio</h2>
        <p>Passo 4 pt. Le spaziature vengono sempre da qui, mai da pixel scritti a mano.</p>
        <div className="dx-demo">
          {Object.entries(spazio).map(([k, v]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 6 }}>
              <code style={{ width: 150, fontSize: 12, color: 'var(--drop-teal-600)' }}>--drop-space-{k}</code>
              <span style={{ width: 46, fontSize: 12, color: 'var(--drop-fg-muted)' }}>{v}px</span>
              <span style={{ height: 12, width: v, background: 'var(--drop-orange)', borderRadius: 2 }} />
            </div>
          ))}
        </div>

        <h2>Raggi</h2>
        <p>
          Il marchio è costruito su archi a raggio costante: le superfici seguono. Niente angoli
          vivi su card, foto e pulsanti. Le card grandi stanno fra 20 e 28 px, le foto dentro le
          card a 20, i pulsanti sempre a pillola.
        </p>
        <div className="dx-row" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {Object.entries(raggi).map(([k, v]) => (
            <div key={k} style={{ textAlign: 'center' }}>
              <div style={{ width: 96, height: 72, background: 'var(--drop-teal-100)',
                            border: '1.5px solid var(--drop-teal-300)', borderRadius: v }} />
              <span className="drop-caption" style={{ display: 'block', marginTop: 6 }}>{k} · {v}px</span>
            </div>
          ))}
        </div>

        <h2>Ombre</h2>
        <p>
          Tinte di teal, mai grigio neutro: le card galleggiano su fondi fotografici e un'ombra
          grigia le stacca male. <code>--drop-shadow-card</code> è quella del deck.
        </p>
        <div className="dx-row" style={{ marginBottom: 'var(--drop-space-8)' }}>
          {['sm', 'md', 'lg', 'card'].map(k => (
            <div key={k} style={{ width: 150, height: 96, background: '#fff', borderRadius: 'var(--drop-radius-lg)',
                                  boxShadow: `var(--drop-shadow-${k})`, display: 'grid', placeItems: 'center',
                                  fontSize: 12, color: 'var(--drop-fg-muted)' }}>
              shadow-{k}
            </div>
          ))}
        </div>
      </section>

      <section className="dx-section">
        <h2>Griglia</h2>
        <p>
          Dodici colonne, larghezza massima 1280 px, gutter 24, margine 32. Le griglie di contenuto
          reale però sono da 3 o 4 colonne: la dodicesima serve solo a comporle.
        </p>
        <div className="dx-demo">
          <div className="drop-griglia">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="drop-col-1" style={{ background: 'var(--drop-teal-100)', height: 56,
                borderRadius: 'var(--drop-radius-xs)', display: 'grid', placeItems: 'center', fontSize: 11,
                color: 'var(--drop-teal-600)' }}>{i + 1}</div>
            ))}
          </div>
        </div>
        <div className="dx-demo">
          <div className="drop-griglia">
            {['drop-col-4', 'drop-col-4', 'drop-col-4'].map((c, i) => (
              <div key={i} className={c} style={{ background: i === 1 ? 'var(--drop-teal)' : 'var(--drop-teal-100)',
                color: i === 1 ? '#fff' : 'var(--drop-teal-600)', height: 96, borderRadius: 'var(--drop-radius-md)',
                display: 'grid', placeItems: 'center', fontSize: 12 }}>
                {i === 1 ? 'highlight' : '3-up'}
              </div>
            ))}
          </div>
        </div>

        <div className="dx-note dx-note--teal">
          <p>
            <strong>Griglia dentro un layout con barra laterale.</strong> Serve
            <code> container-type: inline-size</code> sul contenitore del contenuto, e nessun
            <code> max-width</code> che ricappi la colonna principale. Senza, le media query
            guardano la finestra e le card non si adattano all'area disponibile.
          </p>
        </div>

        <h2>Fasce</h2>
        <p>
          Una fascia occupa tutta la larghezza; il contenuto sta nel wrapper interno. Il padding
          orizzontale va <strong>sul wrapper interno</strong>, non sulla fascia: è l'unico modo
          perché i bordi sinistri di fasce diverse combacino. Se lo metti fuori, ti ritrovi il
          classico disallineamento di ~32 px fra una fascia e l'altra.
        </p>
        <Codice>{`<section class="drop-fascia drop-fascia--teal">
  <div class="⟦drop-fascia__inner⟧">   <!-- qui il padding, non sulla fascia -->
    <h2>Il titolo della fascia</h2>
  </div>
</section>`}</Codice>

        <h2>Slide</h2>
        <p>
          Il deck è 16:9, {slide.larghezza}×{slide.altezza} px, con margini interni di
          {' '}{slide.margineMm} mm — il {String(slide.marginePct).replace('.', ',')}% della
          larghezza. Il telaio è già nel componente <code>Slide</code>.
        </p>
      </section>
    </>
  );
}
