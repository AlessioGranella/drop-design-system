# Istruzioni per Claude Code — DROP Design System

## Cos'è

Design system di **DROP**, agenzia di comunicazione e marketing strategico per il settore
primario. È la traduzione in codice del **Brand Book ufficiale v1.0** (edizione 2026,
50 pp., `../DROP · Brand Book v1.0.pdf`): i valori marcati ◆ nei sorgenti sono normativi
e non si toccano. Dove un materiale già prodotto si discosta dal brand book, vince il
brand book.

## Fonte di verità

- Token: `src/styles/colors_and_type.css` (prefisso `--drop-*`). Specchio JS in
  `src/tokens.ts` — **vanno tenuti allineati a mano**.
- Componenti CSS: `src/styles/components.css`. Componenti React: `src/components/`.
- Asset: `public/brand/`. L'elenco è in `src/manifest.json`, rigenerato da
  `npm run manifest`.
- Le regole di sistema e le ricette di impaginato: `../DESIGN.md`.
- Il materiale sorgente originale (handoff Claude Design, upload del cliente) sta in
  `../Design System/`: si consulta, non si modifica.

## Regole non negoziabili

1. **Due colori e basta.** Teal `#044972` (3025 C) e arancione `#F03F35` (7417 C),
   aggiornati il 16/10/2026 dalla tavola «Nuovo Pantone». Unica eccezione: le coppie delle
   rubriche social (`--drop-campo-*`, `--drop-tech-*`, `--drop-bussola-*`), solo nei loro
   template. Le scale servono a superfici e stati, non a inventare colori.
2. **Solo token semantici nei componenti.** `var(--drop-accent)`, mai `var(--drop-orange)`.
3. **Titoli teal, corpo ink, evidenze arancioni.** Mai colori diversi dentro lo stesso
   livello. `<strong>` alza il peso e resta ink.
4. **Il corpo è Sora Medium (500)**, non Regular. I titoli sono 700, gli occhielli 600.
5. **Niente nero puro, niente bianco puro** come testo o fondo: esistono `--drop-ink`,
   `--drop-black`, `--drop-paper`.
6. **Niente icone nei contenuti.** DROP usa la fotografia. Per le sole affordance di UI
   si usa Lucide a 1,5 px, e la sostituzione va dichiarata.
7. **Pattern goccia: bianco su teal.** Mai teal su bianco, mai ruotato, mai sopra il testo.
   Eccezione: i template social (`tokens.ts` → `social`, DESIGN.md § 11), dove la goccia
   prende l'accento del tema, sta in basso a destra a 905×964 e ha sostituito i cerchi.
8. **Foto 3:4 o 16:9.** Mai 1:1.
9. **Il marchio** non si ruota, non si deforma, non cambia colore, non va allineato a
   destra. L'area di rispetto è X = altezza / 2,3 su ogni lato.
10. **Spaziature dalla scala** `var(--drop-space-*)`, mai px a mano. Niente angoli vivi.
11. **Copy in italiano**, prima persona plurale, sentence case, niente emoji, niente
    punti esclamativi.

## Gotcha noti

- **Contenitore condiviso**: il padding orizzontale va sul wrapper *interno* di ogni
  fascia (`.drop-fascia__inner`), non sull'elemento esterno, altrimenti i bordi sinistri
  delle varie fasce non combaciano (disallineamento tipico di ~32 px).
- **Testo bianco su fascia scura**: una regola globale su `p` batte il colore ereditato
  da una classe antenata. Serve una regola esplicita `.drop-fascia--teal p { … }`.
- **Griglia in layout con sidebar**: serve `container-type: inline-size` sul contenitore
  del contenuto, e nessun `max-width` che ricappi la colonna principale. Senza, le media
  query guardano la finestra.
- **Font**: stanno in `src/styles/font/`, non in `public/`, così Vite riscrive i path e
  il sito funziona anche servito da una sottocartella. La copia in `public/brand/font/`
  serve solo a chi deve scaricarli.
- **Path degli asset**: nessun componente scrive path a mano, si passa sempre da
  `asset()` / `assetUrl()` in `src/asset.ts` (`BASE_URL` + risoluzione contro `baseURI`).
- **La X del marchio**: il brand book la descrive come «altezza del cerchio interno della
  O», ma nel vettoriale quel cerchio non torna con la costruzione 8X × 2.3X. Il sistema
  usa la costruzione: `X = altezza / 2,3`. Non «correggere» questo valore senza guardare
  il file.

## Prima di aggiungere un componente

Guarda se esiste già in `components.css`. Se lo aggiungi: token semantici, scala di
spazio, e una voce nella sezione «Componenti» della libreria (`src/docs/sections/`) con
anteprima dal vivo e snippet copiabile.
