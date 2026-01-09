import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles.css'; // Assure-toi que styles.css est bien dans le dossier src

// Logo du design Antigravity (rouge/orange)
const LOGO_NAV = "https://www.dropbox.com/scl/fi/ncew1g2ubjqapfq0n3k0n/Logo-Famissio-1-1.png?rlkey=0sj65x2ntdvv6ob6na5ci1qag&st=qwwx9w4x&raw=1";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'; // On est sur l'accueil ?
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll (uniquement pour l'effet de transparence sur l'accueil)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  // LOGIQUE DES CLASSES CSS :
  // - Accueil + haut de page = transparent
  // - Accueil + scrollé = fond blanc (scrolled-home)
  // - Autres pages = fond blanc fixe (solid-nav)
  const navbarClass = isHome
    ? `hero-navbar ${scrolled ? 'scrolled-home' : ''}`
    : `hero-navbar solid-nav`;

  return (
    <>
      {/* --- BARRE DE NAVIGATION PRINCIPALE (Desktop) --- */}
      <nav className={navbarClass} style={{ position: 'fixed', top: 0, width: '100%', transition: 'all 0.4s ease' }}>
        <div className="nav-logo-wrapper">
          <Link to="/" onClick={closeMenu}>
            <img src={LOGO_NAV} alt="Famissio Logo" className="nav-logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          {/* Les liens utilisent Link de react-router pour ne pas recharger la page */}
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/missions" onClick={closeMenu}>Nos missions</Link></li>
          <li><Link to="/formation" onClick={closeMenu}>Formation</Link></li>
          <li><Link to="/temoignages" onClick={closeMenu}>Témoignages</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* --- BOUTON MENU ROND (Mobile & Scroll) --- */}
      {/* Il apparaît si on n'est pas sur l'accueil OU si on a scrollé */}
      <div className={`nav-circle ${(!isHome || scrolled) ? 'visible' : ''} ${menuActive ? 'active' : ''}`}>
        <button className="nav-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* --- MENU LATÉRAL (Mobile) --- */}
      <div className={`menu-backdrop ${menuActive ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`side-menu ${menuActive ? 'active' : ''}`}>
        <ul className="side-links">
          <li><Link to="/" className="side-link" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/missions" className="side-link" onClick={closeMenu}>Nos missions</Link></li>
          <li><Link to="/formation" className="side-link" onClick={closeMenu}>Formation</Link></li>
          <li><Link to="/temoignages" className="side-link" onClick={closeMenu}>Témoignages</Link></li>
          <li><Link to="/contact" className="side-link" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;