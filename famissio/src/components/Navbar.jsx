import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css'; // Import correct

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

  // 1. Navbar Container
  const navStyle = isHome
    ? { position: 'relative' }
    : { background: 'var(--flame)', position: 'relative' };

  // 2. Texte : Taille standard 1rem (lisible), couleur FLAME sur l'accueil
  const linkTextStyle = isHome
    ? { fontSize: '1rem', color: 'var(--flame)', fontWeight: '800' }
    : { fontSize: '1.1rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.1)' };

  // 3. LE RÉGLAGE FINAL (Juste Milieu)
  const linksContainerStyle = isHome
    ? {
      position: 'absolute',
      right: '0',
      top: '0',
      height: '100%',
      width: '45%',            // STRICTEMENT 45% (La taille de la zone blanche)
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Centré DANS la zone blanche
      gap: '2rem',             // Espacement équilibré (32px)
      paddingRight: '1rem'
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