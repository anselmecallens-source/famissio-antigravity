import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Missions from "./pages/Missions";
import Formation from "./pages/Formation";
import Temoignages from "./pages/Temoignages";
import NousRejoindre from "./pages/NousRejoindre";
import Priere from "./pages/Priere";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/nous-rejoindre" element={<NousRejoindre />} />
          <Route path="/priere-famissionnaire" element={<Priere />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}