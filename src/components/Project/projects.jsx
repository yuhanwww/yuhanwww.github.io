import React, { useState } from 'react';
import './projects.css';

import ai_poster from '../../assets/projects/thesis/ai_poster.png';
import wechat_prototype from '../../assets/projects/HCI/wechat_prototype.png'
import dinoWorld from '../../assets/projects/visualAnalytics/dinoWorld.png'
import guerilla_girl from '../../assets/projects/guerillaAI/guerilla_girl.jpg'
import hexagons from '../../assets/projects/phyllotaxis/hexagons.png';
import artRecognizer from '../../assets/projects/artRecognizer/myster_art_recognizer.png';
import conf_mtx_wordcloud from '../../assets/projects/bttai/conf_mtx_wordcloud.png';
import makersmap from '../../assets/projects/makersmap/makersmap.png';
import exploreCSR from '../../assets/projects/exploreCSR/exploreCSR.png';
import valetbike from '../../assets/projects/valetbike/valetbike.png';


const Data = [
    {
        id: 10,
        image: ai_poster,
        alt: "AI Trust in Higher Education",
        title: "Honors Thesis Project",
        description: "Research on AI trust in higher education",
        category:["HCI","Research"],
        link:"#/project/thesis"
    },

    // {
    //     id: 9,
    //     image: dinoWorld,
    //     alt: "Visualization of communication trend, network and table of a give moment",
    //     title: "Visual Analytics on VAST Challenge datasets",
    //     description: "Projects in CSC235 Visual Analytics",
    //     category:["Visualization"],
    // },

    // {
    //     id: 8,
    //     image: wechat_prototype,
    //     alt: "JAYC App Front Page",
    //     title: "JAYC App for international community",
    //     description: "Final Project for CS 325 HCI",
    //     category:["HCI"],
    // },

    {
        id: 7,
        image: guerilla_girl,
        alt: "Guerilla Girl Artwork",
        title: "Guerilla AI",
        description: "A Computer Vision-Assisted Investigation inspired by Guerilla Girls",
        category:["Machine Learning","Art History"],
        link: "https://fangyizhu.github.io/guerilla-ai/",
    },

    {
        id: 6,
        image: hexagons,
        alt: "Phyllotaxis Hexagonal Heatmap",
        title: "TDA on Phyllotaxis",
        description: "A Topological Data Analysis study on Phyllotaxis in Prof. Christophe Golé's lab",
        category:["Visualization","Research"],
        link: "#/project/phyllo",
    },

    {
        id: 5,
        image: artRecognizer,
        alt: "Artwork Matrix",
        title: "Mystery Art Recognizer",
        description: "Final Project for MTH 353 Deep Learning Seminar & ARH 212 Ancient Cities & Sanctuaries",
        category:["Machine Learning","Art History"],
        link: '#/project/art_recognizer',
    },

    {
        id: 4,
        image: conf_mtx_wordcloud,
        alt: "Bat Fungus Wordcloud",
        title: "Break Through Tech AI",
        description: "Apply Machine Learning on Bat Fungus Detection and Plant Speciman Classification",
        category:["Machine Learning"],
        link: "#/project/btt_ai_mit",
    },

    {
        id: 3,
        image: makersmap,
        alt: "Smith Makers Map",
        title: "Smith Makers Map",
        description: "An Interactive Making Resource Map for Smith College",
        category:["Website Design","HCI"],
        link: 'https://smithmakersmaps.com',
    },

    {
        id: 2,
        image: exploreCSR,
        alt: "phyllotaxis hexagonal heatmap",
        title: "Brown exploreCSR",
        description:"SVG creations from the exploreCSR program @Brown Spring 2023",
        category:["Website Design","Research"],
        link: 'https://github.com/yuhanwww/SVG-creations',
    },

    // {
    //     id: 1,
    //     image: valetbike,
    //     alt: "Valet Bike App Homepage",
    //     title: "Valet Bike",
    //     description:"A Bike Rental Website with Ruby on Rails by team Bugz for CSC 223 Software EGR",
    //     category:["Website Design","Software Engineering"],
    //     link: '',
    // },

    // {
    //     id: 0,
    //     image: phyllotaxis,
    //     alt: "Health App Wireframe",
    //     title: "Campus Mental Health App",
    //     description:"A Mental Health App Prototype for EGR 100 Topics in Health",
    //     category:["Prototype","HCI"],
    // },

];


const Card = ({ image, alt, title, description, category, link }) => {

    const isExternalLink = link && link.startsWith('http');
    
    return (
        <div className='project-card'>
            {link ? (
                <a 
                    href={link} 
                    className="project-card-content-link" 
                    target={isExternalLink ? "_blank" : "_self"} // Open in new tab for external links
                    rel={isExternalLink ? "noopener noreferrer" : undefined} // Security for external links
                >
                    <div className="project-card-content">
                        <div className="project-card-text">
                            <h4 className="project-card-title">{title}</h4>
                            <p className="project-card-description">{description}</p>
                            {/* <div className="tags">
                                {category.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div> */}
                        </div>
                        <img className="project-card-thumbnail" src={image} alt={alt} />
                    </div>
                </a>
            ) : (
                <div className="project-card-content">
                    <div className="project-card-text">
                        <h4 className="project-card-title">{title}</h4>
                        <p className="project-card-description">{description}</p>
                        {/* <div className="tags">
                            {category.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div> */}
                    </div>
                    <img className="project-card-thumbnail" src={image} alt={alt} />
                </div>
            )}
        </div>
        
    )
}

const Projects = () => {
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

export default Projects;