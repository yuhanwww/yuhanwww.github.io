import React from 'react';
import './project_page.css';

import ai_poster from '../../../assets/projects/thesis/ai_poster.png';

const Thesis = () => {
  return (
    <section className="project section">
      <h2 className="section_title project-header">AI Trust in Higher Education</h2>
      <span className="section_subtitle project-header">Honor Thesis project surveying the perception and usage of AI in higher education.</span>
      <img src={ai_poster} alt="TDA on Phyllotaxis Poster" className="project_title-image" />
      <span className="project-content">

        {/* =========== Intro ============*/}
        <p className="project-description">
            The introduction of ChatGPT disrupted my college life in my junior year. 
            Seeing its powerful functions and how my peers successfully leveraged it to study efficiently influenced my "addiction" to it.
            However, it is apparent that professors or even the institution would not be happy about our misues of AI. Even for us individually, it's hard and very personal to measure when we are abusing AI in our everyday study.
            Therefore, this thesis study aims to target areas where instituional policy, faculty perception, and students' use are misaligned, which would inform us how we can form and facilitate ethical AI use.
            <br/><br/>
            Currently, we are gathering public opinion through anonymous feedback. Open questions we ask include:
            <br/> "Where do you draw the line on AI use between cheating & non-cheating?"
            <br/> "How do you manipulate AI to generate non-AI-like output?"
            <br/> "How have you used AI in a way that you thought was borderline cheating?"
            {/* <br/> "Where do you draw the line on AI use between cheating & non-cheating?" */}
            {/* <br/> "Where do you draw the line on AI use between cheating & non-cheating?" */}
        </p>
        <hr className="project-line" />

        {/* =========== Progress ============*/}
        <br/>
        <p className="project-description">
          To learn more about the project, you could check the following links:
        </p>
        <p className="project-description">
          <t/><a target="_blank" rel="noopener noreferrer" href="">Thesis Proposal</a>
          <br/><t/><a target="_blank" rel="noopener noreferrer" href="">Thesis Log</a>
        </p>
        <hr className="project-line" />

        {/* =========== Questions ============*/}
        <br/>
        <p className="project-description">
            Questions that come up:
        </p>
        <p className="project-description">
          <t/>
        </p>

      </span>
    </section>
  )
}

export default Thesis;