import React from 'react';
import './projects.css';
import exploreCSR from '../../assets/projects/exploreCSR/exploreCSR.png';

const Card = () => {
  return (
    <div className='card'>
      <div className="card-text">
        <h4 className='card-title'>Header</h4>
        <p className='card-description'>individual descriptionindividual descriptionindividual descriptionindividual descriptionindividual descriptionindividual descriptionindividual description</p>
      </div>
      <img className='card-img' src={exploreCSR} alt='img'/>
        
        
    </div>
    
  )
}

const Projects = () => {
  return (
    <Card />
  )
}

export default Projects;