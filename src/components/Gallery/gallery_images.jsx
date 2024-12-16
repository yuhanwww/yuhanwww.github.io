import React from 'react';
import './gallery.css'

const ImageSection = ({ images, speed }) => {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className="gallery-images" style={imagesStyle}>
      {images.map(({ src, name }, index) => (
        <div className="gallery-image" key={index}>
          <img src={src} alt={name} />
        </div>
      ))}
    </div>
  );
};

const GalleryImages = ({ images, speed }) => {
  return (
    <div className="gallery-wrapper">
      <div className="wrapper">
        <ImageSection images={images} speed={speed} />
      </div>
    </div>
  );
};

export default GalleryImages;