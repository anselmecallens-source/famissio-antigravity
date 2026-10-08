import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const LOGO_RED = '/assets/images/Logo Famissio rouge.webp';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/missions', label: 'Nos missions' },
  { to: '/formation', label: 'Se former' },
  { to: '/temoignages', label: 'Témoignages' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle('fm-menu-open', menuOpen);
    return () => document.body.classList.remove('fm-menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fm-site-header">
      <div className="fm-site-header-inner">
        <Link to="/" className="fm-site-brand" aria-label="Famissio, accueil" onClick={closeMenu}>
          <img src={LOGO_RED} alt="Famissio" />
          <span>Des familles<br />en mission</span>
        </Link>

        <button
          className="fm-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="fm-main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="fm-main-navigation" className={`fm-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} onClick={closeMenu} aria-current={pathname === to ? 'page' : undefined}>
              {label}
            </Link>
          ))}
          <Link to="/missions" className="fm-nav-join" onClick={closeMenu}>
            Rejoindre une mission <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
