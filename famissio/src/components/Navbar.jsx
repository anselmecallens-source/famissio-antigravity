import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const LOGO_NAV = "https://www.dropbox.com/scl/fi/ncew1g2ubjqapfq0n3k0n/Logo-Famissio-1-1.png?rlkey=0sj65x2ntdvv6ob6na5ci1qag&st=qwwx9w4x&raw=1";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
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

  // 1. BARRE TRANSPARENTE ET ABSOLUE (Pas de barre blanche)
  const navStyle = isHome
    ? { position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10, background: 'transparent' }
    : { background: 'var(--flame)', position: 'relative' };

  // 2. TEXTE
  const linkTextStyle = isHome
    ? { fontSize: '1rem', color: 'var(--flame)', fontWeight: '800' }
    : { fontSize: '1.1rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.1)' };

  // 3. PLACEMENT "QUASIMENT AU MAX"
  const linksContainerStyle = isHome
    ? {
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: 'auto',
      width: '38%',             // 38% : C'est le MAX possible sans toucher le orange
      paddingRight: '1.5rem',   // 1.5rem : Juste un petit espace de respiration à droite
      gap: '1.5rem'
    }
    : {};

  return (
    <>
      <Link to="/" className={`fixed-logo-link ${scrolled ? 'visible' : ''}`} onClick={closeMenu}>
        <div className="fixed-logo-text">Famissio</div>
      </Link>

      <nav className={`hero-navbar ${scrolled ? 'hidden' : ''}`} style={navStyle}>

        <div className="nav-logo-wrapper">
          <Link to="/" onClick={closeMenu}>
            <img
              src={LOGO_NAV}
              alt="Famissio Logo"
              className="nav-logo-img"
              style={{ height: '7rem' }}
            />
          </Link>
        </div>

        <ul className="nav-links" style={linksContainerStyle}>
          <li><Link to="/" style={linkTextStyle} onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/missions" style={linkTextStyle} onClick={closeMenu}>Nos missions</Link></li>
          <li><Link to="/formation" style={linkTextStyle} onClick={closeMenu}>Formation</Link></li>
          <li><Link to="/temoignages" style={linkTextStyle} onClick={closeMenu}>Témoignages</Link></li>
          <li><Link to="/contact" style={linkTextStyle} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      <div className={`nav-circle ${scrolled || window.innerWidth <= 1200 ? 'visible' : ''}`} style={{ zIndex: 9999 }}>
        <button className="nav-toggle" id="menuToggle" onClick={toggleMenu}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

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