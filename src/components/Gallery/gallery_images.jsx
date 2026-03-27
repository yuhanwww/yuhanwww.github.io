import React from 'react';
import './gallery.css';

const GalleryImages = ({ images }) => {
  return (
    <div className="gallery-masonry">
      {images.map(({ src, name }, index) => (
        <div className="gallery-masonry__item" key={index}>
          <img className="gallery-masonry__media" src={src} alt={name} />
        </div>
      ))}
    </div>
  );
};

export default GalleryImages;