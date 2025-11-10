import React, { useEffect, useCallback } from "react";
import { Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({
  show,
  handleClose,
  image,
  images = [],
  currentIndex = 0,
  handleNext,
  handlePrev,
}) => {
  // keyboard navigation: left/right arrows and Esc
  const onKeyDown = useCallback(
    (e) => {
      if (!show) return;
      if (e.key === "ArrowRight") {
        handleNext && handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev && handlePrev();
      } else if (e.key === "Escape") {
        handleClose && handleClose();
      }
    },
    [show, handleNext, handlePrev, handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return (
    <AnimatePresence>
      {show && (
        <Modal
          show={show}
          onHide={handleClose}
          centered
          size="lg"
          backdrop={true}
          keyboard={true}
          contentClassName="bg-transparent border-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Modal.Body className="p-0 text-center bg-dark rounded-4 shadow-lg overflow-hidden">
              <div style={{ position: "relative" }}>
                {/* Prev button */}
                <button
                  aria-label="Previous"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev && handlePrev();
                  }}
                  className="btn btn-sm btn-dark"
                  style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 20,
                    opacity: 0.85,
                  }}
                >
                  ‹
                </button>

                {/* Next button */}
                <button
                  aria-label="Next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext && handleNext();
                  }}
                  className="btn btn-sm btn-dark"
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 20,
                    opacity: 0.85,
                  }}
                >
                  ›
                </button>

                <img
                  src={image?.src}
                  alt={image?.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    userSelect: "none",
                  }}
                />

                {/* small caption overlay showing position */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: 10,
                    zIndex: 25,
                    color: "#fff",
                    background: "rgba(0,0,0,0.4)",
                    padding: "4px 8px",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                >
                  {currentIndex + 1} / {images.length || 1}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="flex-column bg-dark text-white rounded-bottom-4 border-0">
              <h5 className="fw-bold">{image.title}</h5>
              {image.description && (
                <p
                  className="text-white-50 mt-2 mb-0"
                  style={{ fontSize: "0.9rem" }}
                >
                  {image.description}
                </p>
              )}
            </Modal.Footer>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
