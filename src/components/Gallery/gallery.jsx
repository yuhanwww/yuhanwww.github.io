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
    <div className="section gallery">
        <GalleryImages images={DataCrafts} speed={20000} />
        <GalleryImages images={DataCrochets} speed={20000} />
        <GalleryImages images={DataDigitals} speed={20000} />
        <GalleryImages images={DataFineArts} speed={20000} />
        <GalleryImages images={DataPhotos} speed={20000} />
    </div>
  )
}

export default Gallery;
  
