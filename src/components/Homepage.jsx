import React from 'react';

import NavBar from './NavBar/navbar';
import Intro from "./Intro/intro";
import Project from './Project/project';
import Artwork from './Artwork/artwork';
import Publication from './Publication/publication';
import Footer from './Footer/footer';

const Homepage = () => {
  return (
    <div className="app-container">
       {/* <NavBar /> */}
        <Intro />
        <Publication />
        <Project />
        <Artwork />
       {/* <Footer /> */}
    </div>
  )
}

export default Homepage;