import React, { useState } from "react";
import { image, image1, image2 } from "../assets";
import CardComponent from "../components/CardComponent";
import Modal from "react-modal";

const GalleryPage = () => {
  const images = [image, image1, image2, image, image1, image2];
  const arrImages = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index:any) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(0);
  };

  const navigateImage = (direction:any) => {
    if (direction === "previous") {
      const newIndex = (selectedImageIndex - 1 + images.length) % images.length;
      setSelectedImageIndex(newIndex);
    } else if (direction === "next") {
      const newIndex = (selectedImageIndex + 1) % images.length;
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="flex flex-col">
      <h5 className="text-[28px] font-[600] mx-[5%] my-[3%] text-[#333] cursor-pointer">Gallery</h5>
      <div className="grid grid-cols-3 gap-9 mx-[5%]">
        {images.map((imageUrl, index) => (
          <div key={index}>
            <CardComponent
              HeadlineText={`${arrImages[index]} - ${arrImages[index + 1]}`}
              imageUrl={imageUrl}
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 11 },
        }}
      >
        <div className="flex flex-col gap-3">
          <div className="w-[90%] h-[70%] items-center ml-[5%]">
            <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} width="100%" height="70%" />
          </div>
          <div className="flex flex-row justify-evenly">
            <button className="w-[10%] rounded-md border bg-[#377ddf] py-1 px-2 text-[#fff] hover:bg-[#377ddfaa]" onClick={() => navigateImage("previous")}>Previous</button>
            <button className="w-[10%] rounded-md border bg-[#377ddf] py-1 px-2 text-[#fff] hover:bg-[#377ddfaa]" onClick={() => navigateImage("next")}>Next</button>
            <button className="w-[10%] rounded-md border bg-[#e13a3a] py-1 px-2 text-[#fff] hover:bg-[#e13a3aa9]" onClick={closeModal}>Exit</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryPage;
