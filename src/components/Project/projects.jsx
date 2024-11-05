import React from 'react';
import './projects.css';

import phyllotaxis from '../../assets/projects/phyllotaxis/phyllotaxis.png';
import artRecognizer from '../../assets/projects/artRecognizer/myster_art_recognizer.png';
import bat_detection from '../../assets/projects/bttai/bat_detection.png';
import makersmap from '../../assets/projects/makersmap/makersmap.png';
import exploreCSR from '../../assets/projects/exploreCSR/exploreCSR.png';

const Data = [
    // {
    //     id: 0,
    //     image: phyllotaxis,
    //     alt: "Trust in AI",
    //     title: "Honors Thesis Project",
    //     description: "Honor Thesis Project on factors that influence trust in AI in higher education",
    //     category:["HCI","research"],
    // },

    {
        id: 1,
        image: phyllotaxis,
        alt: "Artwork",
        title: "Artworks on Human-Technology Relationship",
        description: "Three Artworks based on p5.js & arduino from Digital Multimedia course",
        category:["Art","HCI"],
    },

    {
      id: 2,
      image: phyllotaxis,
      alt: "Guerilla Girl Artwork",
      title: "Guerilla AI",
      description: "A Computer Vision-Assisted Investigation inspired by Guerilla Girls",
      category:["Machine Learning","Art History"],
  },

    {
        id: 3,
        image: phyllotaxis,
        alt: "Phyllotaxis Hexagonal Heatmap",
        title: "TDA on Phyllotaxis",
        description: "A Topological Data Analysis study on Phyllotaxis in Prof. Christophe Golé's lab",
        category:["Visualization","Research"],
    },

    {
        id: 4,
        image: artRecognizer,
        alt: "Artwork Matrix",
        title: "Mystery Art Recognizer",
        description: "Final Project for MTH 353 Deep Learning Seminar & ARH 212 Ancient Cities & Sanctuaries",
        category:["Machine Learning","Art History"],
    },

    {
        id: 5,
        image: bat_detection,
        alt: "Bat Fungus Wordcloud",
        title: "Break Through Tech AI",
        description: "Application of Machine Learning on Bat Fungus Detection and Plant Speciman Classification",
        category:["Machine Learning"],
    },

    {
        id: 6,
        image: makersmap,
        alt: "Smith Makers Map",
        title: "Smith Makers Map",
        description: "An Interactive Making Resource Map for Smith College",
        category:["Website Design","Intern"],
    },

    {
        id: 7,
        image: exploreCSR,
        alt: "phyllotaxis hexagonal heatmap",
        title: "Brown exploreCSR",
        description:"SVG creations from the exploreCSR program @Brown Spring 2023",
        category:["Design","Research"],
    },

    {
        id: 8,
        image: phyllotaxis,
        alt: "Valet Bike App Homepage",
        title: "Valet Bike",
        description:"A Bike Rental Website with Ruby on Rails by team Bugz for CSC 223 Software EGR",
        category:["Website Design","Software Engineering"],
    },

    {
        id: 9,
        image: phyllotaxis,
        alt: "Health App Wireframe",
        title: "Campus Mental Health App",
        description:"A Mental Health App Prototype for EGR 100 Topics in Health",
        category:["Prototype","HCI"],
    },

];


const Card = ({ image, alt, title, description, category }) => {
  return (
    <div className='card'>
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
            alt={project.alt} 
            title={project.title} 
            description={project.description}
            category={project.category}
        />
      ))}
    </div>
  )
}

export default Projects;