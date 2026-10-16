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

/** Tela Claude Design dei template. Il frammento `artboard-…` è quello che produce
 *  «Copy link to artboard» nell'editor: un hash del nome del file, quindi se una tavola
 *  viene rinominata il suo link va ricalcolato. */
const TELA = 'https://claude.ai/artifact/GtRehEWMUhAZdzTJbanrag';
const PAGINA = { feed: 'page-0eb17439736d', storie: 'page-0c267c142117' };

/** Per ogni impaginato, i file della tela nell'ordine dei temi di TEMI. */
const FILE: Record<Layout, [string, string][]> = {
  copertina: [
    ['Feed 01', 'artboard-0f16ed180166'], ['Feed 02', 'artboard-8fe1c1b0e06c'], ['Feed 03', 'artboard-52378cd28f97'],
    ['Feed 04', 'artboard-e546cf17831f'], ['Feed 05', 'artboard-c8230a016f2e'],
  ],
  testo: [
    ['Feed 06', 'artboard-cc5eca1691af'], ['Feed 07', 'artboard-d160f66a34fa'], ['Feed 08', 'artboard-f8b2386447da'],
    ['Feed 09', 'artboard-c723db8f34b4'], ['Feed 10', 'artboard-3eed1b8c0e90'],
  ],
  fotoTesto: [
    ['Feed 11', 'artboard-4a1f51450fa4'], ['Feed 12', 'artboard-ef6e5dc3a987'], ['Feed 13', 'artboard-6b90c953878a'],
    ['Feed 14', 'artboard-7bb00e248844'], ['Feed 15', 'artboard-527cd39e38bf'],
  ],
  fotoPiena: [
    ['Feed 16', 'artboard-99a706c90df9'], ['Feed 17', 'artboard-f21647c41f44'], ['Feed 18', 'artboard-49df3d62d09e'],
    ['Feed 19', 'artboard-a5ba4a7f17f4'], ['Feed 20', 'artboard-4d1e912f6b40'],
  ],
  storiaCopertina: [
    ['Storia 01', 'artboard-38a2d49487ba'], ['Storia 02', 'artboard-d903e42b6a8a'], ['Storia 03', 'artboard-b82bb3764f74'],
    ['Storia 04', 'artboard-e81b141ba43f'], ['Storia 05', 'artboard-bd74f7d22884'],
  ],
  storiaFoto: [
    ['Storia 06', 'artboard-8cd8a6604c94'], ['Storia 07', 'artboard-61f39640d41e'], ['Storia 08', 'artboard-3bfae65942f2'],
    ['Storia 09', 'artboard-c9632a0d38f9'], ['Storia 10', 'artboard-4b5364402246'],
  ],
};

