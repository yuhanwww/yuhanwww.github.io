import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import interaction from '../../../assets/artworks/flip_brasil/interaction.JPG';
import flip_brasil from '../../../assets/artworks/flip_brasil/flip_brasil.png';
import fb_initial from '../../../assets/artworks/flip_brasil/fb_initial.png';
import fb_start from '../../../assets/artworks/flip_brasil/fb_start.png';
import fb_during from '../../../assets/artworks/flip_brasil/fb_during.png';
import fb_almost from '../../../assets/artworks/flip_brasil/fb_almost.png';
import fb_flipped from '../../../assets/artworks/flip_brasil/fb_flipped.png';

const FlipBrasil = () => {
  const flip_brasil_images = [
    { src: flip_brasil, alt: "Flip Brasil Projection", description: "Flip Brasil projected on the wall" },
    { src: interaction, alt: "Flip Brasil Installation", description: "Using hand to flip the image" },
    { src: fb_initial, alt: "Flip Brasil Initial Display", description: "Initial Display with Brazil vital scenes" },
    { src: fb_start, alt: "One image flipped, drop shadow of 'Brasil' appears", description: "As images are flipped showing the other side of Brazil, drop shadow of 'Brasil' appears" },
    { src: fb_during, alt: "Half images flipped, original 'Brazil' fades", description: "More images are flipped, and 'Brasil' start to be more apparent" },
    { src: fb_almost, alt: "Most images flipped, 'Brasil' starts to take over", description: "Most images are flipped, and we see 'Brasil' more clearly" },
    { src: fb_flipped, alt:"All images flipped, we only see the upside down 'Brasil'", description: "All images are flipped, and the upside down 'Brasil' takes over" },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">Flip Brasil</h2>
      <span className="section_subtitle artwork_page-header">Flip Brazil to Brasil, what's being revealed?</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={flip_brasil_images}
        />
      </div>
      <br/>
      
      <span className="artwork_page-content">
        <p className="artwork_page-description">
          This work is meant to be a projected installaion. 
          Audience would "touch" the images and "flip" them, which would reveal a different perspective you could view Brasil.
          As more photos are flipped to the hidden side, the original text turns dark and a reflection of the text as “Brasil” appears. 
          <br/><br/>
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork_page-description" style={{textAlign:"center"}}>
        <a target="_blank" rel="noopener noreferrer" href="https://editor.p5js.org/ywang70/full/E6AS9n1kw">Link to Artwork (hand control version) </a>
        <br/><a target="_blank" rel="noopener noreferrer" href="https://editor.p5js.org/ywang70/full/H76su7-Zv">Link to Artwork (mouse control version) </a>
        </p>
        <p className="artwork_page-subdescription">
          To experience the artwork on your computer, you can open click the link and open it in a full window. Allow the website to use your camera, wait for a few seconds, and  have your palm facing the computer. 
          When you see a small white circle on the screen, it means that your hand is recognized, and then you can move your hand like a mouse onto different photos to turn the photos. 
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork_page-description">
          In May 2024, I participated in the <i>Global FLEX Brazil: Contemporary Arts Parks and Cultural Centers</i> program and had a 10 day visit to Brasil.
        </p>
        <img src={flip_brasil} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image" />
        <br/>
        <p className="artwork_page-description">
          When speaking of Brazil, most people might think about Rio de Janeiro, beach, soccer, barbecue, and more positive, sunny things. 
          I used to perceive Brazil the same way, but through artworks we learned in the class and my visit, I had a shallow taste of the deep, painful, complicated history Brazil embodies. 
          <br/><br/>
          Racial Equality, Poverty, Hunger, Mining Disasters, Recovery from Dictatorship... These are topics that fall on Brazilians everyday. 
          <br/><br/>
          But besides these heavy topics, active community building and genuine mutual care in the society also struck me.
          Brazilians are seeking heal collectively. Our group, 16 students, 2 faculty, and 2 local guides, also formed a close relationship that was unimaginable in the US.
          <br/><br/>
          Brasil has this magic power to bring people together, and it is through this way, (from my shallow understanding) the country moves toward a more caring, closely-connected society, recovering from past trauma. 
        </p>
        <hr className="artwork_page-line" />

      </span>
    </section>

  )
}

export default FlipBrasil;