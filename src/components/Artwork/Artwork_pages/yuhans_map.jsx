import React from 'react';
import './artwork_page.css';
import ImageGallery from 'react-image-gallery';

import names_overlayed from '../../../assets/artworks/YuhansMap/names_overlayed.png';
import names from '../../../assets/artworks/YuhansMap/names.png';
import places from '../../../assets/artworks/YuhansMap/places.png';
import places_names from '../../../assets/artworks/YuhansMap/places_names.png';
import places_routes from '../../../assets/artworks/YuhansMap/places_routes.png';
import routes from '../../../assets/artworks/YuhansMap/routes.png';
import routes_names from '../../../assets/artworks/YuhansMap/routes_names.png';
import yuhan_map from '../../../assets/artworks/YuhansMap/yuhan_map.png';
import inspiration from '../../../assets/artworks/YuhansMap/inspiration.png';

const YuhansMap = () => {

  const images = [
    {
      original: names_overlayed,
      thumbnail: names_overlayed,
    },
    {
      original: names,
      thumbnail: names,
    },
    {
      original: places,
      thumbnail: places,
    },
    {
      original: places_names,
      thumbnail: places_names,
    },
    {
      original: routes,
      thumbnail: routes,
    },
    {
      original: yuhan_map,
      thumbnail: yuhan_map,
    },
  
  ];

  return (
    <section className="project section">
      <h2 className="section_title project-header">Yuhan's Map 2023</h2>
      <span className="section_subtitle project-header">A Map reflecting life journey and identity</span>
      
      {/* Image Gallery */}
      <div className="project_title-image"><ImageGallery items={images} /></div>

      <span className="project-content">
      
        <p className="project-description quote">
        You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.
        </p>
        <p className="project-description quote" style={{textAlign:"right"}}>--Maya Angelou</p>

        <p className="project-description">In <i>Yuhan's Map 2023</i>, I mapped out the places I've been to, names I've been called, and my paths in-between.
          Names embody who I was with, what stage of life I was in, and how I remembered people's impression of me. The size of the place was drawn arbitrarily based on how well I know the place, with differnt gradiented colors reflecing on how much I felt belonged to that place.
        </p>
        <p className="project-description">
          Layering them with the paths I've taken in-between, it displayed who I was, how I became me at this moment, and what I have felt and took with me along the way.
          <br/><br/>
          Would I make another version for 2024? I would love to -- especially after given the name <i>Bruna</i> in Brasil ♥
        </p>
        <hr className="project-line" />
        <br/>
        <p className="project-description">
          This work was the final project for my <i>Brazilian Art Inside & Out</i> course in Fall 2023. I took inspiration from 2 Brazilian female artists: the interconnectedness of <b>Lina Bo Bardi</b>'s SESC Pompéia Factory and <b>Anna Bella Beiger</b>'s questioning, blurring, and redrawing of maps. 
        </p>
        <img src={inspiration} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="project-image" />
        <br/><br/>
        <p className="project-description">
          After the course, I was fortunate to participate in the <i>Global FLEX Program</i> to visit Brazil and appreciate many artworks we've learned in person, where I received a community / family. See <a href="/">here</a> for another work reflection on the trip.
        </p>


      </span>
    </section>
    
  );
};

export default YuhansMap;
