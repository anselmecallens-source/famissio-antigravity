import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const LOGO_NAV = "/assets/images/Logo Famissio blanc.png";
const LOGO_RED = "/assets/images/Logo Famissio rouge.webp";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollUpNav, setShowScrollUpNav] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const diff = currentScrollY - lastScrollY;

      if (currentScrollY > window.innerHeight * 0.7) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Smart Scroll-Up Navbar for desktop
      if (currentScrollY > 150) {
        if (diff < -5) {
          setShowScrollUpNav(true);
        } else if (diff > 5) {
          setShowScrollUpNav(false);
        }
      } else {
        setShowScrollUpNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuActive(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  const navClass = isHome ? 'navbar-home' : 'navbar-page';

  const linkTextStyle = isHome
    ? { fontSize: '1rem', color: 'var(--flame)', fontWeight: '800' }
    : { fontSize: '1.1rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.1)' };

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    const activeColor = 'var(--ember)';
    return {
      ...linkTextStyle,
      color: isActive ? activeColor : linkTextStyle.color
    };
  };

  const getSideLinkStyle = (path) => {
    return location.pathname === path ? { color: 'var(--ember)' } : {};
  };

  const linksContainerStyle = isHome
    ? {
      position: 'absolute',
      right: '0',
      top: '0',
      height: '100%',
      width: '35%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '2rem',
      gap: '1.2rem'
    }
    : {};

  return (
    <>
      {/* SMART SCROLL-UP NAVBAR (Desktop Only) */}
      <div className={`smart-scroll-up-nav ${showScrollUpNav ? 'visible' : ''}`}>
        <div className="smart-nav-content">
          <Link to="/" onClick={closeMenu} className="smart-nav-logo-link">
            <img src={LOGO_RED} alt="Famissio" className="smart-nav-logo-img" />
          </Link>
          <ul className="smart-nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>ACCUEIL</Link></li>
            <li><Link to="/missions" className={location.pathname === '/missions' ? 'active' : ''} onClick={closeMenu}>NOS MISSIONS</Link></li>
            <li><Link to="/formation" className={location.pathname === '/formation' ? 'active' : ''} onClick={closeMenu}>FORMATION</Link></li>
            <li><Link to="/temoignages" className={location.pathname === '/temoignages' ? 'active' : ''} onClick={closeMenu}>TÉMOIGNAGES</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>CONTACT</Link></li>
          </ul>
        </div>
      </div>

      <nav className={`hero-navbar ${scrolled ? 'hidden' : ''} ${navClass}`}>
        {isHome && (
          <div className="mobile-logo">
            <Link to="/" onClick={closeMenu}>
              <img
                src={LOGO_RED}
                alt="Famissio Logo Mobile"
              />
            </Link>
          </div>
        )}

        <div className="nav-logo-wrapper hide-on-mobile">
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
          <li><Link to="/" style={getLinkStyle('/')} onClick={closeMenu}>ACCUEIL</Link></li>
          <li><Link to="/missions" style={getLinkStyle('/missions')} onClick={closeMenu}>NOS MISSIONS</Link></li>
          <li><Link to="/formation" style={getLinkStyle('/formation')} onClick={closeMenu}>FORMATION</Link></li>
          <li><Link to="/temoignages" style={getLinkStyle('/temoignages')} onClick={closeMenu}>TÉMOIGNAGES</Link></li>
          <li><Link to="/contact" style={getLinkStyle('/contact')} onClick={closeMenu}>CONTACT</Link></li>
        </ul>
      </nav>

      {/* Floating menu button (Mobile only) */}
      <div className="nav-circle show-on-mobile" style={{ zIndex: 9999 }}>
        <button className="nav-toggle" id="menuToggle" onClick={toggleMenu}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <div className={`menu-backdrop ${menuActive ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`side-menu ${menuActive ? 'active' : ''}`} id="sideMenu">
        <ul className="side-links">
          <li><Link to="/" className="side-link" style={getSideLinkStyle('/')} onClick={closeMenu}>ACCUEIL</Link></li>
          <li><Link to="/missions" className="side-link" style={getSideLinkStyle('/missions')} onClick={closeMenu}>NOS MISSIONS</Link></li>
          <li><Link to="/formation" className="side-link" style={getSideLinkStyle('/formation')} onClick={closeMenu}>FORMATION</Link></li>
          <li><Link to="/temoignages" className="side-link" style={getSideLinkStyle('/temoignages')} onClick={closeMenu}>TÉMOIGNAGES</Link></li>
          <li><Link to="/contact" className="side-link" style={getSideLinkStyle('/contact')} onClick={closeMenu}>CONTACT</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;