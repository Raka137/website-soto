import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GalleryItem from "../components/GalleryItem";
import ImageModal from "../components/ImageModal";

// import semua gambar dari folder assets
import sotoBetawiAyam from "../assets/soto-betawi-ayam.jpg";
import sotoBetawiDaging from "../assets/soto-betawi-daging.jpg";
import sotoBeningAyam from "../assets/soto-bening-ayam.jpg";
import sotoBeningDaging from "../assets/soto-bening-daging.jpg";
import sopDaging from "../assets/sop-daging.jpg";
import sopIga from "../assets/sop-iga.jpg";
import nasiAyam from "../assets/nasi-ayam.jpg";
import nasiLele from "../assets/nasi-lele.jpg";
import nasi from "../assets/nasi.jpg";
import esTeh from "../assets/es-teh.jpg";
import esJeruk from "../assets/es-jeruk.jpg";
import airMineral from "../assets/air-mineral.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // data galeri berdasarkan kategori kuliner
  const images = [
  {
    src: sotoBetawiAyam,
    title: "Soto Betawi Ayam",
    category: "Soto Betawi",
    description: "Soto Betawi khas dengan kuah santan gurih dan potongan ayam lembut."
  },
  {
    src: sotoBetawiDaging,
    title: "Soto Betawi Daging",
    category: "Soto Betawi",
    description: "Perpaduan daging sapi empuk dan kuah santan gurih yang kaya rempah."
  },
  {
    src: sotoBeningAyam,
    title: "Soto Bening Ayam",
    category: "Soto Bening",
    description: "Kuah bening segar dengan suwiran ayam kampung dan taburan daun bawang."
  },    
  { 
    src: sotoBeningDaging, 
    title: "Soto Bening Daging", 
    category: "Soto Bening",
    description: "Soto bening dengan potongan daging sapi empuk dan rasa rempah yang ringan."
  },
  { 
    src: sopDaging,
    title: "Sop Daging", 
    category: "Sop",
    description: "Sop daging sapi dengan kuah bening hangat dan sayuran segar."
  },
  { 
    src: sopIga, 
    title: "Sop Iga", 
    category: "Sop",
    description: "Sop iga sapi dengan rasa gurih dan potongan iga yang empuk."
  },
  { 
    src: nasiAyam, 
    title: "Nasi Ayam", 
    category: "Menu Tambahan",
    description: "Nasi putih hangat disajikan dengan potongan ayam goreng renyah."
  },
  { 
    src: nasiLele, 
    title: "Nasi Lele", 
    category: "Menu Tambahan",
    description: "Nasi putih dengan ikan lele goreng yang gurih dan sambal pedas."
  },
  { src: nasi, 
    title: "Nasi Putih", 
    category: "Menu Tambahan",
    description: "Nasi putih pulen sebagai pelengkap hidangan utama."
  },
  { 
    src: esTeh, 
    title: "Es Teh Manis", 
    category: "Minuman",
    description: "Teh manis segar yang cocok untuk menyegarkan tenggorokan." 
  },
  { 
    src: esJeruk, 
    title: "Es Jeruk Segar", 
    category: "Minuman",
    description: "Perasan jeruk segar dengan es yang menyegarkan."
  },
  { 
    src: airMineral, 
    title: "Air Mineral", 
    category: "Minuman",
    description: "Air mineral dingin untuk melepas dahaga."
  },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % filteredImages.length;
      setSelectedImage(filteredImages[next]);
      return next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[next]);
      return next;
    });
  };

  return (
    <Container className="py-5 text-center">
      <h2 className="mb-3 fw-bold text-success">Galeri Kuliner Soto Betawi</h2>
      <p className="mb-4 text-muted">
        Lihat berbagai menu khas kami yang menggugah selera, dari Soto Betawi autentik hingga minuman segar penutup hidangan.
      </p>

      {/* Filter kategori */}
      <div className="mb-4">
        {["All", "Soto Betawi", "Soto Bening", "Sop", "Menu Tambahan", "Minuman"].map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "success" : "outline-success"}
            className="mx-2 my-1"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid galeri */}
      <Row xs={1} md={3} className="g-4">
        {filteredImages.map((img, index) => (
          <Col key={index}>
            <GalleryItem image={img} onClick={() => openModal(img, index)} />
          </Col>
        ))}
      </Row>

      {/* Modal gambar */}
      {selectedImage && (
        <ImageModal
          show={showModal}
          handleClose={closeModal}
          image={selectedImage}
          images={filteredImages}
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </Container>
  );
};

export default Gallery;
