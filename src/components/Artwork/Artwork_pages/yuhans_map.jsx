import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

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

  const yuhans_map_images = [
    { src: yuhan_map, alt: "Yuhan's Map 2023", description: "Yuhan's Map 2023, names called on paths between on places of importance." },
    { src: places_names, alt: "Places with Names", description: "Map with names that I've been called in those places." },
    { src: places_routes, alt: "Places with Routes", description: "Map with paths I took in-between those places." },
    { src: places, alt: "Places", description: "Map with places, sizes & colors were based on how well I know the place and sense of belongingness." },
    { src: names, alt: "Names", description: "Names I've been called in blocks." },
    { src: routes, alt: "Routes", description: "Routes in-between. An aesthetic choice of how to draw the lines was involved." },
    { src: routes_names, alt: "Routes with Names", description: "Names overlayed with places." },
    { src: names_overlayed, alt:"Name Overlayed", description: "Names overlayed. May it showed my accumulated identity." },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">Yuhan's Map 2023</h2>
      <span className="section_subtitle artwork_page-header">A Map reflecting life journey and identity</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={yuhans_map_images}
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
        <img src={inspiration} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image" />
        <br/><br/>
        <p className="artwork_page-description">
          After the course, I was fortunate to participate in the <i>Global FLEX Program</i> to visit Brazil and appreciate many artworks we've learned in person, where I received a community / family. See <a href="/">here</a> for another work reflection on the trip.
        </p>


      </span>
    </section>
    
  );
};

export default YuhansMap;
