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
        <p className="artwork_page-description">
          In the <i>Interactive Digital Multimedia</i> course, I created 3 artworks exploring how technology shapes human behavior, perception, and self-concept.  
          <br/><br/>
          <i> Stupid Machine Learning</i> is the 1st piece. 
          Considering how many people use AI tools without knowing their mechanism, this work ask users to train an AI by fixing a biased dataset, which explains the behind-the-scenes of AI in a gamified, approachable way.
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork_page-description" style={{textAlign:"center"}}>
        {/* <a target="_blank" rel="noopener noreferrer" href="https://editor.p5js.org/ywang70/full/xWfxB3nz_">Link to <i>Stupid Machine Learning</i></a> */}
        </p>
        <Iframe url="https://editor.p5js.org/ywang70/full/xWfxB3nz_"
          width="400"
          height="600"
          id=""
          className=""
          display="block"
          position="center"/>
        <hr className="artwork_page-line" />
        {/* <img src={example} alt="Lina Bo Bardi's & Anna Bella Beiger's works" className="artwork_page-image" />
        <br/><br/>
        <p className="artwork_page-description">
          Resembling this idea, here, I played with the shape of Chinese characters by filling them with English. So how does it work?
        </p>
        <hr className="artwork_page-line" />
        <p className="artwork_page-description">
        <div className="textIndent"><br/> 1. Listen to songs by <i>Chen Li 陈粒</i>-- a singer that really speaks to me.</div>
        <div className="textIndent"> 2. When listening to her song, randomly pick a word form the current line and write them down in calligraphy in a formal, traditional way.</div>
        <div className="textIndent"> 3. Do so until the whole page is filled. </div>
        <div className="textIndent"> 4. *Interesting Part* Cover the calligraphy with a semi-transparent paper, read the word, make meaning of it, and write what I think about in English. </div>
        <div className="textIndent"> 5. Continue writing in English, cover the whole Chinese character by filling in small words in English.</div>
        </p>
        <hr className="artwork_page-line" />
        <br/>
        <p className="artwork_page-description">
          Multiple layers of personal meaning and reflection were thus presented: my handwriting in Chinese & English; words from songs that I echo with; 
          my thoughts on the words; writing, rewriting, and overwriting my thoughts.
        </p>
        <p className="artwork_page-description">
          It's a beautiful piece, as the Chinese orange characters are like drop down shadows.
        </p>
        <p className="artwork_page-description">
          I love the process of writing and freely manipulating the strokes in different shapes for aesthetic appearances. Writing is also very de-stressing. 
          I guess part of the reason why I chose Art History + CS is that I really can't give up the sentimental part of myself, doing things with hands, appreciating things.
        </p> */}


      </span>
    </section>

  )
}

export default StupidML;