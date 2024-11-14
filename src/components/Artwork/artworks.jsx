import React, { useState } from 'react';
import './artworks.css';

import dti_blender from "../../assets/artworks/DTI_blender/DTI_blender.PNG";
import flipBrasil from "../../assets/artworks/FlipBrasil/flipBrasil.png";
import infoShredder from "../../assets/artworks/InfoShredder/working.png";
import stupid_ml from "../../assets/artworks/StupidML/stupid_ml.png";
import theGame from "../../assets/artworks/TheGame/r3.PNG";
import yuhanMap from "../../assets/artworks/YuhansMap/yuhan_map.png";

const Data = [
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
        title: '"Information Shredder At Your Door"',
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
        title: '"You are Programmed"',
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


const Card = ({ image, alt, title, description, category, link }) => {

    return (
        <div className='card'>
            <a href={link} className="card-content-link">
                <div className="card-content">
                    <div className="card-text">
                        <h4 className='card-title'>{title}</h4>
                        <p className='card-description'>{description}</p>
                        <div className="tags">
                            {category.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <img className="card-thumbnail" src={image} alt={alt}/>
                </div>
            </a>
        </div>
        
    )
}

const Artworks = () => {
    const [selectedTag, setSelectedTag] = useState("All");

    const handleTagClick = (tag) => {
        setSelectedTag(tag); 
    };

    const filteredData = selectedTag === "All"
        ? Data
        : Data.filter((project) => project.category.includes(selectedTag));

    const allTags = ["All", ...new Set(Data.flatMap((project) => project.category))].sort();

    return (
        <div className="project-list">
            <div className='filter-container'>
                <div className="filter-list">
                    {allTags.map((tag) => (
                        <span
                            key={tag}
                            className={`filter-tag ${selectedTag.includes(tag) ? 'selected' : ''}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="projects-list container">
                {filteredData.map((project) => (
                    <Card
                        key={project.id}
                        image={project.image}
                        alt={project.alt}
                        title={project.title}
                        description={project.description}
                        category={project.category}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
  );
}

export default Artworks;