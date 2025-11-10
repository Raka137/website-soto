import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";

// import Footer from './components/Footer'; // (Placeholder untuk tugas anggota lain)

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
          {/* <Route path="/faq" element={<Faq />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
