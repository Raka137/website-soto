import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterComponent() {
    // Informasi kontak
    const address = "Jl. Azalea Raya, Perumahan Lembah Hijau, Cikarang Selatan";
    const phone = "0817-6812-006";

    return (
        <footer
            className="bg-dark text-white pt-5 pb-3 mt-5"
            style={{ backgroundColor: "#4a2c2a" }} // Konsisten dengan warna Navbar
        >
            <Container>
                <Row>
                    {/* Kolom 1: Tentang & Logo */}
                    <Col md={4} className="mb-4">
                        <h5 className="text-warning">Warung Bang Wahid</h5>
                        <p>
                            Menyajikan masakan Nusantara otentik dengan resep turun temurun.
                            Rasakan cita rasa terbaik dari setiap hidangan.
                        </p>
                    </Col>

                    {/* Kolom 2: Tautan Cepat */}
                    <Col md={4} className="mb-4">
                        <h5 className="text-warning">Tautan Cepat</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/" className="text-white p-0 mb-2">
                                Beranda
                            </Nav.Link>
                            <Nav.Link as={Link} to="/gallery" className="text-white p-0 mb-2">
                                Galeri
                            </Nav.Link>
                            <Nav.Link as={Link} to="/services" className="text-white p-0 mb-2">
                                Menu
                            </Nav.Link>
                            <Nav.Link as={Link} to="/faq" className="text-white p-0 mb-2">
                                FAQ
                            </Nav.Link>
                        </Nav>
                    </Col>

                    {/* Kolom 3: Kontak Kami */}
                    <Col md={4} className="mb-4">
                        <h5 className="text-warning">Hubungi Kami</h5>
                        <p className="mb-1">
                            {/* <FaMapMarkerAlt className="me-2" /> */}
                            Alamat: {address}
                        </p>
                        <p className="mb-1">
                            {/* <FaPhone className="me-2" /> */}
                            Telepon: {phone}
                        </p>
                        <p className="mt-3">
                            Jam Buka: Senin - Minggu, 10.00 - 20.00 WIB
                        </p>
                    </Col>
                </Row>

                {/* Garis pemisah */}
                <hr className="my-4 border-secondary" />

                {/* Baris Copyright */}
                <Row>
                    <Col className="text-center">
                        <p
                            className="text-light mb-0"
                            style={{ fontSize: '0.8rem', fontWeight: '400'}}
                        >
                            &copy; {new Date().getFullYear()} Warung Bang Wahid. Semua Hak Dilindungi.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;