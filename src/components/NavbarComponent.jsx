import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  // Nomor WhatsApp tujuan dalam format internasional tanpa '+' atau spasi
  const whatsappNumber = "628176812006";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;
  const goFoodURL = `https://gofood.link/a/K667dwL`;

  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-sm"
      style={{ backgroundColor: "#4a2c2a" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span>Warung Bang Wahid</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Galeri
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>

            {/* ===== INI BAGIAN YANG DIUBAH ===== */}
            <Button
              className="btn-cta ms-lg-3 mt-2 mt-lg-0"
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan via Whatsapp
            </Button>
              <Button
                  className="btn-cta ms-lg-3 mt-2 mt-lg-0"
                  href={goFoodURL}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Pesan via GoFood
              </Button>  
            {/* ===== AKHIR BAGIAN YANG DIUBAH ===== */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