const SCALA = 0.19;
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
      <div className="dx-demo" style={{ display: 'flex', flexWrap: 'nowrap', gap: 'var(--drop-space-3)', overflowX: 'auto' }}>
        {TEMI.map(([tema, nome], i) => {
          const [codice, frammento] = FILE[layout][i];
          const href = `${TELA}#${frammento}`;
          return (
            <figure key={tema} style={{ margin: 0 }}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Apri ${codice} · ${nome} su Claude Design`}>
                <Post layout={layout} tema={tema} />
              </a>
              <figcaption className="drop-small" style={{ marginTop: 'var(--drop-space-2)' }}>
                <a href={href} target="_blank" rel="noopener noreferrer"><strong>{codice}</strong></a> · {nome}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}

/* ------------------------------------------------------------- CAROSELLI */

const PAGINA_CAROSELLI = 'page-85e66434849e';
const CAR = (f: string) => asset(`brand/esempi/social/carosello/${f}`);
const NOTTE = '#021222';
const PAPER = '#E3EFFA';
const ROSSO = '#F03F35';

/** Foto posizionata come nel PDF: misure e scostamenti reali, ritagliata dal contenitore. */
const Foto = ({ f, l, t, w, h }: { f: string; l: number; t: number; w: number; h: number }) => (
  <img src={CAR(f)} alt="" style={abs({ left: l, top: t, width: w, height: h, maxWidth: 'none' })} />
);
/** Striscia di 18–20 px con la foto della slide accanto: dà la continuità allo scorrimento. */
const Striscia = ({ x, w, children }: { x: number; w: number; children: ReactNode }) => (
  <div aria-hidden="true" style={abs({ left: x, top: 0, width: w, height: 1350, overflow: 'hidden' })}>{children}</div>
);
const Freccia = ({ colore }: { colore: string }) => (
  <svg aria-hidden="true" width="74" height="60" viewBox="0 0 74 60" style={abs({ left: 950, top: 1233 })}>
    <path d="M4 30 H66 M44 4 L70 30 L44 56" fill="none" stroke={colore} strokeWidth="8" />
  </svg>
);
const Goccia = ({ f }: { f: 'paper' | 'teal' }) => (
  <img src={asset(`brand/pattern/goccia-${f}.svg`)} alt="" aria-hidden="true"
       style={abs({ left: 605, top: 566, width: 905, height: 964, opacity: 0.1 })} />
);
const Logo = ({ chiaro, centro }: { chiaro: boolean; centro?: boolean }) => (
  <img src={asset(`brand/loghi/${chiaro ? 'drop.svg' : 'drop-bianco-arancio.svg'}`)} alt="DROP"
       style={abs(centro ? { left: 377, top: 628, height: 94 } : { left: 60, bottom: 58, height: social.logo.altezza })} />
);
const Titolo = ({ top, size, colore, children, w = 900 }: { top: number; size: 60 | 80; colore: string; children: ReactNode; w?: number }) => (
  <div style={abs({ left: 60, top, width: w, fontSize: size, lineHeight: `${size * 1.2}px`, fontWeight: 700, letterSpacing: '-0.01em', color: colore })}>{children}</div>
);
const Corpo = ({ top, colore }: { top: number; colore: string }) => (
  <div style={abs({ left: 60, top, width: 860, fontSize: 40, lineHeight: '48px', fontWeight: 500, color: colore })}>
    Strategia e comunicazione per le filiere agroalimentari.
  </div>
);
const Anello = ({ x, y, d, foro, fondo, children }: { x: number; y: number; d: number; foro: number; fondo: string; children: ReactNode }) => (
  <>
    <div style={abs({ left: x, top: y, width: d, height: d, borderRadius: '50%', overflow: 'hidden' })}>{children}</div>
    <div aria-hidden="true" style={abs({ left: x + (d - foro) / 2, top: y + (d - foro) / 2, width: foro, height: foro, borderRadius: '50%', background: fondo })} />
  </>
);

const MANI = { f: 'car-mani.jpg', t: -173, w: 2808, h: 1579 };
const DATI = { f: 'car-dati.jpg', t: -20, w: 2407, h: 1605 };
const CAMPO = { f: 'car-campo.jpg', l: -15, t: -208, w: 1110, h: 1727 };

const SLIDE: { codice: string; nome: string; frammento: string; fondo: string; el: ReactNode }[] = [
  { codice: 'Carosello 01', nome: 'Apertura · anello', frammento: 'artboard-d0e7ac2eda75', fondo: NOTTE, el: <>
      <Anello x={2} y={130} d={1058} foro={598} fondo={NOTTE}><Foto f="car-turbine.jpg" l={-465} t={-186} w={2025} h={1350} /></Anello>
      <div style={abs({ left: 231, top: 474, width: 600, textAlign: 'center', fontSize: 84, lineHeight: '100px', fontWeight: 700, color: PAPER })}>
        <span style={{ color: ROSSO }}>Drop</span><br />25 anni<br />di digitale
      </div>
      <Logo chiaro={false} /><Freccia colore={PAPER} /></> },
  { codice: 'Carosello 02', nome: 'Foto e titolo', frammento: 'artboard-4dc564e3dc9f', fondo: NOTTE, el: <>
      <Foto f="car-strada.jpg" l={-849} t={-13} w={2749} h={1423} />
      <Striscia x={1061} w={19}><Foto {...MANI} l={-977} /></Striscia>
      <Goccia f="paper" /><Titolo top={46} size={80} colore={PAPER}>Dal 1998 al 2025:<br />un’unica direzione</Titolo>
      <Logo chiaro={false} /><Freccia colore={PAPER} /></> },
  { codice: 'Carosello 03', nome: 'Foto e titolo', frammento: 'artboard-ac8a7f83bda3', fondo: NOTTE, el: <>
      <Foto {...MANI} l={-996} />
      <Striscia x={1062} w={18}><Foto {...DATI} l={-107} /></Striscia>
      <Goccia f="paper" /><Titolo top={46} size={80} colore={PAPER}>Pionieri<br />del digitale</Titolo>
      <Logo chiaro={false} /><Freccia colore={PAPER} /></> },
  { codice: 'Carosello 04', nome: 'Foto e titolo', frammento: 'artboard-b6e9edcc94e6', fondo: NOTTE, el: <>
      <Foto {...DATI} l={-125} />
      <Striscia x={0} w={19}><Foto {...MANI} l={-2076} /></Striscia>
      <Goccia f="paper" /><Titolo top={46} size={80} colore={PAPER}>Oltre 500<br />progetti digitali<br />realizzati</Titolo>
      <Logo chiaro={false} /><Freccia colore={PAPER} /></> },
  { codice: 'Carosello 05', nome: 'Chiusura · logo e link', frammento: 'artboard-384ae2f4e7c0', fondo: NOTTE, el: <>
      <Striscia x={0} w={20}><Foto {...DATI} l={-1205} /></Striscia>
      <Logo chiaro={false} centro />
      <div style={abs({ left: 60, top: 843, width: 960, textAlign: 'center', fontSize: 70, lineHeight: '84px', fontWeight: 500, color: PAPER })}>Scopri la nostra storia</div>
      <div style={abs({ left: 60, top: 1044, width: 960, textAlign: 'center', fontSize: 40, lineHeight: '48px', fontWeight: 500, color: ROSSO })}>www.digitaldrop.eu</div></> },
  { codice: 'Carosello 06', nome: 'Foto e testo', frammento: 'artboard-e4de752a2b6a', fondo: PAPER, el: <>
      <Goccia f="teal" />
      <div style={abs({ left: 0, top: 0, width: 1080, height: 716, overflow: 'hidden' })}><Foto {...CAMPO} /></div>
      <Titolo top={768} size={60} colore={NOTTE} w={760}>Parliamo la lingua del settore primario</Titolo><Corpo top={1015} colore={NOTTE} />
      <Logo chiaro /><Freccia colore={ROSSO} /></> },
  { codice: 'Carosello 07', nome: 'Foto piena · testo chiaro', frammento: 'artboard-695b812f221d', fondo: NOTTE, el: <>
      <Foto {...CAMPO} /><Goccia f="paper" />
      <Titolo top={49} size={60} colore={PAPER} w={760}>Parliamo la lingua del settore primario</Titolo><Corpo top={296} colore={PAPER} />
      <Logo chiaro={false} /><Freccia colore={ROSSO} /></> },
  { codice: 'Carosello 08', nome: 'Testo', frammento: 'artboard-214812fd8f2c', fondo: PAPER, el: <>
      <Goccia f="teal" />
      <Titolo top={49} size={60} colore={NOTTE} w={760}>Parliamo la lingua del settore primario</Titolo><Corpo top={296} colore={NOTTE} />
      <Logo chiaro /><Freccia colore={ROSSO} /></> },
  { codice: 'Carosello 09', nome: 'Foto piena · testo scuro', frammento: 'artboard-65936ba45558', fondo: PAPER, el: <>
      <Foto f="car-trattore.jpg" l={-420} t={-222} w={1659} h={1920} /><Goccia f="paper" />
      <Titolo top={49} size={60} colore={NOTTE} w={760}>Parliamo la lingua del settore primario</Titolo><Corpo top={296} colore={NOTTE} />
      <Logo chiaro /><Freccia colore={ROSSO} /></> },
  { codice: 'Carosello 10', nome: 'Chiusura · anello', frammento: 'artboard-999b0fd1b53a', fondo: PAPER, el: <>
      <Anello x={60} y={195} d={960} foro={544} fondo={PAPER}><Foto {...CAMPO} l={-129} t={-595} w={1376} h={2141} /></Anello>
      <Logo chiaro centro /></> },
];

function Slide({ i }: { i: number }) {
  const s = SLIDE[i];
  const href = `${TELA}#${s.frammento}`;
  return (
    <figure style={{ margin: 0 }}>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Apri ${s.codice} · ${s.nome} su Claude Design`}>
        <div style={{ width: 1080 * SCALA, height: 1350 * SCALA, overflow: 'hidden', borderRadius: 6, boxShadow: 'var(--drop-shadow-sm)' }}>
          <div style={{ position: 'relative', width: 1080, height: 1350, overflow: 'hidden', transform: `scale(${SCALA})`, transformOrigin: '0 0',
                        background: s.fondo, fontFamily: 'var(--drop-font)' }}>
            {s.el}
          </div>
        </div>
      </a>
      <figcaption className="drop-small" style={{ marginTop: 'var(--drop-space-2)' }}>
        <a href={href} target="_blank" rel="noopener noreferrer"><strong>{s.codice}</strong></a> · {s.nome}
      </figcaption>
    </figure>
  );
}

function RigaCarosello({ titolo, da, children }: { titolo: string; da: number; children: ReactNode }) {
  return (
    <>
      <h3 style={{ fontSize: 'var(--drop-fs-h4)' }}>{titolo}</h3>
      <p>{children}</p>
      {/* Slide affiancate senza spazio: si legge la continuità delle foto fra una e l'altra. */}
      <div className="dx-demo" style={{ display: 'flex', flexWrap: 'nowrap', gap: 'var(--drop-space-2)', overflowX: 'auto' }}>
        {[0, 1, 2, 3, 4].map(k => <Slide key={k} i={da + k} />)}
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
            I post, le storie e i caroselli di DROP. I template modificabili stanno sulla tela
            «DROP Post social verticale» in Claude Design; qui sotto le regole e un'anteprima
            di ognuno, con il link alla sua tavola.
          </p>
        </div>

        <div className="dx-note">
          <p>
            <strong>Tela dei template:</strong>{' '}
            <a href={TELA} target="_blank" rel="noopener noreferrer">DROP Post social verticale</a>{' '}
            · pagine <a href={`${TELA}#${PAGINA.feed}`} target="_blank" rel="noopener noreferrer">«Feed 4:5»</a> (Feed 01–20),
            <a href={`${TELA}#${PAGINA.storie}`} target="_blank" rel="noopener noreferrer">«Storie 9:16»</a> (Storia 01–10)
            e <a href={`${TELA}#${PAGINA_CAROSELLI}`} target="_blank" rel="noopener noreferrer">«Caroselli 4:5»</a> (Carosello 01–10).
            Clic su un'anteprima per aprire la sua tavola. Si duplica una tavola, si cambiano
            testi e foto: la struttura non si tocca. La tela è privata: va condivisa dal menu
            Condividi a chi deve aprirla.
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

      <section className="dx-section">
        <h2>Caroselli · 4:5</h2>
        <p>
          Sulla tela, pagina{' '}
          <a href={`${TELA}#${PAGINA_CAROSELLI}`} target="_blank" rel="noopener noreferrer">«Caroselli 4:5»</a>.
          Un carosello si apre e si chiude con una slide senza foto piena e tiene in mezzo
          le slide di contenuto. Le regole dei post valgono anche qui; in più:
        </p>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sempre</h4>
            <ul>
              <li>Apertura e chiusura con la «O» come maschera (regola in <a href="#stile">Pattern e fotografia</a>): Ø 1058 / foro 598 in apertura, Ø 960 / foro 544 in chiusura, titolo o marchio al centro.</li>
              <li>Freccia in basso a destra (tratto 8 px) su tutte le slide tranne l'ultima: paper sullo scuro e sulle foto, arancione sul chiaro.</li>
              <li>Continuità: 18–20 px della foto della slide successiva sul bordo destro, e di quella precedente sul bordo sinistro.</li>
              <li>Slide di contenuto: titolo Sora 700 80/96 (60/72 se c'è il corpo), in alto a 46–49 px.</li>
              <li>Goccia solo dove l'originale aveva i tratti a filo: paper al 10% sullo scuro e sulle foto, teal al 10% sul chiaro.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Mai</h4>
            <ul>
              <li>Goccia sull'apertura o sulla chiusura: lì il segno è l'anello.</li>
              <li>Freccia sull'ultima slide.</li>
              <li>Foto che non continua sul bordo: si perde l'invito a scorrere.</li>
            </ul>
          </div>
        </div>
        <RigaCarosello titolo="Carosello narrativo · Carosello 01–05" da={0}>
          Esempio completo, «Drop 25 anni di digitale», su blu notte: apertura ad anello, tre
          slide con foto e titolo, chiusura con logo e sito.
        </RigaCarosello>
        <RigaCarosello titolo="Template generici · Carosello 06–10" da={5}>
          I moduli chiari da combinare: foto e testo, foto piena con testo chiaro o scuro, solo
          testo, chiusura ad anello.
        </RigaCarosello>
      </section>
    </>
  );
}
