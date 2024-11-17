import React from 'react';
import './artworks.css';

import flipBrasil from "../../assets/artworks/FlipBrasil/flipBrasil.png";
import infoShredder from "../../assets/artworks/InfoShredder/working.png";
import stupid_ml from "../../assets/artworks/StupidML/stupid_ml.png";
import theGame from "../../assets/artworks/TheGame/r3.PNG";
import yuhanMap from "../../assets/artworks/YuhansMap/yuhan_map.png";
import self_writing from "../../assets/artworks/self_writing/self_writing_zoom.png"
import nurse_shave_hair from '../../assets/artworks/nurse_shave_hair/nurseshavehair.png';
import mother_claw from "../../assets/artworks/boymother/mother_claw.JPG";
import campus_map from "../../assets/artworks/campus_map/campus_map.png";

const Artwork_Data = [
    {
        id: 8,
        image: flipBrasil,
        alt: "flipBrasil",
        title: "Flip Brasil",
        description: "An interactive installation based on 10 day experience of Brasil art and culture",
        link: "",
    },

    {
        id: 7,
        image: infoShredder,
        alt: "infoShredder interface",
        title: "Information Shredder",
        description: "A mixed-media installation that shreds information physically & ritually",
        link: "",
    },

    {
        id: 6,
        image: stupid_ml,
        alt: "Stupid Machine Learning Interface",
        title: "Stupid Machine Learning",
        description: "A digital program that asks users to train an AI by fixing a biased dataset",
        link: "",
    },

    {
        id: 5,
        image: theGame,
        alt: "The Game Interface",
        title: "You are Programmed.",
        description: "A phone-based program that reflects on how phone shapes one's actions",
        link: "",
    },

    {
        id: 4,
        image: yuhanMap,
        alt: "Yuhan's Map",
        title: "Yuhan's Map 2023",
        description:"A Map reflecting life journey and identity",
        link: "",
    },

    {
        id: 3,
        image: self_writing,
        alt: "A calligraphy piece where English is mapped on Chinese",
        title: "Self Writing",
        description:"A Map reflecting life journey and identity",
        link: "",
    },

    {
        id: 2,
        image: campus_map,
        alt: "Campus Map",
        title: "Collective Campus Map",
        description:"A Map created collectively inspired by Papunya Tula art",
        link: "",
    },

    {
        id: 1,
        image: mother_claw,
        alt: "Clay Figurine work of Boy running away from mother",
        title: "Run from Mother’s Talon",
        description:"A clay figurine work reflecting on suicide among adolescents",
        link: "",
    },

    {
        id: 0,
        image: nurse_shave_hair,
        alt: "Clay Figurine work of nurses being shaved hair on the left & a bald female doctor walking determinated on the right",
        title: "Nurses Have Hair",
        description:"A clay figurine work reflection on nurses shave hair incident during Covid-19",
        link: "",
    },
];


const Card = ({ image, alt, title, description, link }) => {

    return (
        <div className='artwork-card'>
            <a href={link} className="artwork-card-content-link">
                <img className="artwork-card-thumbnail" src={image} alt={alt} />
                <div className="artwork-card-overlay">
                    <div className="artwork-card-text">
                        <h4 className='artwork-card-title'>{title}</h4>
                        {/* <p className='card-description'>{description}</p> */}
                    </div>
                </div>
            </a>
        </div>
    )
}

const Artworks = () => {
    return (
        <div className='projects-container'>
            {Artwork_Data.map((project) => (
                <Card 
                    key={project.id} 
                    image={project.image} 
                    class={project.class}
                    alt={project.alt} 
                    title={project.title} 
                    description={project.description}
                />
            ))}
        </div>
  );
}

export default Artworks;