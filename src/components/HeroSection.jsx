import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'; 
import heroBg from "../assets/soto-bg.jpg"; // Pastikan Anda memiliki gambar soto-bg.jpg di src/assets

function HeroSection() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
    height: "90vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    color: "white",
  };

  return (
    <div style={heroStyle} className="text-center">
      <Container className="hero-content-animation">
        {/* ===== INI BAGIAN YANG DIUBAH ===== */}
        <h1 className="display-3" style={{ fontFamily: "'Lobster', cursive" }}>
          Cita Rasa Otentik Soto Betawi
        </h1>
        <p className="lead my-4">
          Di buat dengan Perpaduan rasa gurih nikmat, disajikan
          hangat untuk Anda.
        </p>
                <Button 
          as={Link} 
          to="/services" 
          size="lg" 
          className="btn-cta"
        >
          Lihat Menu Lengkap
        </Button>

        {/* ===== AKHIR BAGIAN YANG DIUBAH ===== */}
      </Container>
    </div>
  );
}

export default HeroSection;
