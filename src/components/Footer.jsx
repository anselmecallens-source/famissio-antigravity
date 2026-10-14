import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const LOGO_WHITE = '/assets/images/Logo Famissio blanc détouré.webp';

export default function Footer() {
  const scrollToTop = (e) => {
    if (e) {
      e.preventDefault();
    }
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    };

    try {
      window.scrollTo(scrollOptions);
    } catch {
      window.scrollTo(0, 0);
    }

    if (document.documentElement) {
      try {
        document.documentElement.scrollTo(scrollOptions);
      } catch {
        document.documentElement.scrollTop = 0;
      }
    }
    if (document.body) {
      try {
        document.body.scrollTo(scrollOptions);
      } catch {
        document.body.scrollTop = 0;
      }
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

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
        <button
          type="button"
          onClick={scrollToTop}
          className="fm-back-top"
          aria-label="Retour en haut de page"
        >
          Haut de page <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
