import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Modal from "./Modal";
import Button from "./Button";
import request from "../Api";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImageUrl, setLargeImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);

  useEffect(() => {
    const fetchImages = () => {
      setIsLoading(true);
      request({ query, page })
        .then((response) => {
          setImages((prevImages) => [...prevImages, ...response.data.hits]);
          setCanLoadMore(response.data.hits.length === 12);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    if (query !== "" || page !== 1) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setCanLoadMore(true);
    setIsLoading(true);
  };

  const openModal = (largeImageUrl) => {
    setLargeImageUrl(largeImageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {showModal && (
        <Modal largeImageUrl={largeImageUrl} onClose={closeModal} />
      )}
      {images.length >= 12 && !isLoading && canLoadMore && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;