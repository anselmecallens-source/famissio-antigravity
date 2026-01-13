import React, { useEffect } from 'react';
// Main App Component
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
import PriereFamissio from './pages/PriereFamissio';
import ProtectedPage from './components/ProtectedPage';

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
        <Route path="/formation" element={<Formation />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/contact" element={<div style={{ paddingTop: '120px' }}><NousRejoindre /></div>} />
        <Route path="/priere-famissio" element={<PriereFamissio />} />
        <Route path="/reserve" element={<ProtectedPage />} />
      </Routes>

      {/* 3. Le footer visible partout */}
      <Footer />
    </>
  );
}

export default App;