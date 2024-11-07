import React from 'react';
import './phyllo.css';

import phyllotaxis from '../../../assets/projects/phyllotaxis/phyllotaxis.png';
import tripetala from '../../../assets/projects/phyllotaxis/tripetala.png';
import example_disk from '../../../assets/projects/phyllotaxis/example_disk.png';
import megatile from '../../../assets/projects/phyllotaxis/megatile.png';

const Phyllo = () => {
  return (
    <section className="project section">
      <div className="project-header">
        
      </div>
      <h2 className="section_title project-header">TDA on Phyllotaxis</h2>
      <span className="section_subtitle project-header">A Topological Data Analysis study on Phyllotaxis in Prof. Christophe Golé's lab</span>
      <img src={phyllotaxis} alt="Phyllotaxis visualization" className="project_title-image" />
      <span className="project-content">
        <p className="project-description">This project is the part that I was mostly involved in as a research assistant in Prof. Christophe Golé’s Phyllotaxis Plant lab. Phyllotaxis is the arrangement of plant organs on a stem, and we are studying the Fibonacci ones from the Quasi Symmtery ones, the latter being more irregular. By applying topological data analysis on phyllotaxis, we can measure and quantify the irregularity of both kinds. </p>
        <br/>
        <p className="project-description">Below is an example species,and how we unroll the plant, generate triangulation of the points to output the data for analyisis.</p>
        <img src={tripetala} alt="Example of Unrolled Tripetala" className="project-image" />
        <p className="project-subdescription">
        Example of Unrolled Tripetala, Delaunay Triangulation is applyed on the points on the plant to form "fronts" -- up & down vectors of the point relationship
        </p>
      </span>
    </section>
    
  );
};

export default Phyllo;
