import React from 'react';
import './gallery.css';

const ImageSection = ({ images, speed }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="gallery-images" style={{ animationDuration: `${speed}ms` }}>
      {duplicatedImages.map(({ src, name }, index) => (
        <div className="gallery-image" key={index}>
          <img className="gallery-image_media" src={src} alt={name} />
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
