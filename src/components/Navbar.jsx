import { NavLink } from "react-router-dom";

const css = `
.fam-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.fam-nav__inner{
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 0;
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.fam-nav__brand{
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #c82904;
  font-size: 18px;
}

.fam-nav__links{
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.fam-link{
  text-decoration: none;
  color: #222;
  font-weight: 700;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 999px;
  transition: transform .15s ease, background-color .15s ease, color .15s ease;
}

.fam-link:hover{
  background: rgba(244,106,7,0.10);
  color: #f46a07;
  transform: translateY(-1px);
}

.fam-link.active{
  background: rgba(200,41,4,0.10);
  color: #c82904;
}
`;

export default function Navbar() {
  return (
    <header className="fam-nav">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="fam-nav__inner">
        <NavLink to="/" className="fam-nav__brand">
          Famissio
        </NavLink>

        <nav className="fam-nav__links" aria-label="Navigation principale">
          <NavLink to="/" end className={({ isActive }) => `fam-link ${isActive ? "active" : ""}`}>
            Accueil
          </NavLink>
          <NavLink to="/missions" className={({ isActive }) => `fam-link ${isActive ? "active" : ""}`}>
            Nos missions
          </NavLink>
          <NavLink to="/formation" className={({ isActive }) => `fam-link ${isActive ? "active" : ""}`}>
            Formation
          </NavLink>
          <NavLink to="/temoignages" className={({ isActive }) => `fam-link ${isActive ? "active" : ""}`}>
            Témoignages
          </NavLink>
          <NavLink to="/nous-rejoindre" className={({ isActive }) => `fam-link ${isActive ? "active" : ""}`}>
            Nous rejoindre
          </NavLink>
          <NavLink to="/priere-famissionnaire" className={({ isActive }) => `fam-link ${isActive ? "active" : ""}`}>
            Prière
          </NavLink>
        </nav>
      </div>
    </header>
  );
}