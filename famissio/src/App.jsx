import React, { useEffect } from 'react';
// Main App Component
import { Routes, Route, useLocation } from 'react-router-dom';

// Import des composants globaux
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des pages
import Accueil from './pages/Accueil';
import Missions from './pages/Missions';
import Formation from './pages/Formation';
import Temoignages from './pages/Temoignages';
import Contact from './pages/Contact';
import Priere from './pages/Priere';
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
        <Route path="/" element={<Accueil />} />

        {/* Ajout d'un padding-top pour que le menu fixe ne cache pas le contenu */}
        <Route path="/missions" element={<Missions />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/priere" element={<Priere />} />
        <Route path="/reserve" element={<ProtectedPage />} />
      </Routes>

      {/* 3. Le footer visible partout */}
      <Footer />
    </>
  );
}

export default App;