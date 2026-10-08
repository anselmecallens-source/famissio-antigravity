import React, { lazy, Suspense, useEffect } from 'react';
// Main App Component
import { Routes, Route, useLocation } from 'react-router-dom';

// Import des composants globaux
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Charge chaque page à la demande pour alléger le premier chargement.
const Accueil = lazy(() => import('./pages/Accueil'));
const Missions = lazy(() => import('./pages/Missions'));
const Formation = lazy(() => import('./pages/Formation'));
const Temoignages = lazy(() => import('./pages/Temoignages'));
const Contact = lazy(() => import('./pages/Contact'));
const Priere = lazy(() => import('./pages/Priere'));
const ProtectedPage = lazy(() => import('./components/ProtectedPage'));

// Petit utilitaire pour remonter en haut de page à chaque changement de lien
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'accueil' : location.pathname.slice(1).replaceAll('/', '-');

  return (
    <div className="fm-app" id="top" data-page={currentPage}>
      {/* 1. La barre de navigation visible partout */}
      <Navbar />

      {/* Active le retour en haut de page */}
      <ScrollToTop />

      {/* 2. Le contenu des pages */}
      <div className="fm-route-content">
        <Suspense fallback={<main className="fm-loading" aria-busy="true" aria-label="Chargement de la page" />}>
          <Routes>
            <Route path="/" element={<Accueil />} />

            <Route path="/missions" element={<Missions />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/priere" element={<Priere />} />
            <Route path="/reserve" element={<ProtectedPage />} />
          </Routes>
        </Suspense>
      </div>

      {/* 3. Le footer visible partout */}
      <Footer />
    </div>
  );
}

export default App;
