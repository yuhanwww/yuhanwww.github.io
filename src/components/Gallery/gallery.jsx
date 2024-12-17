// import React,{useRef, useState, useEffect} from 'react';
import GalleryImages from './gallery_images';
import './gallery.css';

import DataCrafts from './data_crafts';
import DataCrochets from './data_crochets';
import DataDigitals from './data_digitals';
import DataFineArts from './data_fine_arts';
import DataPhotos from './data_photos';


const Gallery = () => {
  return (
    <div className="gallery section">
      <div className="container">
        <p className="gallery_page-title">Fine Art</p>
        <GalleryImages images={DataFineArts} speed={40000} />

        <p className="gallery_page-title">Digital Works</p>
        <GalleryImages images={DataDigitals} speed={40000} />

        <p className="gallery_page-title">Crafts</p>
        <GalleryImages images={DataCrafts} speed={40000} />

        <p className="gallery_page-title">Crochet Collection</p>
        <GalleryImages images={DataCrochets} speed={40000} />

        <p className="gallery_page-title">Photos</p>
        <GalleryImages images={DataPhotos} speed={40000} />
      </div>
      
    </div>
  )
}

export default Gallery;
  
