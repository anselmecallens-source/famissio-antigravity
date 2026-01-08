import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Missions from "./pages/Missions.jsx";
import Formation from "./pages/Formation.jsx";
import Temoignages from "./pages/Temoignages.jsx";
import NousRejoindre from "./pages/NousRejoindre.jsx";
import Priere from "./pages/Priere.jsx";

// ... tes imports ...

function App() {
  return (
    <Router>
      <Navbar />
      {/* AJOUTE CETTE DIV ICI POUR ENCADRER TOUTES LES PAGES */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/contact" element={<NousRejoindre />} />
          {/* ... autres routes ... */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
