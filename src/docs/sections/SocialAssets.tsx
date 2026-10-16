import type { CSSProperties, ReactNode } from 'react';
import { asset } from '../../asset';
import { social } from '../../tokens';

type Tema = keyof typeof social.temi;
type Layout = 'copertina' | 'testo' | 'fotoTesto' | 'fotoPiena' | 'storiaCopertina' | 'storiaFoto';

const TEMI: [Tema, string][] = [
  ['dropChiaro', 'Drop chiaro'],
  ['dropTeal', 'Drop teal'],
  ['campo', 'Dal campo al digitale'],
  ['tech', 'Tech for change'],
  ['bussola', 'La bussola del marketing'],
];

const TAG: Record<Tema, string> = {
  dropChiaro: 'Tag topic', dropTeal: 'Tag topic',
  campo: 'Dal campo al digitale', tech: 'Tech for change', bussola: 'La bussola del marketing',
};

const SCALA = 0.2;
const abs = (s: CSSProperties): CSSProperties => ({ position: 'absolute', ...s });

/** Anteprima di un template a misura reale, rimpicciolita con transform. Solo libreria. */
function Post({ layout, tema }: { layout: Layout; tema: Tema }) {
  const t = social.temi[tema];
  const storia = layout.startsWith('storia');
  const { larghezza: w, altezza: h } = storia ? social.formati.storia : social.formati.feed;
  const g = social.goccia;
  const pos = storia ? g.storia : g.feed;
  const opacita = tema.startsWith('drop') ? g.opacita.drop : g.opacita.rubrica;
  const fotoPiena = layout === 'fotoPiena' || layout === 'storiaFoto';
  const conTag = layout === 'copertina' || layout === 'storiaCopertina';
  const evidenza = tema.startsWith('drop') && layout !== 'fotoTesto' && !fotoPiena;
  const ty = social.tipografia;
  const testo = fotoPiena ? social.sopraFoto.titolo : t.testo;
  const titoloTop = { copertina: 255, testo: 46, fotoTesto: 768, fotoPiena: 46, storiaCopertina: 435, storiaFoto: 225 }[layout];
  const corpoTop = { copertina: 600, testo: 391, fotoTesto: 1015, storiaCopertina: 780 }[layout as string];
  const tit = layout === 'fotoTesto' ? ty.titoloFoto : ty.titolo;

  const goccia = (
    <img src={asset(`brand/pattern/${t.goccia}`)} alt="" aria-hidden="true"
         style={abs({ left: pos.x, top: pos.y, width: g.larghezza, height: g.altezza, opacity: opacita })} />
  );
  const foto = layout === 'fotoTesto'
    ? <img src={asset('brand/esempi/social/foto-orizzontale.jpg')} alt="" style={abs({ left: 0, top: 0, width: w, height: 720, objectFit: 'cover' })} />
    : fotoPiena
      ? <img src={asset(`brand/esempi/social/${storia ? 'foto-storia' : 'foto-verticale'}.jpg`)} alt=""
             style={abs({ inset: 0, width: w, height: h, objectFit: 'cover', objectPosition: storia ? '72% 50%' : 'center' })} />
      : null;

  return (
    <div style={{ width: w * SCALA, height: h * SCALA, overflow: 'hidden', borderRadius: 6, boxShadow: 'var(--drop-shadow-sm)' }}>
      <div style={{ position: 'relative', width: w, height: h, overflow: 'hidden', transform: `scale(${SCALA})`, transformOrigin: '0 0',
                    background: fotoPiena ? '#E3EFFA' : t.fondo, fontFamily: 'var(--drop-font)', color: testo }}>
        {/* In Foto e testo la goccia sta dietro la foto; sulla foto piena sta sopra. */}
        {layout === 'fotoTesto' ? <>{goccia}{foto}</> : <>{foto}{goccia}</>}
        {conTag && (
          <div style={abs({ left: social.margine, top: storia ? 240 : 60, display: 'flex', alignItems: 'center', height: ty.tag.altezzaPillola,
                            padding: '0 60px', borderRadius: 42, background: t.accento, color: t.testoTag, fontSize: ty.tag.size,
                            fontWeight: ty.tag.peso, letterSpacing: `${ty.tag.tracking}em`, textTransform: 'uppercase', whiteSpace: 'nowrap' })}>
            {TAG[tema]}
          </div>
        )}
        <div style={abs({ left: social.margine, top: titoloTop, width: tit.larghezza, fontSize: tit.size, lineHeight: `${tit.interlinea}px`,
                          fontWeight: tit.peso, letterSpacing: '-0.01em', color: testo })}>
          Parliamo la lingua del {evidenza ? <span style={{ color: t.accento }}>settore primario</span> : 'settore primario'}
        </div>
        {corpoTop !== undefined && (
          <div style={abs({ left: social.margine, top: corpoTop, width: layout === 'fotoTesto' ? 860 : ty.corpo.larghezza,
                            fontSize: ty.corpo.size, lineHeight: `${ty.corpo.interlinea}px`, fontWeight: ty.corpo.peso, color: testo })}>
            Strategia e comunicazione per le filiere agroalimentari.
          </div>
        )}
        {layout !== 'storiaFoto' && (
          <img src={asset(`brand/loghi/${fotoPiena ? social.sopraFoto.logo : t.logo}`)} alt="DROP"
               style={abs({ left: social.margine, bottom: storia ? 260 : social.margine, height: social.logo.altezza })} />
        )}
      </div>
    </div>
  );
}

