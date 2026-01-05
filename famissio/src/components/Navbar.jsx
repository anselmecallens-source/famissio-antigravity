import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: 16, borderBottom: "1px solid #eee" }}>
            <Link to="/" style={{ marginRight: 12 }}>Accueil</Link>
            <Link to="/missions" style={{ marginRight: 12 }}>Nos missions</Link>
            <Link to="/formation" style={{ marginRight: 12 }}>Formation</Link>
            <Link to="/temoignages" style={{ marginRight: 12 }}>Témoignages</Link>
            <Link to="/nous-rejoindre" style={{ marginRight: 12 }}>Nous rejoindre</Link>
            <Link to="/priere-famissionnaire">Prière</Link>
        </nav>
    );
}