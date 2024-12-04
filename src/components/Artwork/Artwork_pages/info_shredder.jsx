import React from 'react';

import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import is_name from '../../../assets/artworks/info_shredder/is_name.png';
import setup from '../../../assets/artworks/info_shredder/setup.png';
import sideview from '../../../assets/artworks/info_shredder/sideview.png';
import working from '../../../assets/artworks/info_shredder/working.png';
import info_ideal from '../../../assets/artworks/info_shredder/info_ideal.jpg';

const InfoShredder = () => {
  const info_shredder_images = [
    { src: working, alt: "Info Shredder in use", description: "Information Shredder in Use." },
    { src: is_name, alt: "Info Shredder Name", description: "3D printed Information Shredder Name" },
    { src: setup, alt: "Info Shredder Set Up", description: "Set up Information Shredder" },
    { src: sideview, alt: "Info Shredder Side View", description: "Information Shredder Side View" },
    { src: info_ideal, alt: "Info Shredder when built", description: "Info Shredder in the ideal world" },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">Information Shredder</h2>
      <span className="section_subtitle artwork_page-header">Destroy your information here!</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={info_shredder_images}
        />
      </div>
      <br/>
      
      <span className="artwork_page-content">
        <p className="artwork_page-description">
          In the <i>Interactive Digital Multimedia</i> course, I created 3 artworks exploring how technology shapes human behavior, perception, and self-concept.  
          <br/><br/>
          <i>Information Shredder</i> is the last piece. Our prompt was <i>Information Destruction at your door</i>, which led my desire to create an installation that destroys information. 
          A piece created the finals season, when I felt overloaded with too much information, all I want to do is to destroy every piece of paper, every prompt for assignment, every job description, everything that I read without comprehension.
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/cdRd9MeB_VY" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture; 
          web-share" allowfullscreen></iframe>
        <br/><br/>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork-description">
          This piece contains multiple media -- Breadboard, colorful wires, motors, clamps, black plastic covering, wood, 3d printed name, and finally, user's information. 
          <br/><br/>The touching to initiate practice, the shredding effect, the sound effect -- do you believe your information is destroyed by the information shredder? 
        </p>

      </span>
    </section>

  )
}

export default InfoShredder;