import React from 'react';
import './intro.css';

const IntroDescription = () => {
  return (
    <div className="intro_content-description">
      <p className="intro-description">
        I am a first-year student at <a target="_blank" rel="noopener noreferrer" href="https://ic.gatech.edu/">Georgia Institute of Technology</a> in <b>Human-Centered Computing</b>. 
        I graduated May 2025 from <a target="_blank" rel="noopener noreferrer" href="https://www.smith.edu/">Smith College</a>, with Highest Honors in Computer Science and double major in Art History.
      </p>  
      <br/>
      <p className="intro-description">
        As an art historian and computer scientist, I often think that both artwork and technology gain their meanings from interaction with a viewer or user. 
      </p>
      <br/>
      <p className="intro-description"><i>
        How does the way we view art differ from the way we view data visualization? 
        How do we alter the way we present information, from scientific data to artworks, to ease, engage, and enrich interpretations? 
        How are new paradigms reshaping our interactions with art and technology?
      </i></p>
      <br/>
      <p className="intro-description">
        These are the questions that have driven my academic and research pursuits, which in short is, I want to <b style={{color: "var(--title-color)"}}>centralize human’s physical, emotional and sensory perceptions</b> in digital experiences. 
      </p>
      <br/>
      <p className="intro-description">
        In my free time, I practice <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9VNg-ZDEr1I" style={{color:"var(--other-color"}}>artistic swimming</a>-- hoping to attend an amateur competition at HongKong someday... :))
      </p>

    </div>
  )
}

export default IntroDescription;