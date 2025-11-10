import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer"; // <-- 1. Import kembali useInView

// 2. Import gambar menu yang baru
import sotoBetawiImg from "../assets/soto-betawi-daging.jpg";
import sotoBeningImg from "../assets/soto-bening-ayam.jpg";
import sopIgaImg from "../assets/sop-iga.jpg";

// 3. Update data menu dengan gambar dan deskripsi baru
const menuData = [
  {
    title: "Soto Betawi",
    text: "Kuah santan susu yang kaya rempah, dipadukan dengan potongan daging empuk, kentang, dan tomat segar.",
    image: sotoBetawiImg,
  },
  {
    title: "Soto Bening",
    text: "Soto ayam dengan kuah bening yang ringan dan menyegarkan. Disajikan dengan soun, tauge, dan taburan seledri.",
    image: sotoBeningImg,
  },
  {
    title: "Sop IGA",
    text: "Iga sapi pilihan yang direbus lama hingga empuk, disajikan dalam kuah kaldu bening yang gurih dan menghangatkan.",
    image: sopIgaImg,
  },
];

function FeaturedServices() {
  // 4. Tambahkan kembali logika untuk animasi on-scroll
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.1, // Memicu saat 10% elemen terlihat
  });

  return (
    // 5. Terapkan ref dan kelas animasi
    <Container
      ref={ref}
      className={`py-5 text-center ${
        inView ? "is-visible" : "animate-on-scroll"
      }`}
    >
      <h2
        className="mb-5"
        style={{ fontFamily: "'Lobster', cursive", fontSize: "3rem" }}
      >
        Menu Andalan dari Kami
      </h2>
      <Row>
        {menuData.map((menu, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 service-card">
              {/* 6. Ganti ikon dengan gambar */}
              <Card.Img variant="top" src={menu.image} />
              <Card.Body className="p-4">
                <Card.Title as="h4" className="fw-bold">
                  {menu.title}
                </Card.Title>
                <Card.Text className="text-muted">{menu.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedServices;
