import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Missions from "./pages/Missions.jsx";
import Formation from "./pages/Formation.jsx";
import Temoignages from "./pages/Temoignages.jsx";
import NousRejoindre from "./pages/NousRejoindre.jsx";
import Priere from "./pages/Priere.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 24 }}>
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
    </>
  );
}
