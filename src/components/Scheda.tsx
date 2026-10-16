/**
 * La card del deck: foto 3:4, titolo, una frase. ◆ 06 p.044
 *
 * `scura` è la card in teal pieno che dà ritmo a una griglia 3-up: nel
 * sistema ne va una ogni tre, non una a piacere.
 */
export function Scheda({
  titolo, testo, foto, scura = false, paper = false,
}: {
  titolo: string;
  testo?: string;
  /** URL della fotografia. DROP non usa icone: qui va un'immagine reale. */
  foto?: string;
  scura?: boolean;
  paper?: boolean;
}) {
  const variante = scura ? ' drop-card--scura' : paper ? ' drop-card--paper' : '';
  return (
    <article className={`drop-card${variante}`}>
      {foto && <div className="drop-card__media"><img src={foto} alt="" /></div>}
      <h3>{titolo}</h3>
      {testo && <p>{testo}</p>}
    </article>
  );
}
