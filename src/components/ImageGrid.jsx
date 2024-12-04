import React, { useState } from "react";

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  const stopPropagation = (e) => {
    // Prevent the modal from closing when the image is clicked
    e.stopPropagation();
  };

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
          {/*Modal currently not working, using css as a work around for somewhat desired behaviour, to be fixed*/}
      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="Enlarged"
            onClick={stopPropagation} // Prevent close when image is clicked
          />
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
