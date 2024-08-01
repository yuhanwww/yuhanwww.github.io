import React from 'react';
import './intro.css';
import Icons from './icons';
import Data from './data';

const Intro = () => {
  return (
    <section className="intro section">
        <div className="intro_container container grid">
            <div className="intro_content grid">
              <Icons />

              <div className="intro_img"></div>

              <Data />
            </div>
            

        </div>
    </section>
  )
}

export default Intro;