import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Missions from './pages/Missions';
import Formation from './pages/Formation';
import Temoignages from './pages/Temoignages';
import NousRejoindre from './pages/NousRejoindre';

function App() {
  return (
    <>
      <Navbar />

      {/* On retire la div globale ici pour laisser l'Accueil prendre toute la largeur */}
      <Routes>
        {/* L'Accueil est libre (Pleine largeur) */}
        <Route path="/" element={<Home />} />

        {/* Les autres pages sont "rangées" dans le conteneur centré */}
        <Route path="/missions" element={<div className="main-container"><Missions /></div>} />
        <Route path="/formation" element={<div className="main-container"><Formation /></div>} />
        <Route path="/temoignages" element={<div className="main-container"><Temoignages /></div>} />
        <Route path="/contact" element={<div className="main-container"><NousRejoindre /></div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;