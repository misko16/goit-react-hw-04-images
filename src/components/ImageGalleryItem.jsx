import React from "react";

const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={imageUrl} alt="" />
    </li>
  );
};

export default ImageGalleryItem;