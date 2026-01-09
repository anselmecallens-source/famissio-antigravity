import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import mis à jour selon ta structure (Home.jsx est maintenant à la racine)
import Home from './Home';

// On garde les autres pages (assure-toi que le dossier 'pages' existe toujours pour celles-ci)
import Missions from './pages/Missions';
import Formation from './pages/Formation';
import Temoignages from './pages/Temoignages';
import NousRejoindre from './pages/NousRejoindre';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Autres routes conservées */}
        <Route path="/missions" element={<div className="main-container"><Missions /></div>} />
        <Route path="/formation" element={<div className="main-container"><Formation /></div>} />
        <Route path="/temoignages" element={<div className="main-container"><Temoignages /></div>} />
        <Route path="/contact" element={<div className="main-container"><NousRejoindre /></div>} />
      </Routes>
    </>
  );
}

export default App;