import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import random_writing_1 from '../../../assets/artworks/self_writing/random_writing_1.JPG';
import random_writing_2 from '../../../assets/artworks/self_writing/random_writing_2.JPG';
import self_writing_zoom from '../../../assets/artworks/self_writing/self_writing_zoom.png';
import self_collection from '../../../assets/artworks/self_writing/self_collection.JPG';
import self_writing_whole from '../../../assets/artworks/self_writing/self_writing_whole.JPG';

const SelfWriting = () => {

  const self_writing_images = [
    { src: self_writing_whole, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: self_writing_zoom, alt: "Self Writing Zoom", description: "Self Writing in its whole form" },
    { src: self_collection, alt: "From top to bottom, left to right, Self Portrait, Self Writing, Flower Piece, Self Portrait", description: "A collection of drawings that represent my  identity" },
    { src: random_writing_1, alt: "Random Writing Piece 1", description: "Random Writing with corrections" },
    { src: random_writing_2, alt: "Random Writing Piece 2", description: "Random writing Piece 2" },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">Self Writing</h2>
      <span className="section_subtitle artwork_page-header">Write, rewrite, overwrite</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={self_writing_images}
        />
      </div>
      <br/>
      
      <span className="artwork_page-content">
      
        <p className="artwork_page-description quote">
          You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.
        </p>
        <p className="artwork_page-description quote" style={{textAlign:"right"}}>--Maya Angelou</p>

        <p className="artwork_page-description">In <i>Yuhan's Map 2023</i>, I mapped out the places I've been to, names I've been called, and my paths in-between.
          Names embody who I was with, what stage of life I was in, and how I remembered people's impression of me. The size of the place was drawn arbitrarily based on how well I know the place, with differnt gradiented colors reflecing on how much I felt belonged to that place.
        </p>
        <p className="artwork_page-description">
          Layering them with the paths I've taken in-between, it displayed who I was, how I became me at this moment, and what I have felt and took with me along the way.
          <br/><br/>
          Would I make another version for 2024? I would love to -- especially after given the name <i>Bruna</i> in Brasil ♥
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork_page-description">
          This work was the final project for my <i>Brazilian Art Inside & Out</i> course in Fall 2023. I took inspiration from 2 Brazilian female artists: the interconnectedness of <b>Lina Bo Bardi</b>'s SESC Pompéia Factory and <b>Anna Bella Beiger</b>'s questioning, blurring, and redrawing of maps. 
        </p>
        {/* <img src={inspiration} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image" /> */}
        <br/><br/>
        <p className="artwork_page-description">
          After the course, I was fortunate to participate in the <i>Global FLEX Program</i> to visit Brazil and appreciate many artworks we've learned in person, where I received a community / family. See <a href="/">here</a> for another work reflection on the trip.
        </p>


      </span>
    </section>
    
  );
};

export default SelfWriting;
