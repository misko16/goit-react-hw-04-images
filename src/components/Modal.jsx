import React, { useEffect } from "react";

const Modal = ({onClose, largeImageUrl}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {window.addEventListener("keydown", handleKeyDown)};
  }, [onClose]);

 const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

    return (
      <div className="overlay" onClick={handleOverlayClick}>
        <div className="modal">
          <img src={largeImageUrl} alt="" />
        </div>
      </div>
    );
  }

export default Modal;