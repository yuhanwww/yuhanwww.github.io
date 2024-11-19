import React from 'react';
import './intro.css';
import Icons from './icons';
import IntroData from './data_intro';
// import ScrollDown from './scrollDown';

const Intro = () => {
  return (
    <section className="intro section">
        <div className="intro-container container grid">
            <div className="intro-content grid">
              <Icons />

              <div className="intro-img"></div>
              <IntroData />
               
            </div>
            {/* <ScrollDown /> */}

        </div>
    </section>
  )
}

export default Intro;