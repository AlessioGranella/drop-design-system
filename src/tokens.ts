/**
 * DROP — token in JavaScript.
 * Specchio di src/styles/colors_and_type.css. Se cambi un valore lì,
 * cambialo anche qui: sono due copie e non c'è una sorgente unica che le
 * generi entrambe.
 *
 * Serve a grafici, generatori di immagini, script e a tutto ciò che non
 * legge un foglio di stile.
 *
 * I valori ◆ vengono dal Brand Book v1.0: sono normativi. I colori sono
 * aggiornati al 16/10/2026 con la tavola «NUOVO PANTONE» (01. COLORI PANTONE CMYK.pdf).
 */

/** ◆ 04 p.030 — i due soli colori brand. */
export const brand = {
  teal:   '#044972',
  orange: '#F03F35',
} as const;

/** ◆ Nuovo Pantone — gli stessi colori per la stampa. La tavola dà solo i
 *  Pantone coated: CMYK e uncoated vanno riverificati prima di stampare. */
export const stampa = {
  teal:   { pantoneC: '3025 C', rgb: [4, 73, 114] as const },
  orange: { pantoneC: '7417 C', rgb: [240, 63, 53] as const },
} as const;

/** ◆ 04 p.031 — scala teal. Il 700 è il colore brand. */
export const teal = {
  '050': '#F2F6F8', 100: '#E6EDF1', 200: '#C8D7E0', 300: '#96B3C4', 400: '#5C89A3',
  500: '#316A8B', 600: '#18587D', 700: '#044972', 800: '#033654', 900: '#02263C',
} as const;

/** ◆ 04 p.031 — scala arancione. Il 500 è il colore brand. */
export const orange = {
  100: '#FDE7E5', 200: '#FBC9C7', 300: '#F89F9A', 400: '#F47169',
  500: '#F03F35', 600: '#C8342C', 700: '#9E2923',
} as const;

/** ◆ 04 p.032 — neutri. Né il bianco né il nero sono puri. */
export const neutri = {
  white:    '#FFFFFF',
  paper:    '#E3EFFA',  // ◆ Pantone 649 C
  lavender: '#DCE3FA',
  ink:      '#1F2A33',
  black:    '#021222',  // ◆ Pantone 5395 C
} as const;

/** ◆ Nuovo Pantone — rubriche social: fondo scuro + accento chiaro.
 *  Solo nei template social della rubrica, mai nel marchio né sul sito. */
export const rubriche = {
  campo:   { nome: 'Dal campo al digitale',    scuro: '#472419', chiaro: '#E9A368', pantone: ['476 C', '721 C'] },
  tech:    { nome: 'Tech for change',          scuro: '#08433C', chiaro: '#C7E112', pantone: ['3302 C', '382 C'] },
  bussola: { nome: 'La bussola del marketing', scuro: '#30B9AB', chiaro: '#8FD9D4', pantone: ['3262 C', '3242 C'] },
} as const;

/** ◆ Pantone 209 C — nella tavola nuova, ruolo ancora da definire. */
export const bordeaux = '#6E0B33' as const;

/** Derivati per l'interfaccia — non stanno nel brand book. */
export const ui = {
  line: '#E5E7EB', lineStrong: '#C8D0D8', inkSoft: '#5C6873',
} as const;

/** ◆ 04 p.033 — combinazioni approvate e combinazioni vietate. */
export const combinazioni = {
  ok: [
    ['#FFFFFF', '#044972', 'Bianco su teal'],
    ['#044972', '#FFFFFF', 'Teal + arancione su bianco'],
    ['#FFFFFF', '#F03F35', 'Bianco su arancione — uso rado'],
    ['#044972', '#E3EFFA', 'Teal + arancione su paper'],
    ['#FFFFFF', '#021222', 'Bianco + arancione su black'],
  ],
  no: [
    ['#044972', '#F03F35', 'Teal su arancione'],
    ['#044972', '#316A8B', 'Teal su teal medio'],
    ['#F03F35', '#F89F9A', 'Arancione su arancione chiaro'],
  ],
} as const;

/** ◆ 05 p.036-037 — un carattere, otto pesi, tre in uso. */
export const tipografia = {
  famiglia: "'Sora', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  pesi: { corpo: 500, label: 600, titolo: 700 },
  /** ◆ p.038 — scala di stampa in punti, ragione ~1.4 (quarta giusta). */
  scalaStampa: { display: 72, h1: 48, h2: 34, h3: 22, h4: 16, bodyL: 13, body: 10.5 },
  /** Resa a schermo: estremi delle clamp, in px. */
  scalaSchermo: { display: [48, 96], h1: [36, 64], h2: [28, 44], h3: [22, 30], h4: 20, bodyL: 18, body: 16, label: 14, caption: 12 },
  /** ◆ p.039 — la riga di corpo sta fra 50 e 75 caratteri. */
  misura: [50, 75],
} as const;

/** Scala di spazio, passo 4 pt. */
export const spazio = {
  1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64, 20: 80, 24: 96,
} as const;

export const raggi = {
  xs: 4, sm: 8, md: 14, lg: 20, xl: 28, '2xl': 36, pill: 999,
} as const;

/**
 * ◆ 03 p.020-024 — proporzioni del marchio.
 * Il marchio misura 8X × 2.3X e l'area di rispetto è X su ogni lato.
 * Da qui si ricava X a qualunque scala: X = altezza / 2.3.
 */
