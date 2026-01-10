import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css'; // Assure-toi que le chemin vers ton CSS est bon

const LOGO_NAV = "https://www.dropbox.com/scl/fi/ncew1g2ubjqapfq0n3k0n/Logo-Famissio-1-1.png?rlkey=0sj65x2ntdvv6ob6na5ci1qag&st=qwwx9w4x&raw=1";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On déclenche l'effet un peu plus tôt (50px) pour fluidifier
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu quand on change de page
  const closeMenu = () => setMenuActive(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  // Sur les autres pages que Home, on met un fond de couleur pour que le menu soit lisible
  const navStyle = isHome ? {} : { background: 'var(--flame)', position: 'relative' };

  return (
    <>
      {/* 1. PETIT LOGO QUI APPARAIT AU SCROLL (Haut Gauche) */}
      {/* Il apparaît si on scroll OU si on n'est pas sur la page d'accueil */}
      <Link
        to="/"
        className={`fixed-logo-link ${scrolled || !isHome ? 'visible' : ''}`}
        onClick={closeMenu}
      >
        <div className="fixed-logo-text">Famissio</div>
      </Link>

      {/* 2. GRANDE BARRE DE NAVIGATION (Disparait au scroll) */}
      <nav
        className={`hero-navbar ${scrolled ? 'hidden' : ''}`}
        style={navStyle}
      >
        <div className="nav-logo-wrapper">
          <Link to="/" onClick={closeMenu}>
            <img src={LOGO_NAV} alt="Famissio Logo" className="nav-logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/missions">Nos missions</Link></li>
          <li><Link to="/formation">Formation</Link></li>
          <li><Link to="/temoignages">Témoignages</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* 3. BOUTON ROND (MENU MOBILE / SCROLL) */}
      <div
        className={`nav-circle ${scrolled || window.innerWidth <= 1200 ? 'visible' : ''}`}
        style={{ zIndex: 9999 }}
      >
        <button className="nav-toggle" id="menuToggle" onClick={toggleMenu}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* 4. SIDEBAR (MENU LATÉRAL) */}
      <div className={`menu-backdrop ${menuActive ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`side-menu ${menuActive ? 'active' : ''}`} id="sideMenu">
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