import React from 'react';
import './intro.css';
import scrollIcon from '../../assets/icons/cvIcon.svg';

const IntroData = () => {
  return (
    <div className="intro-data">
        <h1 className="intro-title">Yuhan Wang</h1>
        <h3 className="intro-subtitle">Maker &#x1f528;<br/>  Art Historian &#x1f5bc;<br/>Computer Scientist &#x1f4bb;</h3>
        {/* <p className="intro-description">I am a senior at Smith College, passionate and dedicated to visual creations.</p> */}
        <p className="intro-subdescription">Northampton, MA | ywang70 at smith dot edu</p>
    </div>
  )
}

export default IntroData;