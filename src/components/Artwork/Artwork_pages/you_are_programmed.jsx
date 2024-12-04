import React from 'react';

import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import example from '../../../assets/artworks/you_are_programmed/example.PNG';
import final from '../../../assets/artworks/you_are_programmed/final.PNG';
import r1 from '../../../assets/artworks/you_are_programmed/r1.PNG';
import r2 from '../../../assets/artworks/you_are_programmed/r2.PNG';
import programmed from '../../../assets/artworks/you_are_programmed/programmed.PNG';
import rule from '../../../assets/artworks/you_are_programmed/rule.PNG';
import yrp_qr from '../../../assets/artworks/you_are_programmed/yrp_qr_code.png';

const YouAreProgrammed = () => {
  
  const you_are_programmed_images = [
    { src: programmed, alt: "You are programmed interface", description: "You are programmed page, triggered by users' predicted action." },
    { src: rule, alt: "Rule", description: "Rule of the game: users need to put 5 fingers on the screen under certain instructions" },
    { src: example, alt: "Rule page for users to put 5 fingers on the screen", description: "Accomodation page for users to try putting 5 fingers on the screen" },
    { src: r1, alt: "Screen going dark", description: "Round 1, users need to put 5 fingers on the screen when they see a blue triangle. " },
    { src: r2, alt: "No action page", description: "Round 2, users need to put 5 fingers on the screen when they see the description coincides with the shape." },
    { src: final, alt: "Final phase", description: "Final page to maybe help ease users' paranoid about being programmed. " },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">You Are Programmed.</h2>
      <span className="section_subtitle artwork_page-header">You are programmed. Unfortunately? Fortunately?</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={you_are_programmed_images}
        />
      </div>
      <br/>
      
      <span className="artwork_page-content">
        <p className="artwork_page-description">
          In the <i>Interactive Digital Multimedia</i> course, I created 3 artworks exploring how technology shapes human behavior, perception, and self-concept.  
          <br/><br/>
          <i>The Game</i> is the 2nd piece, which leads the users to notice unconscious habits people have when interacting with phone.
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <div class="row">
          <div class="column">
            <img src={yrp_qr} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image-qr"/>
          </div>
          <div class="column">
            <p className="artwork_page-description">
              <a target="_blank" rel="noopener noreferrer" href="https://editor.p5js.org/ywang70/full/wJNTF-Hiw">
                Link to <i>You are programmed.</i> 
                <br/>(recommended experience on mobile device)
              </a>
            </p>
          </div>
        </div>
        <hr className="artwork_page-line" />
        {/* <img src={example} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image" />
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