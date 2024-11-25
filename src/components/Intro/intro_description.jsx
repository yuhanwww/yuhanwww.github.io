import React from 'react';
import './intro.css';

const IntroDescription = () => {
  return (
    <div className="intro_content-description">
      <p className="intro-description">
        I am a senior at <a target="_blank" rel="noopener noreferrer" href="https://www.smith.edu/">Smith College</a>, double major in <a target="_blank" rel="noopener noreferrer" href="https://www.smith.edu/academics/programs-courses/academic-programs/art">Art History</a> & <a target="_blank" rel="noopener noreferrer" href="https://www.smith.edu/academics/computer-science">Computer Science</a>.
        I love design and creation(both physical and digital) and I work as a studio design partner at the <a target="_blank" rel="noopener noreferrer" href="https://www.smith.edu/academics/design-thinking">Design Thinking Initiative</a> at Smith. 
      </p>
      <p className="intro-description">
        As an art historian and computer scientist, I often think that both artwork and technology gain their meanings from interaction with a viewer or user. 
      </p>
      <p className="intro-description"><i>
        How does the way we view art differ from the way we view data visualization? 
        How do we alter the way we present information, from scientific data to artworks, to ease, engage, and enrich interpretations? 
        How is the way we interact with technology evolving and being changed by new inventions and systems?
      </i></p>
      <p className="intro-description">
        These are the questions that have driven my academic and research pursuits, which in short is, I want to <b style={{color: "var(--title-color)"}}>centralize human’s physical, emotional and sensory perceptions</b> in digital experiences. 
      </p>
      <p className="intro-description">
        In my free time, I practice <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9VNg-ZDEr1I">artistic swimming</a>-- hoping to attend competition at HongKong in Summer 2025 :))
      </p>

    </div>
  )
}

export default IntroDescription;