export const marchio = {
  rapporto: 8 / 2.3,
  /** Unità di costruzione, a partire dall'altezza del marchio. */
  x: (altezza: number) => altezza / 2.3,
  /** Area di rispetto minima su ogni lato: uguale a X. ◆ p.024 */
  areaRispetto: (altezza: number) => altezza / 2.3,
  minimi: {
    /** ◆ p.023 — marchio nudo: 12 mm / 45 px consigliati, 7 mm / 25 px assoluto. */
    marchio:     { consigliato: 45, assoluto: 25, mm: { consigliato: 12, assoluto: 7 } },
    /** ◆ p.023 — con descrittore: 18 mm / 70 px, minimo 12 mm / 45 px. */
    descrittore: { consigliato: 70, assoluto: 45, mm: { consigliato: 18, assoluto: 12 } },
  },
} as const;

/** ◆ 07 p.048 — il deck. 16:9, margini interni 22 mm su 1920×1080. */
export const slide = {
  larghezza: 1920, altezza: 1080,
  margineMm: 22, marginePct: 4.1,
} as const;

/** Serie dei grafici, in ordine di lettura. Fuori brand book: la dataviz
 *  non è coperta, la sequenza alterna teal e arancione per restare
 *  leggibile anche in bianco e nero. */
export const dato = ['#044972', '#F03F35', '#5C89A3', '#F89F9A', '#033654', '#C8D7E0'] as const;

/** ◆ 06 p.042 — opacità del pattern goccia sopra una foto. */
export const pattern = { opacitaMin: 0.10, opacitaMax: 0.25, opacitaDefault: 0.18 } as const;

/**
 * Templates · Social assets — regola fissata il 16/10/2026 sulla tela
 * «DROP Post social verticale» (Claude Design). Misure in px sul formato reale.
 * Margine 60 su tre lati; nelle storie l'area sicura alza tag e logo di 180/200.
 */
export const social = {
  formati: {
    feed:  { larghezza: 1080, altezza: 1350 },  // 4:5
    storia: { larghezza: 1080, altezza: 1920 }, // 9:16
  },
  margine: 60,
  /** Goccia: unico elemento decorativo, sempre in basso a destra e a filo
   *  dei bordi. Sostituisce i cerchi concentrici dei template precedenti. */
  goccia: {
    larghezza: 905, altezza: 964,
    feed:  { x: 605, y: 566 },
    storia: { x: 605, y: 1136 },
    opacita: { drop: 0.10, rubrica: 0.30 },
  },
  temi: {
    dropChiaro: { fondo: '#E3EFFA', testo: '#021222', accento: '#F03F35', testoTag: '#E3EFFA', goccia: 'goccia-teal.svg',    logo: 'drop.svg' },
    dropTeal:   { fondo: '#044972', testo: '#E3EFFA', accento: '#F03F35', testoTag: '#E3EFFA', goccia: 'goccia-paper.svg',   logo: 'drop-bianco-arancio.svg' },
    campo:      { fondo: '#472419', testo: '#E3EFFA', accento: '#E9A368', testoTag: '#021222', goccia: 'goccia-campo.svg',   logo: 'drop-bianco.svg' },
    tech:       { fondo: '#08433C', testo: '#E3EFFA', accento: '#C7E112', testoTag: '#021222', goccia: 'goccia-tech.svg',    logo: 'drop-bianco.svg' },
    bussola:    { fondo: '#30B9AB', testo: '#E3EFFA', accento: '#8FD9D4', testoTag: '#021222', goccia: 'goccia-bussola.svg', logo: 'drop-bianco.svg' },
  },
  /** Titoli sopra la foto piena: verde scuro, logo a colori. */
  sopraFoto: { titolo: '#08433C', logo: 'drop.svg' },
  tipografia: {
    tag:      { size: 28, peso: 600, maiuscolo: true, tracking: 0.04, altezzaPillola: 84 },
    titolo:   { size: 80, interlinea: 96, peso: 700, larghezza: 960 },
    titoloFoto: { size: 60, interlinea: 72, peso: 700, larghezza: 760 },
    corpo:    { size: 40, interlinea: 48, peso: 500, larghezza: 680 },
  },
  logo: { altezza: 68 },
  /** Caroselli 4:5: apertura e chiusura ad anello, freccia di scorrimento, continuità delle foto. */
  carosello: {
    fondoScuro: '#021222', fondoChiaro: '#E3EFFA',
    anelloApertura: { x: 2, y: 130, diametro: 1058, foro: 598 },
    anelloChiusura: { x: 60, y: 195, diametro: 960, foro: 544 },
    freccia: { x: 950, y: 1233, larghezza: 74, altezza: 60, tratto: 8 },
    continuita: { striscia: [18, 20] as const },
    gocciaOpacita: 0.10,
  },
} as const;

/**
 * La «O» come maschera — regola fissata il 16/10/2026. La O del marchio, ingrandita ad
 * anello, diventa una maschera fotografica: la foto vive dentro la corona, il foro ha il
 * colore del fondo e ospita un titolo breve o il marchio. Proporzioni dei template social
 * (non quelle esatte della O nel logo, che ha il foro al 60,7%).
 */
export const oMaschera = {
  /** Diametro del foro / diametro esterno. */
  rapportoForo: 0.565,
  esempi: {
    aperturaCarosello: { diametro: 1058, foro: 598, centro: [531, 661] as const },
    chiusuraCarosello: { diametro: 960, foro: 544, centro: [540, 675] as const },
  },
  /** Diametro del foro a partire dal diametro esterno. */
  foro: (diametro: number) => Math.round(diametro * 0.565),
} as const;
