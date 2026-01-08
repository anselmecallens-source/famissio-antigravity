import React from 'react';
import { Routes, Route } from 'react-router-dom'; // PAS de BrowserRouter ici

/* --- IMPORTS DES COMPOSANTS --- */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* --- IMPORTS DES PAGES --- */
import Home from './pages/Home';
import Missions from './pages/Missions';
import Formation from './pages/Formation';
import Temoignages from './pages/Temoignages';
import NousRejoindre from './pages/NousRejoindre';

function App() {
  return (
    <>
      <Navbar />

      {/* Conteneur principal */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/contact" element={<NousRejoindre />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;