import React from 'react';
import './intro.css';
import Icons from './icons';
import IntroData from './data_intro';
import IntroDescription from './intro_description';
// import ScrollDown from './scrollDown';

const Intro = () => {
  return (
    <section className="intro section">
        <div className="intro_container-header container">
            <div className="intro_content grid">
              <Icons />
              <IntroData />
              <div className="intro_img"></div>
            </div>
            {/* <ScrollDown /> */}
        </div>
        <IntroDescription />
        
    </section>
  )
}

export default Intro;