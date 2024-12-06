import React from 'react';

import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import example from '../../../assets/artworks/you_are_programmed/example.PNG';
import final from '../../../assets/artworks/you_are_programmed/final.PNG';
import r1 from '../../../assets/artworks/you_are_programmed/r1.PNG';
import r2 from '../../../assets/artworks/you_are_programmed/r2.PNG';
import r3 from '../../../assets/artworks/you_are_programmed/r3.png';
import programmed from '../../../assets/artworks/you_are_programmed/programmed.PNG';
import rule from '../../../assets/artworks/you_are_programmed/rule.PNG';
import reveal from '../../../assets/artworks/you_are_programmed/reveal.PNG';
import yrp_qr from '../../../assets/artworks/you_are_programmed/yrp_qr_code.png';

import r1_gif from '../../../assets/artworks/you_are_programmed/round1.gif';
import r2_gif from '../../../assets/artworks/you_are_programmed/round2.gif';
import r3_gif from '../../../assets/artworks/you_are_programmed/round3.gif';

const YouAreProgrammed = () => {
  
  const you_are_programmed_images = [
    { src: programmed, alt: "You are programmed interface", description: "You are programmed page, triggered by users' predicted action." },
    { src: rule, alt: "Rule", description: "Rule of the game: users need to put 5 fingers on the screen under certain instructions" },
    { src: example, alt: "Rule page for users to put 5 fingers on the screen", description: "Accomodation page for users to try putting 5 fingers on the screen" },
    { src: r1, alt: "Screen going dark", description: "Round 1 with screen going dark " },
    { src: r2, alt: "Tilted text", description: "Round 2 with tilted text" },
    { src: r3, alt: "Small shapes & texts", description: "Round 3 with small text " },
    { src: reveal, alt: "Reveal phase", description: "Reveal things one do to 'be programmed' " },
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
      

      {/* =========== Intro ============*/}

      <span className="artwork_page-content">
        <p className="artwork_page-description">
          In the <i>Interactive Digital Multimedia</i> course, I created 3 artworks exploring how technology shapes human behavior, perception, and self-concept.  
          <br/><br/>
          <i>The Game</i> is the 2nd piece, which leads the users to notice unconscious habits people have when interacting with phone.
        </p>
        <div class="row">
          <div class="artwork-column-3">
            <img src={r1_gif} alt="Round 1 GIF Animation" className="artwork_page-gif"/>
          </div>
          <div class="artwork-column-3">
            <img src={r2_gif} alt="Round 2 GIF Animation" className="artwork_page-gif"/>
          </div>
          <div class="artwork-column-3">
            <img src={r3_gif} alt="Round 3 GIF Animation" className="artwork_page-gif"/>
          </div>
        </div>
        <br/>
        <hr className="artwork_page-line" />

        {/* =========== QR Code ============*/}
        <br/>
        <div class="row">
          <div class="column">
            <img src={yrp_qr} alt="QR code for You Are Programmed" className="artwork_page-image-qr"/>
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


        {/* =========== Explanation ============*/}
        <br/>
        <p className="artwork_page-description">
          In this work, I expected users to take certain actions in reaction to the changes on the screen. 
          This seems natural and reasonable, but thinking about it abstractly, it's interesting that one would click on a block that is going dark just to make it bright again. 
          Because I said 'try not to be programmed' at the beginning, audience will also be super attentive / conscious of how they interact with their phones. 
          <br/><br/>
          Phones, like many other technology, have shaped how people interact and in some way controlled one's behavior. 
          By making the audeince felt being tricked, I hope we could just <b>notice the actions we took so naturally</b> with digital devices. 


        </p>


      </span>
    </section>

  )
}

export default YouAreProgrammed;