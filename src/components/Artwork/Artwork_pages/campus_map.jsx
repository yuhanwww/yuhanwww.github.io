import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import campus_map from '../../../assets/artworks/campus_map/campus_map.png';
import explanation from '../../../assets/artworks/campus_map/explanation.JPG';
import initial from '../../../assets/artworks/campus_map/initial.png';
import start from '../../../assets/artworks/campus_map/start.JPG';
import create_1 from '../../../assets/artworks/campus_map/create_1.JPG';
import create_2 from '../../../assets/artworks/campus_map/create_2.png';
import create_3 from '../../../assets/artworks/campus_map/create_3.png';
import final from '../../../assets/artworks/campus_map/final.png';
import info_2 from '../../../assets/artworks/campus_map/info_2.png';
import papunya_tula from '../../../assets/artworks/campus_map/papunya_tula.jpg';

const CampusMap = () => {

  const campus_map_images = [
    { src: campus_map, alt: "Campus Map", description: "Campus Map with places that students drew collectively from memory with given visual language" },
    { src: explanation, alt: "Me explaining my inspiration after the work", description: "Me explaining my inspiration after the work" },
    { src: start, alt: "Rule Explaining", description: "Explaining rules to students" },
    { src: info_2, alt: "Visual Code", description: "Visual Code for the map" },
    { src: create_1, alt: "Students start planning", description: "Students start navigating places on campus" },
    { src: create_2, alt: "Drawing Phase", description: "Students draw different parts of the campus collectively" },
    { src: final, alt: "Final Map", description: "Map after 10 minutes drawing" },
    { src: initial, alt: "Initial setup with Campus Center, Chapin Lawn, and nearby roads", description: "Initial setup with Campus Center, Chapin Lawn, and road drawn" },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">Campus Mental Map</h2>
      <span className="section_subtitle artwork_page-header">A Collective Mental Map created by ARS 172 Class Spring 2022</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={campus_map_images}
        />
      </div>
      <br/>
      
      <span className="artwork_page-content">
      
        <p className="artwork_page-description">
          For the final work of the <i>Intro to Studio Art Foundation</i> course I took in Spring 2022, wew ere asked to create something that engage the audience.
        </p>

        <p className="artwork_page-description">
          During that period, I was also taking the <i>Modren, Postermodern, Contemporary</i> art history course, where I learned about the <a target="_blank" rel="noopener noreferrer" href="https://papunyatula.com.au/">Papunya Tula Artists</a>.
        </p>
        <img src={papunya_tula} alt="Papunya Tula Art" className="artwork_page-image" />
        <p className="artwork_page-description">
          <br/>Their work use their own cultural visual codes to represent their culture, landscape, ideology, cosmics, etc.
          <br/><br/>
          The most fascinating part of thier work, however, is the process of their creation. 
          They draw collectively without talking. They might be singing, or being quiet. However, because of their shared community knowledge, they can communicate / narrate collectively through drawing. 
          This inspired my final work to invite everyone recreate a map of the campus.
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork_page-description">
          <b>Why Map of the Campus?</b>
          <br/><br/>I chose map as the subject because this is the most common theme I can think of for everyone to know VERY WELL. 
          Besides, as places on maps are often coded in some icons, I created a visual code mimicking Papunya Tula art for people to use.
          <img src={info_2} alt="Visual Code" className="artwork_page-image" />
        </p>
        <p className="artwork_page-description">
          <br/><b>How?</b>
          <br/><br/>
          I drew the campus center, a lawn nearby, and some roads nearby as the starting point. 
          Before people actually started to draw, they could chat for a minute about their understanding.
          When they picked up the crayon, they could no longer talk, but observe others and draw collectively a <b>mental map</b> of the campus.
          <img src={create_3} alt="Students drawing" className="artwork_page-image" />
        </p>
        <p className="artwork_page-description">
          <br/><b>What's the result?</b>
          <br/><br/>
          It worked out perfectly! 
          <br/><br/>
          My peers mangaed to draw the central campus with around 15 academic buildings and residential houses.
          They are pretty accurate on the relative geographical relationship, and scale! Who draws more on which part of the campus also relates to their everyday routes.
          <br/><br/>
          A interesting finding from this project is that the administrative buildings completely disappeared in our map. 
          Is it important? What does it mean to the students? How would it be different if another group of people draw their shared mental map?
          <img src={campus_map} alt="Campus Map" className="artwork_page-image" />
        </p>


      </span>
    </section>
  )
}

export default CampusMap;