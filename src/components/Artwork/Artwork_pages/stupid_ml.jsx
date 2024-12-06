import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';
import Iframe from 'react-iframe';

import stupid_ml from '../../../assets/artworks/stupid_ml/stupid_ml.png';
import sml_start from '../../../assets/artworks/stupid_ml/sml_start.png';
import sml_rule from '../../../assets/artworks/stupid_ml/sml_rule.png';
import sml_input from '../../../assets/artworks/stupid_ml/sml_input.png';
import sml_almost from '../../../assets/artworks/stupid_ml/sml_almost.png';
import sml_end from '../../../assets/artworks/stupid_ml/sml_end.png';

const StupidML = () => {
  const stupid_ml_images = [
    { src: stupid_ml, alt: "Stupid Machine Learning being played", description: "Stupid Machine Learning in campus exhibition -- someone stopped at training count 14" },
    { src: sml_rule, alt: "Introduction to Stupid Machine Learning", description: "Introduction to Stupid Machine Learning" },
    { src: sml_start, alt: "Initial interface with a 'brain' of the computer, an option to ask an answer from the computer, and to train the computer through a 'cyan' button", description: "Initial interface with a wordcloud, an ask button, and a train button" },
    { src: sml_input, alt: "Initial interface but with option to type in for training after round 5", description: "After 5 rounds of training, the option to type in answers to train the computer appears." },
    { src: sml_almost, alt: "Interface after 8 rounds of training", description: "Some 'BLACK' appears in the brain after 8 rounds of training" },
    { src: sml_end, alt: "Training ends as the computer gets the right answer", description: "Training ends when the computer gets the right answer. A final 'dataset' is shown." },
  ];

  return (
    <section className="artwork_page section">
      <h2 className="section_title artwork_page-header">Stupid Machine Learning</h2>
      <span className="section_subtitle artwork_page-header">Do you know how AI works? Learn AI through this work.</span>
      
      {/* Image Gallery */}
      <div className="artwork_page-gallery">
        <ArtworkSlider
          images={stupid_ml_images}
        />
      </div>
      <br/>
      
      <span className="artwork_page-content">
        
        {/* =========== Intro ============*/}
        <p className="artwork_page-description">
          In the <i>Interactive Digital Multimedia</i> course, I created 3 artworks exploring how technology shapes human behavior, perception, and self-concept.  
          <br/><br/>
          <i> Stupid Machine Learning</i> is the 1st piece. 
          Considering how many people use AI tools without knowing their mechanism, this work ask users to train an AI by fixing a biased dataset, which explains the behind-the-scenes of AI in a gamified, approachable way.
        </p>
        <hr className="artwork_page-line" />

        {/* =========== Display ============*/}
        <br/>
        <p className="artwork_page-description" style={{textAlign:"center"}}>
        {/* <a target="_blank" rel="noopener noreferrer" href="https://editor.p5js.org/ywang70/full/xWfxB3nz_">Link to <i>Stupid Machine Learning</i></a> */}
        </p>
        <Iframe url="https://editor.p5js.org/ywang70/full/xWfxB3nz_"
          width="400"
          height="650"
          className='artwork_page-embed-p5'/>
        <br/>
        <br/>
        <hr className="artwork_page-line" />

        {/* =========== Explanation ============*/}
        <br/>
        <p className="artwork_page-description">
          In my junior year, I was emerged in Machine Learning(ML), in <a href="#/project/btt_ai_mit">Break Through Tech AI</a> program, in <a href="#/project/art_recognizer">Mathematics of Deep Learning</a> course, and in <i>Computer Vision</i> course. 
          I felt lucky to know AI in depth when AI is prevailing, but at the same time I felt powerless. 
          The amount of time I spent learning AI is huge, but the extent I know about it is tiny. 
          It's developing crazily. 
          At a certain moment, I just thought, <i>'AI is SO stupid.' </i>  
          I decided to do this project because, at the very bottom basic level, AI or ML is 'randomly' picking answers from a dataset. 
          Realizing this fact might help ease some's fear of AI, maybe help demystify a bit about AI. 
        </p>


      </span>
    </section>

  )
}

export default StupidML;