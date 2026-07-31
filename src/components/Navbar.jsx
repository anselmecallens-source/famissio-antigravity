import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const LOGO_NAV = "/assets/images/Logo Famissio blanc.png";
const LOGO_RED = "/assets/images/Logo Famissio rouge.webp";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuActive, setMenuActive] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const diff = currentScrollY - lastScrollY;

      if (currentScrollY > 100) {
        setIsFloating(true);
        if (diff > 5) {
          // Scrolling down -> hide navbar
          setNavVisible(false);
        } else if (diff < -5) {
          // Scrolling up -> show floating navbar
          setNavVisible(true);
        }
      } else {
        // At top of page -> anchored at hero, always visible
        setIsFloating(false);
        setNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuActive(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  const getSideLinkStyle = (path) => {
    return location.pathname === path ? { color: 'var(--ember)' } : {};
  };

  const isPageActive = (path) => location.pathname === path;

  return (
    <>
      {/* UNIFIED MORPHING NAVBAR */}
      <nav
        className={`unified-navbar ${isHome ? 'navbar-home' : 'navbar-page'} ${
          isFloating ? 'is-floating' : 'at-hero'
        } ${navVisible ? 'nav-visible' : 'nav-hidden'}`}
      >
        {isHome && (
          <div className="mobile-logo show-on-mobile">
            <Link to="/" onClick={closeMenu}>
              <img src={LOGO_RED} alt="Famissio Logo Mobile" />
            </Link>
          </div>
        )}

        {/* LOGO WRAPPER WITH DUAL CROSS-FADING LOGOS */}
        <div className="nav-logo-wrapper hide-on-mobile">
          <Link to="/" onClick={closeMenu} className="nav-logo-link">
            <img
              src={LOGO_NAV}
              alt="Famissio Logo Blanc"
              className={`nav-logo-img logo-white ${
                isFloating ? 'logo-hidden' : 'logo-visible'
              }`}
            />
            <img
              src={LOGO_RED}
              alt="Famissio Logo Rouge"
              className={`nav-logo-img logo-red ${
                isFloating ? 'logo-visible' : 'logo-hidden'
              }`}
            />
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <ul className="nav-links hide-on-mobile">
          <li>
            <Link
              to="/"
              className={isPageActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link
              to="/missions"
              className={isPageActive('/missions') ? 'active' : ''}
              onClick={closeMenu}
            >
              NOS MISSIONS
            </Link>
          </li>
          <li>
            <Link
              to="/formation"
              className={isPageActive('/formation') ? 'active' : ''}
              onClick={closeMenu}
            >
              FORMATION
            </Link>
          </li>
          <li>
            <Link
              to="/temoignages"
              className={isPageActive('/temoignages') ? 'active' : ''}
              onClick={closeMenu}
            >
              TÉMOIGNAGES
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isPageActive('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              CONTACT
            </Link>
          </li>
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