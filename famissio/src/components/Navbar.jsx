import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../config/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // CSS intégré directement
  const styles = `
    :root { --primary: #dd4b1a; --dark: #333; --white: #fff; }
    .navbar { background: var(--white); height: 80px; display: flex; justify-content: center; position: sticky; top: 0; z-index: 999; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .navbar-container { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1200px; padding: 0 20px; }
    .navbar-logo img { height: 50px; cursor: pointer; }
    .nav-menu { display: flex; list-style: none; gap: 20px; margin: 0; padding: 0; align-items: center; }
    .nav-links { color: var(--dark); text-decoration: none; padding: 0.5rem 1rem; font-weight: 500; border-bottom: 3px solid transparent; transition: 0.3s; }
    .nav-links:hover, .nav-links.activated { color: var(--primary); border-bottom: 3px solid var(--primary); }
    .btn--primary { padding: 8px 20px; background: var(--primary); border: none; border-radius: 4px; color: #fff; cursor: pointer; font-size: 1rem; transition: 0.3s; }
    .btn--primary:hover { background: #c23b10; transform: scale(1.05); }
    .menu-icon, .mobile-only { display: none; }

    @media screen and (max-width: 960px) {
      .nav-menu { flex-direction: column; width: 100%; position: absolute; top: 80px; left: -100%; transition: 0.5s all; background: var(--white); height: 90vh; padding-top: 2rem; border-top: 1px solid #eee; }
      .nav-menu.active { left: 0; }
      .menu-icon { display: block; font-size: 1.8rem; cursor: pointer; color: var(--dark); }
      .nav-btn { display: none; }
      .mobile-only { display: block; width: 100%; text-align: center; margin-top: 1rem; }
      .nav-links-mobile { background: var(--primary); color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-size: 1.2rem; display: inline-block;}
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={assets.logo} alt="Famissio" />
          </NavLink>

          <div className="menu-icon" onClick={toggleMenu}>
            <span>{isOpen ? '✕' : '☰'}</span>
          </div>

          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/missions" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>Nos missions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/formation" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>Formation</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/temoignages" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>Témoignages</NavLink>
            </li>
            <li className="nav-item mobile-only">
              <NavLink to="/contact" className="nav-links-mobile" onClick={closeMenu}>Nous rejoindre</NavLink>
            </li>
            <li className="nav-item nav-btn">
              <NavLink to="/contact"><button className="btn--primary">Nous rejoindre</button></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;