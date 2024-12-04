import React from 'react';
import Iframe from 'react-iframe';

import key_features from '../../../assets/projects/hci/key_features.png';
import interfaces from '../../../assets/projects/hci/interfaces.png';
import CS325_Team_JAYC_Poster_pdf from '../../../assets/files/hci/CS325_Team_JAYC_Poster.pdf';
import wechat_prototype from '../../../assets/projects/hci/wechat_prototype.png';
import wireframe from '../../../assets/projects/hci/wireframe.png';

const HCI = () => {
  return (
    <section className="project section">
    <h2 className="section_title project-header">InterNest</h2>
    <span className="section_subtitle project-header">An App Prototype for Internatioanl Community -- Final Project for CS 325 Human-Computer Interaction</span>
    <a href={CS325_Team_JAYC_Poster_pdf} target="_blank" rel="noopener noreferrer">
      <img src={key_features} alt="Poster for CS 325 Final Project" className="project_title-image" />
    </a>
    <span className="project-content">

        {/* =========== Intro ============*/}
        <p className="project-description">
          As an international student, it was natural for me to immediately think about the international community when the prompt for the final project for my HCI course was to design for a specific group. 
          An App for internationals, I hope, can help ease overwhelmingness from the US-centric context. 
          I will admit though, wireframing and desining has brought me so much fun during the busy application season.
        </p>
        <hr className="project-line" />
        <br/>
        
        <p className="project-subdescription">
          <a target="_blank" rel="noopener noreferrer" 
            href="https://www.figma.com/proto/whmyiA7yTiJVOMYtopcm5t/CS-325-High-fidel-Prototype?node-id=7-448&node-type=canvas&t=ey2DlQ8IW6x8TXiI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A448">
            Link to gain exclusive access of our app prototype
            <img src={interfaces} alt="NLP & Random Forest Project Comparison" className="project-image" />
          </a>
        </p>
        <hr className="project-line" />
    </span>
    </section>
  )
}

export default HCI;