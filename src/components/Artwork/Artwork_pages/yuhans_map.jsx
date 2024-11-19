import React from 'react';
import './artwork_page.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={style}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--title-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "pointer" }}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={style}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--title-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "pointer" }}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
    );
  }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const images = [
    { src: yuhan_map, alt: "Yuhan's Map 2023" },
    { src: places_names, alt: "Places with Names" },
    { src: places_routes, alt: "Places with Routes" },
    { src: places, alt: "Places" },
    { src: names, alt: "Names" },
    { src: routes, alt: "Routes" },
    { src: routes_names, alt: "Routes with Names" },
    { src: names_overlayed, alt:"Name Overlayed" },
  ];

  return (
    <section className="project section">
      <h2 className="section_title project-header">Yuhan's Map 2023</h2>
      <span className="section_subtitle project-header">A Map reflecting life journey and identity</span>
      
      {/* Image Gallery */}
      <div className="project-gallery">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="project-image" />
            </div>
          ))}
        </Slider>
      </div>
      <br/>
      
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
