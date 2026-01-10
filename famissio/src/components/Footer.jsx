import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Footer() {
    // Fonction pour remonter en haut de page au clic
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="site-footer">
            <ul className="footer-nav">
                <li><Link to="/" onClick={scrollToTop}>Accueil</Link></li>
                <li><Link to="/missions" onClick={scrollToTop}>Nos missions</Link></li>
                <li><Link to="/formation" onClick={scrollToTop}>Formation</Link></li>
                <li><Link to="/temoignages" onClick={scrollToTop}>Témoignages</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
            <div className="footer-copy">© 2026 Famissio - Tous droits réservés</div>
        </footer>
    );
}