import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const LOGO_NAV = "https://www.dropbox.com/scl/fi/w1mr871tpt818u1kgpjxm/Logo-Famissio-blanc.png?rlkey=8nxqxjka5gxp1sdzzfr1wx7v8&st=orb2ajfg&raw=1";

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



  // 1. BARRE PRINCIPALE
  // Styles moved to CSS classes: .navbar-home vs .navbar-page
  // This allows hiding .navbar-page on mobile via Media Queries
  const navClass = isHome ? 'navbar-home' : 'navbar-page';

  // 2. TEXTE
  const linkTextStyle = isHome
    ? { fontSize: '1rem', color: 'var(--flame)', fontWeight: '800' }
    : { fontSize: '1.1rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.1)' };

  // Helper pour la couleur active (Orange clair)
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    const activeColor = 'var(--ember)';
    return {
      ...linkTextStyle,
      color: isActive ? activeColor : linkTextStyle.color
    };
  };

  // Helper pour le sidebar
  const getSideLinkStyle = (path) => {
    return location.pathname === path ? { color: 'var(--ember)' } : {};
  };

  // 3. CONTENEUR DU MENU (C'est ici que tout se joue)
  const linksContainerStyle = isHome
    ? {
      position: 'absolute',     // SORT DU FLUX : Ignore les paddings du parent
      right: '0',               // COLLÉ À DROITE : Va chercher le bord physique de l'écran
      top: '0',
      height: '100%',
      width: '35%',             // LARGEUR SÉCURISÉE : Assez étroit pour ne jamais toucher l'orange
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end', // Aligne le texte à droite dans la boîte
      paddingRight: '2rem',     // PETITE MARGE : Pour ne pas être littéralement collé au bord
      gap: '1.2rem'             // Espacement
    }
    : {};

  return (
    <>


      <nav className={`hero-navbar ${scrolled ? 'hidden' : ''} ${navClass}`}>

        {isHome && (
          <div className="mobile-logo">
            <Link to="/" onClick={closeMenu}>
              <img
                src="https://www.dropbox.com/scl/fi/9c4wjresj75ggoruwqwpp/Logo-Famissio-rouge.png?rlkey=td18v0flur03xqsroyazjh1l6&st=vqgiyjx2&raw=1"
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
          <li><Link to="/" style={getLinkStyle('/')} onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/missions" style={getLinkStyle('/missions')} onClick={closeMenu}>Nos missions</Link></li>
          <li><Link to="/formation" style={getLinkStyle('/formation')} onClick={closeMenu}>Formation</Link></li>
          <li><Link to="/temoignages" style={getLinkStyle('/temoignages')} onClick={closeMenu}>Témoignages</Link></li>
          <li><Link to="/contact" style={getLinkStyle('/contact')} onClick={closeMenu}>Contact</Link></li>
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
          <li><Link to="/" className="side-link" style={getSideLinkStyle('/')} onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/missions" className="side-link" style={getSideLinkStyle('/missions')} onClick={closeMenu}>Nos missions</Link></li>
          <li><Link to="/formation" className="side-link" style={getSideLinkStyle('/formation')} onClick={closeMenu}>Formation</Link></li>
          <li><Link to="/temoignages" className="side-link" style={getSideLinkStyle('/temoignages')} onClick={closeMenu}>Témoignages</Link></li>
          <li><Link to="/contact" className="side-link" style={getSideLinkStyle('/contact')} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;