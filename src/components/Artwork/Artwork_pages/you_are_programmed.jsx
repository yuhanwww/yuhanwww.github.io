import React from 'react';

import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import example from '../../../assets/artworks/you_are_programmed/example.PNG';
import final from '../../../assets/artworks/you_are_programmed/final.PNG';
import r1 from '../../../assets/artworks/you_are_programmed/r1.PNG';
import r2 from '../../../assets/artworks/you_are_programmed/r2.PNG';
import programmed from '../../../assets/artworks/you_are_programmed/programmed.PNG';
import rule from '../../../assets/artworks/you_are_programmed/rule.PNG';
import start from '../../../assets/artworks/you_are_programmed/start.PNG';

const YouAreProgrammed = () => {
  
  const you_are_programmed_images = [
    { src: programmed, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: r1, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: r2, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: example, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: rule, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: start, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
    { src: final, alt: "Self Writing Whole", description: "Self Writing in its whole form" },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">You Are Programmed.</h2>
      <span className="section_subtitle artwork_page-header">You are programmed. Fortunately? Unfortunately?</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={you_are_programmed_images}
        />
      </div>
      <br/>
      
      <span className="artwork_page-content">
        {/* <p className="artwork_page-description">
          As a calligraphy artist, I have always believed in an old saying in China: <i>One's writing resembles (represents) oneself.</i>
          <br/><br/>I have developed my unique handwriting style, and I love when people compliment my writing. 
          Chinese calligraphy, different from alphabets, are logographs, which offered a concrete abstraction / icons to play with when writing.
          I have extended strokes from writing certain words and see how the lines interact with each other, which in some way represent the words' meanings, as shown below.
        </p>
        <img src={example} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image" />
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
        </p> */}


      </span>
    </section>

  )
}

export default YouAreProgrammed;