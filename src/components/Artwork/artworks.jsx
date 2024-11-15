import React from 'react';
import './artworks.css';

import dti_blender from "../../assets/artworks/DTI_blender/DTI_blender.PNG";
import flipBrasil from "../../assets/artworks/FlipBrasil/flipBrasil.png";
import infoShredder from "../../assets/artworks/InfoShredder/working.png";
import stupid_ml from "../../assets/artworks/StupidML/stupid_ml.png";
import theGame from "../../assets/artworks/TheGame/r3.PNG";
import yuhanMap from "../../assets/artworks/YuhansMap/yuhan_map.png";

const Artwork_Data = [
    {
        id: 6,
        image: flipBrasil,
        alt: "flipBrasil",
        title: "Flip Brasil",
        description: "An interactive installation based on 10 day experience of Brasil art and culture",
        link: "",
    },

    {
        id: 5,
        image: infoShredder,
        alt: "infoShredder interface",
        title: "Information Shredder At Your Door",
        description: "A mixed-media installation that shreds information physically & ritually",
        link: "",
    },

    {
        id: 4,
        image: stupid_ml,
        alt: "Stupid Machine Learning Interface",
        title: "Stupid Machine Learning",
        description: "A digital program that asks users to train an AI by fixing a biased dataset",
        link: "",
    },

    {
        id: 3,
        image: theGame,
        alt: "The Game Interface",
        title: "You are Programmed.",
        description: "A phone-based program that reflects on how phone shapes one's actions",
        link: "",
    },

    {
        id: 2,
        image: dti_blender,
        alt: "Photorealistic picture of DTI classroom",
        title: "DTI classroom in Blender",
        description:"A photorealistic 3D model of a classroom in campus makerspace",
        link: "",
    },

    {
        id: 1,
        image: yuhanMap,
        alt: "Yuhan's Map",
        title: "Yuhan's Map 2023",
        description:"A Map reflecting life journey and identity",
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