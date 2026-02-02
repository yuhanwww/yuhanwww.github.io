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
      {/* <p className="intro-description">
        As an art historian and computer scientist, I often think that both artwork and technology gain their meanings from interaction with a viewer or user.  
      </p> 
      <br/> */}
      {/* <p className="intro-description"><i>
        How does the way we view art differ from the way we view data visualization? 
        How do we alter the way we present information, from scientific data to artworks, to ease, engage, and enrich interpretations? 
        How are new paradigms reshaping our interactions with art and technology?
      </i></p>
      <br/> */}
      <p className="intro-description">
        I'm interested in exploring <i>how information is presented</i> -- from scientific to artistic, to ease, engage, and enrich interpretations, and <i>how people perceive them</i> -- through
        physical, emotional and sensory interactions. Currently, I'm working on designing <a target="_blank" rel="noopener noreferrer" href="https://sites.gatech.edu/contaqt/projects/">interactive visualization systems</a> to facilitate public scientific communication and cultivate data literacy.
      </p>
      <br/>
      <p className="intro-description">
        In my free time, I practice <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9VNg-ZDEr1I" style={{color:"var(--other-color"}}>artistic swimming</a>-- hoping to attend an amateur competition at HongKong someday... :))
      </p>

    </div>
  )
}

export default IntroDescription;