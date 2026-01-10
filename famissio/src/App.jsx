import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import des composants globaux
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des pages
import Home from './pages/Home';
import Missions from './pages/Missions';
import Formation from './pages/Formation';
import Temoignages from './pages/Temoignages';
import NousRejoindre from './pages/NousRejoindre';

// Petit utilitaire pour remonter en haut de page à chaque changement de lien
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      {/* 1. La barre de navigation visible partout */}
      <Navbar />

      {/* Active le retour en haut de page */}
      <ScrollToTop />

      {/* 2. Le contenu des pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Ajout d'un padding-top pour que le menu fixe ne cache pas le contenu */}
        <Route path="/missions" element={<Missions />} />
        <Route path="/formation" element={<div style={{ paddingTop: '120px' }}><Formation /></div>} />
        <Route path="/temoignages" element={<div style={{ paddingTop: '120px' }}><Temoignages /></div>} />
        <Route path="/contact" element={<div style={{ paddingTop: '120px' }}><NousRejoindre /></div>} />
      </Routes>

      {/* 3. Le footer visible partout */}
      <Footer />
    </>
  );
}

export default App;