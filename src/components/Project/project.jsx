import React from 'react';
import './project.css';
import Projects from './projects';

const Project = () => {
  return (
    <section className="project section" id='project'>
        <h2 className="section_title">Project</h2>
        <span className="section_subtitle">Most recent works</span>

        <Projects/>
    </section>
  )
}

export default Project;