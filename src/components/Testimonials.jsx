import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { useInView } from "react-intersection-observer"; // <-- 1. Import kembali useInView

// 2. Isi data testimoni yang kosong
const testimonialsData = [
  {
    name: "Budi Santoso",
    text: "Soto Betawinya juara! Kuahnya medok dan dagingnya empuk banget. Pasti akan kembali lagi!",
    role: "Karyawan Swasta",
  },
  {
    name: "Sari Lestari",
    text: "Tempatnya nyaman buat makan bareng keluarga. Sop Iganya juga empuk, anak-anak saya suka sekali.",
    role: "Ibu Rumah Tangga",
  },
  {
    name: "Dika Pratama",
    text: "Salah satu soto terenak di kota ini. Rasanya otentik dan harganya sangat pas di kantong mahasiswa.",
    role: "Mahasiswa",
  },
];

function Testimonials() {
  // 3. Tambahkan kembali logika untuk animasi on-scroll
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // 4. Terapkan ref dan kelas animasi
    <div
      ref={ref}
      className={`testimonials-section ${
        inView ? "is-visible" : "animate-on-scroll"
      }`}
    >
      <Container className="text-center">
        <h2
          className="mb-4"
          style={{ fontFamily: "'Lobster', cursive", fontSize: "3rem" }}
        >
          Apa Kata Pelanggan?
        </h2>
        <Carousel indicators={false} variant="light">
          {testimonialsData.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <p className="lead fst-italic">"{testimonial.text}"</p>
              <h5 className="mt-4 mb-0">{testimonial.name}</h5>
              <small>{testimonial.role}</small>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Testimonials;