function Riga({ titolo, layout, children }: { titolo: string; layout: Layout; children: ReactNode }) {
  return (
    <>
      <h3 style={{ fontSize: 'var(--drop-fs-h4)' }}>{titolo}</h3>
      <p>{children}</p>
      <div className="dx-demo" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--drop-space-4)', overflowX: 'auto' }}>
        {TEMI.map(([tema, nome]) => (
          <figure key={tema} style={{ margin: 0 }}>
            <Post layout={layout} tema={tema} />
            <figcaption className="drop-small" style={{ marginTop: 'var(--drop-space-2)' }}>{nome}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export function SocialAssets() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="drop-occhiello">Templates</span>
          <h1>Social assets</h1>
          <p className="drop-lead">
            I post e le storie di DROP: cinque impaginati, cinque temi, due formati. I template
            modificabili stanno sulla tela «DROP Post social verticale» in Claude Design; qui
            sotto le regole e un'anteprima di ognuno.
          </p>
        </div>

        <div className="dx-note">
          <p>
            <strong>Tela dei template:</strong>{' '}
            <a href="https://claude.ai/artifact/GtRehEWMUhAZdzTJbanrag">claude.ai/artifact/GtRehEWMUhAZdzTJbanrag</a>{' '}
            · pagine «Feed 4:5» (Feed 01–20) e «Storie 9:16» (Storia 01–10). Si duplica una
            tavola, si cambiano testi e foto: la struttura non si tocca.
          </p>
        </div>

        <h2>Le regole</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sempre</h4>
            <ul>
              <li>Feed 1080×1350, storie 1080×1920. Margine 60 px; nelle storie tag e logo salgono di 180/200 px per l'area sicura.</li>
              <li>Una sola goccia, 905×964, in basso a destra e tagliata dai bordi: feed da 605,566, storie da 605,1136.</li>
              <li>Goccia al 10% sui temi Drop, al 30% sulle rubriche, nel colore d'accento del tema (paper sul teal, teal sul chiaro).</li>
              <li>Foto e testo: la goccia sta dietro la foto ed emerge sul fondo. Foto piena: la goccia sta sopra la foto.</li>
              <li>Tag a pillola 84 px, Sora 600 maiuscolo 28 px. Titolo Sora 700 80/96 (60/72 sotto la foto). Corpo Sora 500 40/48.</li>
              <li>Logo alto 68 px in basso a sinistra: a colori sul chiaro e sulle foto, bianco-arancio sul teal, bianco sulle rubriche.</li>
              <li>Parola in arancione solo nei temi Drop, solo nel titolo.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Mai</h4>
            <ul>
              <li>Cerchi concentrici o altri decori: la goccia li ha sostituiti.</li>
              <li>Goccia in basso a sinistra, ruotata o intera dentro la tavola.</li>
              <li>Logo ricolorato con l'accento della rubrica.</li>
              <li>Colori di una rubrica dentro un'altra, o sul sito.</li>
              <li>Testo chiaro sulla Bussola sotto i 40 px: il contrasto su <code>#30B9AB</code> è basso.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dx-section">
        <h2>Feed · 4:5</h2>
        <Riga titolo="Copertina con tag · Feed 01–05" layout="copertina">
          Apre una serie o un tema. Pillola con la rubrica, titolo su tre righe, una riga di corpo.
        </Riga>
        <Riga titolo="Testo · Feed 06–10" layout="testo">
          Il messaggio senza tag: titolo in alto, corpo sotto, tutto il resto è spazio e goccia.
        </Riga>
        <Riga titolo="Foto e testo · Feed 11–15" layout="fotoTesto">
          Foto 1080×720 in alto, titolo 60/72 sotto. La goccia sta dietro la foto.
        </Riga>
        <Riga titolo="Foto piena · Feed 16–20" layout="fotoPiena">
          La foto copre la tavola; titolo verde scuro in alto, logo a colori. Serve una foto chiara in alto.
        </Riga>
      </section>

      <section className="dx-section">
        <h2>Storie · 9:16</h2>
        <Riga titolo="Copertina con tag · Storia 01–05" layout="storiaCopertina">
          La copertina del feed spostata nell'area sicura: tag a 240, logo a 260 dal fondo.
        </Riga>
        <Riga titolo="Foto · Storia 06–10" layout="storiaFoto">
          Foto piena con titolo a 225. Niente logo: in una storia lo mette già il profilo.
        </Riga>
      </section>
    </>
  );
}
