import React from 'react';
import './artworks.css';

import flip_brazil from "../../assets/artworks/flip_brazil/flip_brazil.png";
import ingo_shredder from "../../assets/artworks/info_shredder/working.png";
import stupid_ml from "../../assets/artworks/stupid_ml/stupid_ml.png";
import you_are_programmed from "../../assets/artworks/you_are_programmed/programmed.PNG";
import yuhans_map from "../../assets/artworks/yuhans_map/yuhans_map.png";
import self_writing from "../../assets/artworks/self_writing/self_writing_zoom.png"
import nurse_shave_hair from '../../assets/artworks/nurses_have_hair/nurses_have_hair.png';
import mother_talon from "../../assets/artworks/boy_mother/bm2_mother_claw.JPG";
import campus_map from "../../assets/artworks/campus_map/campus_map.png";

const Artwork_Data = [
    {
        id: 8,
        image: flip_brazil,
        alt: "flipBrazil",
        title: "Flip Brazil",
        description: "An interactive installation based on 10 day experience of Brasil art and culture",
        link: "#/artwork/flip_brazil",
    },

    {
        id: 7,
        image: ingo_shredder,
        alt: "info Destruction interface",
        title: "Information Shredder",
        description: "A mixed-media installation that shreds information physically & ritually",
        link: "#/artwork/info_shredder",
    },

    {
        id: 5,
        image: you_are_programmed,
        alt: "The Game Interface",
        title: "You are Programmed.",
        description: "A phone-based program that reflects on how phone shapes one's actions",
        link: "#/artwork/you_are_programmed",
    },

    {
        id: 6,
        image: stupid_ml,
        alt: "Stupid Machine Learning Interface",
        title: "Stupid Machine Learning",
        description: "A digital program that asks users to train an AI by fixing a biased dataset",
        link: "#/artwork/stupid_ml",
    },

    {
        id: 4,
        image: yuhans_map,
        alt: "Yuhan's Map",
        title: "Yuhan's Map 2023",
        description:"A Map reflecting life journey and identity",
        link: "#/artwork/yuhans_map",
    },

    {
        id: 3,
        image: self_writing,
        alt: "A calligraphy piece where English is mapped on Chinese",
        title: "Self Writing",
        description:"A Map reflecting life journey and identity",
        link: "#/artwork/self_writing",
    },

    {
        id: 2,
        image: campus_map,
        alt: "Campus Map",
        title: "Campus Mental Map",
        description:"A Map created collectively inspired by Papunya Tula art",
        link: "#/artwork/campus_map",
    },

    {
        id: 1,
        image: mother_talon,
        alt: "Clay Figurine work of Boy running away from mother",
        title: "Run from Mother’s Talon",
        description:"A clay figurine work reflecting on suicide among adolescents",
        link: "#/artwork/boy_mother",
    },

    {
        id: 0,
        image: nurse_shave_hair,
        alt: "Clay Figurine work of nurses being shaved hair on the left & a bald female doctor walking determinated on the right",
        title: "Nurses Have Hair",
        description:"A clay figurine work reflection on nurses shave hair incident during Covid-19",
        link: "#/artwork/nurses_have_hair",
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
                    link = {project.link}
                />
            ))}
        </div>
  );
}

export default Artworks;