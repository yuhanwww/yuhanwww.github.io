import React from 'react';
import './intro.css';
import Icons from './icons';
import IntroData from './intro_data';
import IntroDescription from './intro_description';
// import ScrollDown from './scroll_down';

const Intro = () => {
  return (
    <section className="intro section">
        <div className="intro_container-header container">
            <div className="intro_content grid">
              <Icons />
              <div className="intro_img"></div>
              <IntroData />
            </div>
            {/* <ScrollDown /> */}
            <IntroDescription />
        </div>
        
        
    </section>
  )
}

export default Intro;