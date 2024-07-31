import React from 'react';
import './intro.css';
import Icons from './icons';
import Data from './data';

const Intro = () => {
  return (
    <section className="home section">
        <div className="home_container container grid">
            <Icons />

            <div className="home_img"></div>

            <Data />

        </div>
    </section>
  )
}

export default Intro;