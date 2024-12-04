import React, { useState } from "react";

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      {/* Image Grid */}
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="grid-image"
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
