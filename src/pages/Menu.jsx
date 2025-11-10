import React from "react";
import { Container, Row, Col, Card, Badge, Button, Carousel } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import sotoBetawiDagingImg from "../assets/soto-betawi-daging.jpg";
import sotoBetawiAyamImg from "../assets/soto-betawi-ayam.jpg";
import sotoBeningAyamImg from "../assets/soto-bening-ayam.jpg";
import sotoBeningDagingImg from "../assets/soto-bening-daging.jpg";
import sopIgaImg from "../assets/sop-iga.jpg";
import sopDagingImg from "../assets/sop-daging.jpg";
import sotoBgImg from "../assets/soto-bg.jpg";
import estehImg from "../assets/es-teh.jpg";
import esjerukImg from "../assets/es-jeruk.jpg";
import airmineral from "../assets/air-mineral.jpg";
import pecelleleImg from "../assets/nasi-lele.jpg";
import pecelayamImg from "../assets/nasi-ayam.jpg";
import nasiimg from "../assets/nasi.jpg";

// Menu 1: Menu Utama
const menu1Data = [
  {
    id: 1,
    name: "Soto Betawi Ayam",
    description: "Kuah santan susu yang kaya rempah, dipadukan dengan potongan Ayam, kentang, dan tomat segar.",
    price: "Rp 15.000",
    image: sotoBetawiAyamImg,
    category: "Menu Utama",
    popular: true,
  },
  {
    id: 2,
    name: "Soto Betawi Daging",
    description: "Kuah santan susu yang kaya rempah, dipadukan dengan potongan Daging, kentang, dan tomat segar.",
    price: "Rp 25.000",
    image: sotoBetawiDagingImg,
    category: "Menu Utama",
    popular: false,
  },
  {
    id: 3,
    name: "Sop IGA",
    description: "Iga sapi pilihan yang direbus lama hingga empuk, disajikan dalam kuah kaldu bening yang gurih dan menghangatkan.",
    price: "Rp 30.000",
    image: sopIgaImg,
    category: "Menu Utama",
    popular: true,
  },
   {
    id: 4,
    name: "Sop Daging",
    description: "Daging sapi pilihan yang direbus lama hingga empuk, disajikan dalam kuah kaldu bening yang gurih dan menghangatkan.",
    price: "Rp 25.000",
    image: sopDagingImg,
    category: "Menu Utama",
    popular: false,
  },
  {
    id: 5,
    name: "Soto Bening Ayam",
    description: "Soto ayam dengan kuah bening yang ringan dan menyegarkan. Disajikan dengan soun, tauge, dan taburan seledri.",
    price: "Rp 13.000",
    image: sotoBeningAyamImg,
    category: "Menu Utama",
    popular: false,
  },
    {
    id: 6,
    name: "Soto Bening Daging",
    description: "Soto Daging dengan kuah bening yang ringan dan menyegarkan. Disajikan dengan soun, tauge, dan taburan seledri.",
    price: "Rp 25.000",
    image: sotoBeningDagingImg,
    category: "Menu Utama",
    popular: false,
  },
    {
    id: 7,
    name: "Nasi Pecel Lele",
    description: "Lele Goreng gurih dan renyah, disertai nasi dan sambal yang sangat lezat.",
    price: "Rp 15.000",
    image: pecelleleImg,
    category: "Menu Utama",
    popular: false,
  },
    {
    id: 8,
    name: "Nasi Pecel Ayam",
    description: "Ayam goreng gurih dan renyah, disertai nasi dan sambal yang sangat lezat.",
    price: "Rp 18.000",
    image: pecelayamImg,
    category: "Menu Utama",
    popular: false,
  },
];

// Menu 2: Menu Tambahan & Minuman
const menu2Data = [
  {
    id: 9,
    name: "Es Teh Manis",
    description: "Teh manis dingin yang menyegarkan, cocok menemani hidangan soto Anda.",
    price: "Rp 5.000",
    image: estehImg,
    category: "Minuman",
    popular: true,
  },
  {
    id: 10,
    name: "Es Jeruk",
    description: "Jeruk peras segar dengan es batu, memberikan kesegaran alami.",
    price: "Rp 7.000",
    image: esjerukImg,
    category: "Minuman",
    popular: false,
  },
  {
    id: 11,
    name: "Air Mineral",
    description: "Air mineral segar dalam botol, pilihan sehat untuk menemani makan Anda.",
    price: "Rp 3.000",
    image: airmineral,
    category: "Pelengkap",
    popular: false,
  },
  {
    id: 12,
    name: "Nasi Putih",
    description: "Nasi putih pulen hangat, disajikan sepiring penuh.",
    price: "Rp 5.000",
    image: nasiimg,
    category: "Pelengkap",
    popular: false,
  },
];

