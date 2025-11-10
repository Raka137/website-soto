import React from "react";
import { Card } from "react-bootstrap";

const GalleryItem = ({ image, onClick }) => (
  <Card
    onClick={onClick}
    className="shadow-sm hover-shadow border-0 h-100 d-flex flex-column"
    style={{ cursor: "pointer" }}
  >
    {/* fixed-height image container so all cards align */}
    <div
      style={{
        height: 300,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={image.src}
        alt={image.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>

    <Card.Body className="mt-auto">
      <Card.Title>{image.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default GalleryItem;
