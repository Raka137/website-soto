import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import FAQ from "./pages/FAQ.jsx";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Rute untuk halaman lain akan ditambahkan di sini oleh anggota lain */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Menu />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
}

export default App;
