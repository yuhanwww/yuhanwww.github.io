import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import bm1_front from '../../../assets/artworks/boymother/bm1_front.jpg';
import bm1_top from '../../../assets/artworks/boymother/bm1_top.jpg';
import bm2_back from '../../../assets/artworks/boymother/bm2_back.JPG';
import bm2_boy_front from '../../../assets/artworks/boymother/bm2_boy_front.JPG';
import bm2_mother_talon from '../../../assets/artworks/boymother/bm2_mother_claw.JPG';
import bm2_mother_top from '../../../assets/artworks/boymother/bm2_mother_top.JPG';
import bm2_front from '../../../assets/artworks/boymother/bm2_front.JPG';
import bm2_side from '../../../assets/artworks/boymother/bm2_side.JPG';
import boymother1 from '../../../assets/artworks/boymother/boymother1.JPG';
import boymother2 from '../../../assets/artworks/boymother/boymother2.JPG';

const BoyMother = () => {

  const boy_mother_images = [
    { src: bm2_mother_talon, alt: "Mother's Talon", description: "Mother's Talon" },
    { src: bm2_front, alt: "Boy Running from His Mother's Talon", description: "Boy Running from His Mother's Talon" },
    { src: bm2_side, alt: "Boy Running from His Mother's Talon Right side view", description: "Boy Running from His Mother's Talon side view" },
    { src: bm2_back, alt: "Back view", description: "Boy Running from His Mother's Talon back view" },
    { src: bm2_mother_top, alt: "Mother's Talon Top View", description: "Mother's Talon Top View" },
    { src: bm2_boy_front, alt: "Boy running with painful frowns", description: "Boy running with painful frowns" },
    { src: boymother2, alt: "Boy running with painful frowns Process Collage", description: "Boy Running from His Mother's Talon Process Snippets" },
    { src: bm1_front, alt: "Boy Running from Mother version 1", description: "Boy Running from Mother Version 1" },
    { src: bm1_top, alt: "Boy Running from Mother version 1 Top View", description: "Boy Running from Mother Version 1 Top View" },
    { src: boymother1, alt: "Boy Running from Mother version 1 detail collage", description: "Boy Running from Mother Version 1 Detail Snippets" },
  ];

  return (
    <section className="artwork_page section">
    <h2 className="section_title artwork_page-header">Run from Mother's Talon</h2>
    <span className="section_subtitle artwork_page-header">A clay figurine work reflecting on suicide among adolescents</span>
    
    {/* Image Gallery */}
    <div className="artwork_page-gallery">
      <ArtworkSlider
        images={boy_mother_images}
      />
    </div>
    <br/>
    
    <span className="artwork_page-content">
    
      <p className="artwork_page-description">
        On Apr 22nd, 2019, a boy got out his mother's car on Shanghai PuDong Bridge and jumped off the bridge. His mother was chasing him from behind, but didn't stop the tragedy.
        Many potential causes were reported, and among them the most popular and widely accepted one was due to stress from his mother.
      </p>
      <p className="artwork_page-description">
        In China, adolescents widely suffer from high stress caused by coursework or family pressure. 
        Such devastating news happen a lot. Therefore, I used clay figurine to recreate the scene to call for attnetion to this serious social phenonmenon. 
      </p>
      <img src={bm2_side} alt="Boy Running from His Mother's Talon" className="artwork_page-image" />
      <p className="artwork_page-description">
        <br/>I drew inspiration from <i>the Creation of Adam</i> from the Sistine Chapel to emphasize the hand interaction between the boy and the mother.
        By exaggerating the mother's hand to a talon, I want to emphasize how parents put strong will on their children to become successful. 
      </p>
      <img src={bm2_mother_talon} alt="Mother's Talon zoom view" className="artwork_page-image" />
      <br/>
      <hr className="artwork_page-line" />
      <br/>
      <p className="artwork_page-description">
        Before this version, I've created a simple one where the road between the mother and the son was broken.
        The earlier version focused more on presenting how the mother was departing from her child.
        <img src={bm1_front} alt="Boy Running from Mother version 1" className="artwork_page-image" />
      </p>

    </span>
  </section>
    
  )
}

export default BoyMother;