import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles.css';

const LOGO_NAV = "https://www.dropbox.com/scl/fi/ncew1g2ubjqapfq0n3k0n/Logo-Famissio-1-1.png?rlkey=0sj65x2ntdvv6ob6na5ci1qag&st=qwwx9w4x&raw=1";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navbarClass = isHome
    ? `hero-navbar ${scrolled ? 'scrolled-home' : ''}`
    : `hero-navbar solid-nav`;

  return (
    <>
      {/* BARRE DE NAVIGATION */}
      <nav className={navbarClass} style={{ position: 'fixed', top: 0, width: '100%', transition: 'all 0.4s ease' }}>
        <div className="nav-logo-wrapper">
          <Link to="/" onClick={closeMenu}>
            <img src={LOGO_NAV} alt="Famissio Logo" className="nav-logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/missions" onClick={closeMenu}>Nos missions</Link></li>
          <li><Link to="/formation" onClick={closeMenu}>Formation</Link></li>
          <li><Link to="/temoignages" onClick={closeMenu}>Témoignages</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* BOUTON MOBILE */}
      <div className={`nav-circle ${(!isHome || scrolled) ? 'visible' : ''} ${menuActive ? 'active' : ''}`}>
        <button className="nav-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* MENU MOBILE */}
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