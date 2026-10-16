import { Logo } from './Logo';

/**
 * Footer istituzionale. I contatti sono quelli del brand book (p.050):
 * i tre soci fondatori, email in minuscolo.
 */
export function Footer({ colonne }: { colonne?: { titolo: string; voci: { testo: string; href: string }[] }[] }) {
  const cols = colonne ?? [
    { titolo: 'Agenzia', voci: [
      { testo: 'Chi siamo', href: '#' }, { testo: 'Valori', href: '#' }, { testo: 'Storia', href: '#' } ] },
    { titolo: 'Servizi', voci: [
      { testo: 'Strategia & comunicazione', href: '#' }, { testo: 'Brand identity', href: '#' },
      { testo: 'Contenuti & tools digitali', href: '#' }, { testo: 'Formazione AI pratica', href: '#' } ] },
    { titolo: 'Contatti', voci: [
      { testo: 'claudio.mariani@digitaldrop.eu', href: 'mailto:claudio.mariani@digitaldrop.eu' },
      { testo: '335.5321140', href: 'tel:+393355321140' },
      { testo: 'digitaldrop.eu', href: 'https://digitaldrop.eu' } ] },
  ];
  return (
    <footer className="drop-footer">
      <div className="drop-footer__inner">
        <div><Logo variante="bianco-arancio" descrittore altezza={56} /></div>
        <div className="drop-footer__cols">
          {cols.map(c => (
            <div key={c.titolo}>
              <h4>{c.titolo}</h4>
              {c.voci.map(v => <a key={v.testo} href={v.href}>{v.testo}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="drop-footer__base">
        <span>© {new Date().getFullYear()} DROP · Tutti i diritti riservati</span>
        <span>Agenzia di comunicazione e marketing strategico</span>
      </div>
    </footer>
  );
}
