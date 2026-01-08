import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des pages
import Home from './pages/Home';
import Missions from './pages/Missions';
import Formation from './pages/Formation';
import Temoignages from './pages/Temoignages';
import NousRejoindre from './pages/NousRejoindre';
// Si tu as d'autres pages (Priere, etc.), assure-toi qu'elles sont importées ici

function App() {
  return (
    <Router>
      <Navbar />

      {/* Le conteneur doit être AUTOUR des Routes, pas dedans */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/contact" element={<NousRejoindre />} />
          {/* Ajoute ici tes autres routes si nécessaire */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;