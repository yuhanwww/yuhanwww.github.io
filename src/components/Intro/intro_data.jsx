import React from 'react';
import './intro.css';
// import scrollIcon from '../../assets/icons/cvIcon.svg';

const IntroData = () => {
  return (
    <div className="intro_data">
        <h1 className="intro_title">Yuhan Wang</h1>
        <h3 className="intro_subtitle">Maker &#x1f528;<br/>  Art Historian &#x1f5bc;<br/>Computer Scientist &#x1f4bb;</h3>
        {/* <p className="intro-description">I am a senior at Smith College, passionate and dedicated to visual creations.</p> */}
        <p className="intro-subdescription">Atlanta, GA | yuhan_wang at gatech dot edu</p>
    </div>
  )
}

export default IntroData;