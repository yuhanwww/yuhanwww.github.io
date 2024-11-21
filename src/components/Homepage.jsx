import React from 'react';

import NavBar from './NavBar/navbar';
import Intro from "./Intro/intro";
import Project from './Project/project';
import Artwork from './Artwork/artwork';
import Footer from './Footer/footer';

const Homepage = () => {
  return (
    <div className="app-container">
       <NavBar />
        <Intro />
        <Project />
        <Artwork />
       <Footer />
    </div>
  )
}

export default Homepage;