import React, { useState } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";

const ImageGallery = ({images}) => {
 
 const[isModalOpen, setIsModalOpen] = useState(false);
 const[selectedImageUrl, setSelectedImageUrl] = useState("");

 const openModal = (imageUrl) => {
  setSelectedImageUrl(imageUrl);
  setIsModalOpen(true);
};

 const closeModal = () => {
  setSelectedImageUrl("");
  setIsModalOpen(false);
};

    return (
      <ul className="gallery">
       {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          imageUrl={image.webformatURL}
          onClick={() => openModal(image.largeImageURL)}
        />
      ))}
        {isModalOpen && (
          <Modal largeImageUrl={selectedImageUrl} onClose={closeModal} />
        )}
      </ul>
    );
  };

export default ImageGallery;