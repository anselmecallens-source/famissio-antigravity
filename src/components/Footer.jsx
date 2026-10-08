import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const LOGO_WHITE = '/assets/images/Logo Famissio blanc détouré.webp';

export default function Footer() {
  return (
    <footer className="fm-site-footer">
      <div className="fm-footer-main">
        <div className="fm-footer-brand-block">
          <Link to="/" className="fm-footer-brand" aria-label="Famissio, accueil">
            <img src={LOGO_WHITE} alt="Famissio" />
          </Link>
          <p>Des familles en mission,<br />au cœur des paroisses.</p>
        </div>
        <div className="fm-footer-links">
          <p className="fm-footer-label">À découvrir</p>
          <Link to="/missions">Les missions</Link>
          <Link to="/formation">Se former</Link>
          <Link to="/temoignages">Les témoignages</Link>
          <Link to="/priere">La prière Famissio</Link>
        </div>
        <div className="fm-footer-contact">
          <p className="fm-footer-label">Une question ?</p>
          <Link to="/contact" className="fm-footer-contact-link">Nous contacter <ArrowUpRight size={16} /></Link>
          <a href="mailto:famissio2019@gmail.com">famissio2019@gmail.com</a>
        </div>
      </div>
      <div className="fm-footer-bottom">
        <span>© {new Date().getFullYear()} Famissio · Des familles en mission</span>
        <Link to="/reserve" className="fm-footer-private">Espace réservé</Link>
        <a className="fm-back-top" href="#top" aria-label="Retour en haut">Haut de page <ArrowUp size={14} /></a>
      </div>
    </footer>
  );
}
