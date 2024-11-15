import React from 'react';
import Artworks from './artworks';
import './artwork.css';

const Artwork = () => {
  return (
    <section className="artwork section" id='artwork'>
        <h2 className="section_title">Artwork</h2>
        <span className="section_subtitle">A selection of digital, Multi-media, and paper-based artworks.</span>
        <div className="artwork container">
          <Artworks />
        </div>
    </section>
  )
}

export default Artwork;