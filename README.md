# DROP — Design System

Traduzione del **Brand Book DROP v1.0** (edizione 2026, 50 pp.) in token, componenti e
asset per l'agenzia e per tutti i materiali a suo marchio.

```bash
npm install
npm run dev      # libreria consultabile su http://localhost:5173
npm run build    # rigenera il manifest degli asset e costruisce dist/
```

## Struttura

```
src/
  styles/colors_and_type.css   fonte di verità dei token (--drop-*)
  styles/components.css        componenti via classe CSS
  styles/font/                 Sora, 8 pesi (self-hosted, li impacchetta Vite)
  tokens.ts                    specchio JS dei token, per grafici e script
  components/                  componenti React
  docs/                        la libreria consultabile (non fa parte del consegnabile)
  manifest.json                elenco degli asset, generato
public/brand/
  loghi/      marchio a colori, bianco, bianco+arancio, mono, con descrittore, iniziale «O»
  pattern/    goccia bianca e arancione
  font/       gli stessi .ttf, per chi deve installarli o allegarli
  esempi/     slide e applicazioni già prodotte, per la galleria
```

## Uso minimo

```html
<link rel="stylesheet" href="src/styles/colors_and_type.css">
<link rel="stylesheet" href="src/styles/components.css">

<section class="drop-fascia drop-fascia--teal">
  <div class="drop-fascia__inner">
    <span class="drop-occhiello drop-occhiello--chiaro">Partner strategico</span>
    <h2>Parliamo la lingua del <span class="drop-accento">settore primario</span></h2>
    <button class="drop-btn">Parliamone</button>
  </div>
</section>
```

In React:

```tsx
import { Fascia, Occhiello, Bottone, Logo } from 'drop-design-system';
```

Le regole di sistema — quando usare quale variante di marchio, come si impagina una
slide, cosa è fuori sistema — stanno in [`../DESIGN.md`](../DESIGN.md).

## Regole per chi ci mette mano

- I valori marcati **◆** nei sorgenti vengono dal brand book: sono normativi.
  Dove un materiale già prodotto se ne discosta, vince il brand book.
- I componenti usano **solo token semantici** (`--drop-accent`, `--drop-bg-dark`,
  `--drop-fg-title`…), mai i colori brand in chiaro: un contesto deve poter essere
  ricolorato senza un solo override.
- Le spaziature vengono sempre da `var(--drop-space-*)`, mai da pixel scritti a mano.
- Se cambi un valore in `colors_and_type.css`, aggiornalo anche in `tokens.ts`: sono due
  copie e non c'è ancora una sorgente unica che le generi entrambe.
- Aggiungendo asset in `public/brand/`, lancia `npm run manifest` (o `npm run build`,
  che lo fa da sé).
- Aggiungendo un componente: prima guarda se esiste già in `components.css`; poi
  aggiungi una voce nella sezione «Componenti» della libreria, con anteprima dal vivo
  e snippet copiabile.
