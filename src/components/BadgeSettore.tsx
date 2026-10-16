/**
 * Foto verticale con il badge circolare a anello arancione agganciato al
 * piede: Agri · Food · Formazione. È l'unico contenitore-etichetta del
 * brand, e sta al posto delle icone.
 *
 * Il badge sporge di 32 px sotto la foto: lascia spazio in fondo alla
 * griglia, o si sovrappone alla sezione successiva.
 */
export function BadgeSettore({ nome, foto }: { nome: string; foto?: string }) {
  return (
    <div className="drop-settore">
      <div className="drop-settore__media drop-media">
        {foto ? <img src={foto} alt="" /> : <div style={{ height: '100%', background: 'var(--drop-teal-100)' }} />}
      </div>
      <span className="drop-settore__badge">{nome}</span>
    </div>
  );
}
