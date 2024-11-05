import React from 'react';
import './projects.css';

import phyllotaxis from '../../assets/projects/phyllotaxis/phyllotaxis.png';
import artRecognizer from '../../assets/projects/artRecognizer/myster_art_recognizer.png';
import bat_detection from '../../assets/projects/bttai/bat_detection.png';
import makersmap from '../../assets/projects/makersmap/makersmap.png';
import exploreCSR from '../../assets/projects/exploreCSR/exploreCSR.png';

const Data = [
    {
        id: 1,
        image: phyllotaxis,
        alt: "Trust in AI",
        title: "TDA on Phyllotaxis",
        description: "Honor Thesis Project on factors that influence trust in AI in higher education",
    },

    {
        id: 2,
        image: phyllotaxis,
        alt: "Guerilla Girl Artwork",
        title: "Guerilla AI",
        description: "A Computer Vision-Assisted Investigation inspired by Guerilla Girls",
    },

    {
        id: 3,
        image: phyllotaxis,
        alt: "Phyllotaxis Hexagonal Heatmap",
        title: "TDA on Phyllotaxis",
        description: "A Topological Data Analysis study on Phyllotaxis in Prof. Christophe Golé's lab",
    },

    {
        id: 4,
        image: artRecognizer,
        alt: "Artwork Matrix",
        title: "Mystery Art Recognizer",
        description: "Final Project for MTH 353 Deep Learning Seminar & ARH 212 Ancient Cities & Sanctuaries",
    },

    {
        id: 5,
        image: bat_detection,
        alt: "Bat Fungus Wordcloud",
        title: "Break Through Tech AI",
        description: "Application of Machine Learning on Bat Fungus Detection and Plant Speciman Classification",
    },

    {
        id: 6,
        image: makersmap,
        alt: "Smith Makers Map",
        title: "Smith Makers Map",
        description: "An Interactive Making Resource Map for Smith College",
    },

    {
        id: 7,
        image: exploreCSR,
        alt: "phyllotaxis hexagonal heatmap",
        title: "Brown exploreCSR",
        description:"SVG creations from the exploreCSR program @Brown Spring 2023",
    },

    {
        id: 8,
        image: phyllotaxis,
        alt: "Valet Bike App Homepage",
        title: "Valet Bike",
        description:"A Bike Rental Website with Ruby on Rails by team Bugz for CSC 223 Software EGR",
    },

    {
        id: 9,
        image: phyllotaxis,
        alt: "Health App Wireframe",
        title: "Campus Mental Health App",
        description:"A Mental Health App Prototype for EGR 100 Topics in Health",
    },

];


const Card = ({ image, className, alt, title, description }) => {
  return (
    <div className='card'>
      <div className="card-content">
        <div className="card-text">
          <h4 className='card-title'>{title}</h4>
          <p className='card-description'>{description}</p>
        </div>
          <img className="card-thumbnail" src={image} alt={alt}/>
      </div>
    </div>
    
  )
}

const Projects = () => {
  return (
    <div className='projects-container'>
      {Data.map((project) => (
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
  )
}

export default Projects;