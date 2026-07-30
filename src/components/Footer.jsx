import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="site-footer">
            <ul className="footer-nav">
                <li><Link to="/" onClick={scrollToTop}>ACCUEIL</Link></li>
                <li><Link to="/missions" onClick={scrollToTop}>NOS MISSIONS</Link></li>
                <li><Link to="/formation" onClick={scrollToTop}>FORMATION</Link></li>
                <li><Link to="/temoignages" onClick={scrollToTop}>TÉMOIGNAGES</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>CONTACT</Link></li>
            </ul>
            <div className="footer-copy">
                © 2026 Famissio - Tous droits réservés
                <Link to="/reserve" style={{ fontSize: '10px', opacity: 0.5, textDecoration: 'none', color: 'inherit', marginLeft: '10px' }}>
                    page réservée
                </Link>
            </div>
        </footer>
    );
}