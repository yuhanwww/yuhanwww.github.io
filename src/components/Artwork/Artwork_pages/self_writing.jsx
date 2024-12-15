import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import random_writing_1 from '../../../assets/artworks/self_writing/random_writing_1.JPG';
import random_writing_2 from '../../../assets/artworks/self_writing/random_writing_2.JPG';
import self_writing_zoom from '../../../assets/artworks/self_writing/self_writing_zoom.png';
import self_collection from '../../../assets/artworks/self_writing/self_collection.JPG';
import self_writing_whole from '../../../assets/artworks/self_writing/self_writing_whole.JPG';
import line_art_cropped from '../../../assets/artworks/self_writing/line_art_cropped.jpeg';
import exploration from '../../../assets/artworks/self_writing/exploration.JPG';

const SelfWriting = () => {

  const self_writing_images = [
    { src: self_writing_whole, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: self_writing_zoom, alt: "Self Writing Zoom", description: "Self Writing in its whole form" },
    { src: self_collection, alt: "From top to bottom, left to right, Self Portrait, Self Writing, Flower Piece, Self Portrait", description: "A collection of drawings that represent my  identity" },
    { src: exploration, alt: "Exploratory play with character shapes", description: "Exploratory writings of characters and play with shapes" },
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

        <p className="artwork_page-description">
          As a calligraphy artist, I have always believed in an old saying in China: <i>One's writing resembles (represents) oneself.</i>
          <br/><br/>I have developed my unique handwriting style, and I love when people compliment my writing. 
          Chinese calligraphy, different from alphabets, are logographs, which offered a concrete abstraction / icons to play with when writing.
          I have extended strokes from writing certain words and see how the lines interact with each other, which in some way represent the words' meanings, as shown below.
        </p>
        <img src={line_art_cropped} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image" />
        <br/><br/>
        <p className="artwork_page-description">
          Resembling this idea, here, I played with the shape of Chinese characters by filling them with English. So how does it work?
        </p>
        <hr className="artwork_page-line" />
        <p className="artwork_page-description">
        <div className="textIndent"><br/> 1. Listen to songs by <i>Chen Li 陈粒</i>-- a singer that really speaks to me.</div>
        <div className="textIndent"> 2. When listening to her song, randomly pick a word form the current line and write them down in calligraphy in a formal, traditional way.</div>
        <div className="textIndent"> 3. Do so until the whole page is filled. </div>
        <div className="textIndent"> 4. *Interesting Part* Cover the calligraphy with a semi-transparent paper, read the word, make meaning of it, and write what I think about in English. </div>
        <div className="textIndent"> 5. Continue writing in English, cover the whole Chinese character by filling in small words in English.</div>
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork_page-description">
          Multiple layers of personal meaning and reflection were thus presented: my handwriting in Chinese & English; words from songs that I echo with; 
          my thoughts on the words; writing, rewriting, and overwriting my thoughts.
        </p>
        <p className="artwork_page-description">
          It's a beautiful piece, as the Chinese orange characters are like drop down shadows.
        </p>
        <p className="artwork_page-description">
          I love the process of writing and freely manipulating the strokes in different shapes for aesthetic appearances. Writing is also very de-stressing. 
          I guess part of the reason why I chose Art History + CS is that I really can't give up the sentimental part of myself, doing things with hands, appreciating things.
        </p>


      </span>
    </section>
    
  );
};

export default SelfWriting;
