import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function GoogleMap() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Link Google Maps Warung Bang Wahid
  const mapsLink = "https://maps.app.goo.gl/UMzqvRGHCJ6muWLJA";

  const mapUrl = "https://www.google.com/maps/embed?pb=!3m2!1sid!2sid!4v1762622879438!5m2!1sid!2sid!6m8!1m7!1sF05CATpcTr9p5xMxEX-FUg!2m2!1d-6.346827387378661!2d107.1397943626058!3f292.1312651445137!4f3.0129038577380527!5f0.7820865974627469";

  return (
    <div
      ref={ref}
      className={`maps-section ${
        inView ? "is-visible" : "animate-on-scroll"
      }`}
    >
      <Container className="py-5">
        <div className="text-center mb-4">
          <h2
            style={{
              fontFamily: "'Lobster', cursive",
              fontSize: "3rem",
              color: "var(--primary-color)",
              marginBottom: "1rem",
            }}
          >
            Lokasi Kami
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Kunjungi warung kami untuk menikmati hidangan lezat secara langsung
          </p>
        </div>
        <div
          className="map-container"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            height: "450px",
            width: "100%",
          }}
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{
              border: 0,
              borderRadius: "15px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Warung Bang Wahid"
          ></iframe>
        </div>
        <div className="text-center mt-4">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cta"
            style={{
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            📍 Buka di Google Maps
          </a>
        </div>
      </Container>
    </div>
  );
}

export default GoogleMap;

