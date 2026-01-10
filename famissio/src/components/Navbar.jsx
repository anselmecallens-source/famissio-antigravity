import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css'; // Import correct : on remonte dans src/

const LOGO_NAV = "https://www.dropbox.com/scl/fi/ncew1g2ubjqapfq0n3k0n/Logo-Famissio-1-1.png?rlkey=0sj65x2ntdvv6ob6na5ci1qag&st=qwwx9w4x&raw=1";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.7;

      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuActive(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  // 1. Style du Container (Fond Rouge sauf sur l'accueil)
  const navStyle = isHome ? {} : { background: 'var(--flame)', position: 'relative' };

  // 2. Style des Liens (Texte)
  // - Accueil : On réduit à 0.9rem pour être sûr que ça tienne dans la zone restreinte
  // - Autres pages : Blanc et taille standard 1.1rem
  const linkTextStyle = isHome
    ? { fontSize: '0.9rem', color: 'var(--flame)', fontWeight: '700' }
    : { fontSize: '1.1rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.1)' };

  // 3. Style du Conteneur des Liens (Mise en page)
  // - Accueil : 
  //   * maxWidth: '30vw' -> ULTRA STRICT : On interdit au menu de dépasser les 30% de droite.
  //   * marginLeft: 'auto' -> On le colle physiquement à droite.
  //   * gap: '1rem' -> On serre les liens pour qu'ils rentrent dans cette petite zone.
  const linksContainerStyle = isHome
    ? { gap: '1rem', maxWidth: '30vw', marginLeft: 'auto', justifyContent: 'flex-end' }
    : {};

  return (
    <>
      {/* LOGO TEXTE (GAUCHE) - Apparaît au scroll */}
      <Link
        to="/"
        className={`fixed-logo-link ${scrolled ? 'visible' : ''}`}
        onClick={closeMenu}
      >
        <div className="fixed-logo-text">Famissio</div>
      </Link>

      {/* BARRE DE NAVIGATION PRINCIPALE */}
      <nav
        className={`hero-navbar ${scrolled ? 'hidden' : ''}`}
        style={navStyle}
      >
        <div className="nav-logo-wrapper">
          <Link to="/" onClick={closeMenu}>
            {/* Logo maintenu à 7.5rem */}
            <img
              src={LOGO_NAV}
              alt="Famissio Logo"
              className="nav-logo-img"
              style={{ height: '7.5rem' }}
            />
          </Link>
        </div>

        {/* Application des styles ajustés */}
        <ul className="nav-links" style={linksContainerStyle}>
          <li><Link to="/" style={linkTextStyle} onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/missions" style={linkTextStyle} onClick={closeMenu}>Nos missions</Link></li>
          <li><Link to="/formation" style={linkTextStyle} onClick={closeMenu}>Formation</Link></li>
          <li><Link to="/temoignages" style={linkTextStyle} onClick={closeMenu}>Témoignages</Link></li>
          <li><Link to="/contact" style={linkTextStyle} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* MENU BURGER (ROND) */}
      <div
        className={`nav-circle ${scrolled || window.innerWidth <= 1200 ? 'visible' : ''}`}
        style={{ zIndex: 9999 }}
      >
        <button className="nav-toggle" id="menuToggle" onClick={toggleMenu}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* SIDEBAR */}
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