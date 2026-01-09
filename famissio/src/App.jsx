import React from 'react';
import { Routes, Route } from 'react-router-dom';

// On garde tes imports de pages
import Home from './pages/Home';
import Missions from './pages/Missions';
import Formation from './pages/Formation';
import Temoignages from './pages/Temoignages';
import NousRejoindre from './pages/NousRejoindre';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* On garde tes autres pages accessibles via l'URL si besoin */}
        <Route path="/missions" element={<div className="main-container"><Missions /></div>} />
        <Route path="/formation" element={<div className="main-container"><Formation /></div>} />
        <Route path="/temoignages" element={<div className="main-container"><Temoignages /></div>} />
        <Route path="/contact" element={<div className="main-container"><NousRejoindre /></div>} />
      </Routes>
    </>
  );
}

export default App;