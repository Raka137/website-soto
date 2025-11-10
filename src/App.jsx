import React from "react";
// <-- Hapus 'BrowserRouter as Router' dari sini
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import FAQ from "./pages/FAQ.jsx";

function App() {
  return (
    // <-- Hapus tag <Router> pembuka dan penutup, ganti dengan div atau Fragment
    <div>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Rute untuk halaman lain akan ditambahkan di sini oleh anggota lain */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} /> {/* Saya ganti /services jadi /menu agar sesuai dengan nama komponennya */}
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;