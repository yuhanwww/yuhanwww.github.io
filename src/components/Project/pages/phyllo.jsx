import React from 'react';
import './phyllo.css';
import phyllotaxis from '../../../assets/projects/phyllotaxis/phyllotaxis.png';

const Phyllo = () => {
  return (
    <section className="project section">
      <h2 className="section_title">TDA on Phyllotaxis</h2>
      <span className="section_subtitle">A Topological Data Analysis study on Phyllotaxis in Prof. Christophe Golé's lab</span>
      <div className="project-image">
        <img src={phyllotaxis} alt="Phyllotaxis visualization" className="project-image" />
      </div>
      <span className="project-content">
        <div className="project-description">
          <p>This project is the part that I was mostly involved in as a research assistant in Prof. Christophe Golé’s Phyllotaxis Plant lab. Phyllotaxis is the arrangement of plant organs on a stem, and we are studying the Fibonacci ones from the Quasi Symmtery ones, the latter being more irregular. By applying topological data analysis on phyllotaxis, we can measure and quantify the irregularity of both kinds. <br/>This is an example species,and how we unroll the plant, generate triangulation of the points to output the data for analyisis.</p>
        </div>
      </span>
    </section>
    
  );
};

export default Phyllo;