function Menu() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappNumber = "628176812006";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  const handleOrder = (menuItem) => {
    const message = `Halo, saya ingin memesan *${menuItem.name}* - ${menuItem.price}`;
    window.open(`${whatsappURL}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: "var(--light-color)", minHeight: "100vh" }}>
      {/* Hero Section untuk Menu */}
      <div
        className="menu-hero-section"
        style={{
          background: `linear-gradient(rgba(74, 44, 42, 0.8), rgba(74, 44, 42, 0.8)), url(${sotoBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "5rem 0",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <h1
            style={{
              fontFamily: "'Lobster', cursive",
              fontSize: "4rem",
              marginBottom: "1rem",
            }}
          >
            Menu Warung Bang Wahid
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            Nikmati berbagai hidangan lezat dengan cita rasa autentik Indonesia
          </p>
        </Container>
      </div>

      <Container className="py-5">
        {/* Menu 1 Section - Carousel */}
        <div
          ref={ref1}
          className={`mb-5 ${
            inView1 ? "is-visible" : "animate-on-scroll"
          }`}
        >
          <div className="text-center mb-5 menu-section-header">
            <h2
              className="menu-section-title"
              style={{
                fontFamily: "'Lobster', cursive",
                fontSize: "3rem",
                color: "var(--primary-color)",
                marginBottom: "1rem",
              }}
            >
              Menu Utama
            </h2>
            <p className="text-muted menu-section-subtitle" style={{ fontSize: "1.1rem" }}>
              Hidangan utama kami yang selalu siap memuaskan selera Anda
            </p>
          </div>

          <Carousel
            indicators={Math.ceil(menu1Data.length / 4) > 1}
            interval={5000}
            pause="hover"
            className="menu-carousel"
          >
            {/* Menampilkan 4 item per slide */}
            {Array.from({ length: Math.ceil(menu1Data.length / 4) }).map((_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <Row className="g-4">
                  {menu1Data.slice(slideIndex * 4, slideIndex * 4 + 4).map((item) => (
                    <Col xs={12} sm={6} lg={3} key={item.id}>
                      <Card
                        className="h-100 service-card"
                        style={{
                          border: "none",
                          borderRadius: "15px",
                          overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <Card.Img
                            variant="top"
                            src={item.image}
                            style={{
                              height: "220px",
                              objectFit: "cover",
                            }}
                          />
                          {item.popular && (
                            <Badge
                              bg="warning"
                              text="dark"
                              style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                fontSize: "0.8rem",
                                padding: "0.5rem 0.8rem",
                              }}
                            >
                              🔥 Popular
                            </Badge>
                          )}
                        </div>
                        <Card.Body className="p-4 d-flex flex-column">
                          <Card.Title
                            as="h5"
                            className="fw-bold mb-2"
                            style={{ color: "var(--dark-color)", fontSize: "1.1rem" }}
                          >
                            {item.name}
                          </Card.Title>
                          <Card.Text
                            className="text-muted mb-3 flex-grow-1"
                            style={{ fontSize: "0.85rem" }}
                          >
                            {item.description}
                          </Card.Text>
                          <div className="d-flex justify-content-between align-items-center mt-auto">
                            <span
                              className="fw-bold"
                              style={{
                                color: "var(--primary-color)",
                                fontSize: "1.1rem",
                              }}
                            >
                              {item.price}
                            </span>
                            <Button
                              className="btn-pesan"
                              size="sm"
                              onClick={() => handleOrder(item)}
                            >
                              Pesan
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Menu 2 Section */}
        <div
          ref={ref2}
          className={`mb-5 ${
            inView2 ? "is-visible" : "animate-on-scroll"
          }`}
        >
          <div className="text-center mb-5 menu-section-header">
            <h2
              className="menu-section-title"
              style={{
                fontFamily: "'Lobster', cursive",
                fontSize: "3rem",
                color: "var(--primary-color)",
                marginBottom: "1rem",
              }}
            >
              Menu Tambahan & Minuman
            </h2>
            <p className="text-muted menu-section-subtitle" style={{ fontSize: "1.1rem" }}>
              Pelengkap sempurna untuk melengkapi hidangan Anda
            </p>
          </div>

          <Row className="g-4 menu-2-section">
            {menu2Data.map((item) => (
              <Col md={6} lg={4} key={item.id}>
                <Card
                  className="h-100 service-card"
                  style={{
                    border: "none",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                    {item.popular && (
                      <Badge
                        bg="warning"
                        text="dark"
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          fontSize: "0.8rem",
                          padding: "0.5rem 0.8rem",
                        }}
                      >
                        🔥 Popular
                      </Badge>
                    )}
                    <Badge
                      bg="secondary"
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        fontSize: "0.75rem",
                        padding: "0.4rem 0.7rem",
                      }}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <Card.Title
                      as="h5"
                      className="fw-bold mb-3"
                      style={{ color: "var(--dark-color)" }}
                    >
                      {item.name}
                    </Card.Title>
                    <Card.Text
                      className="text-muted mb-3 flex-grow-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {item.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span
                        className="fw-bold"
                        style={{
                          color: "var(--primary-color)",
                          fontSize: "1.2rem",
                        }}
                      >
                        {item.price}
                      </span>
                      <Button
                        className="btn-pesan"
                        size="sm"
                        onClick={() => handleOrder(item)}
                      >
                        Pesan
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Section */}
        <div
          className="text-center py-5 menu-cta-section"
          style={{
            backgroundColor: "var(--primary-color)",
            borderRadius: "20px",
            color: "white",
            marginTop: "3rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Lobster', cursive",
              fontSize: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Tertarik dengan Menu Kami?
          </h3>
          <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.9 }}>
            Pesan sekarang melalui WhatsApp dan nikmati hidangan lezat kami!
          </p>
          <Button
            className="btn-cta"
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            style={{
              backgroundColor: "var(--secondary-color)",
              borderColor: "var(--secondary-color)",
              color: "var(--dark-color)",
              padding: "0.75rem 2rem",
              fontSize: "1.1rem",
            }}
          >
            📱 Pesan via WhatsApp
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Menu;

