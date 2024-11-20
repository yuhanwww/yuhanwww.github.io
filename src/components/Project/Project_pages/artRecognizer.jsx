import React from 'react';
import './project_page.css';
import ReactEmbedGist from 'react-embed-gist';

import two_model_vis_bar from '../../../assets/projects/artRecognizer/2model_vis_bar.png';
import two_model_vis_conv from '../../../assets/projects/artRecognizer/2model_vis_conf.png';
import three_model_vis_bar from '../../../assets/projects/artRecognizer/3cate_vis_bar.png';
import img_augmentation from '../../../assets/projects/artRecognizer/Image_Augmentation.png';
import sample_from_data from '../../../assets/projects/artRecognizer/Sample_from_Data.png';
import data_distribution from '../../../assets/projects/artRecognizer/data_distribution.png'
// import model_snippet from '../../../assets/projects/artRecognizer/model_snippet.png'; 
// import mystery_art_recognizer from '../../../assets/projects/artRecognizer/myster_art_recognizer.png'; 
import mystery_pred from '../../../assets/projects/artRecognizer/mystery_pred.png'; 

const ArtRecognizer = () => {
  return (
    <section className="project section">
      <h2 className="section_title project-header">Mystery Art Recognizer</h2>
      <span className="section_subtitle project-header">Final Project for MTH 353 Deep Learning Seminar & ARH 212 Ancient Cities & Sanctuaries</span>
      <img src={sample_from_data} alt="TDA on Phyllotaxis Poster" className="project_title-image" />
      <span className="project-content">

        {/* =========== Intro ============*/}
        <p className="project-description">
          When I first learned about machine learning (ML) and started to know how AI works, I was super excited and passionate to apply it on artwork recognition, as I am an Art History major.
          In my <i>Ancient Cultures & Sanctuaries</i> course, Prof. Barbara Kellum (my beloved advisor) often pulled up a "mystery" artwork and asked us to guess / analyze its cultural origin.
          Knowing how ML can recognize objects quantitatively, I wonder how it would handle artworks.
          <br/><br/>
          Does ML get it right? How does ML compare? Which parts does ML focus on? Is it the same with how an art historian would do? Can ML notice things we don't see on large scale?
        </p>
        <p className="project-description">
          You can view the project write-up on Github <a target="_blank" rel="noopener noreferrer"  href="https://github.com/yuhanwww/Mystery-Art-Object-Recognizer" >here~</a>
        </p>
        <hr className="project-line" />

        {/* =========== Data ============*/}
        <p className="project-title">
          Data
        </p>
        <p className="project-description">
        For data collection, I used <a target="_blank" rel="noopener noreferrer"href="https://www.wikiart.org/"><i>WikiArt</i></a> and the <a target="_blank" rel="noopener noreferrer"href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access"><i>MET (the Metropolitan Museum of Art)</i> collection</a>.
        </p>
        <p className="project-description">
          The final training dataset uses images from the MET collection. Images only have one category in the MET collection, and has at least 72*72 resolution. The Data Distribution is as follows:
        </p>
        <img src={data_distribution} alt="Data Distribution Table" className="project-image" />
        <p className="project-subdescription">
          Data Distribution table
        </p>
        <p className="project-description">
        <b>Testing</b><br/>For “Mystery Art Object Reconition”, I tested out with the images in “Mixed_Categories”, which are images that have multiple styles as labels or don’t have a settled style from the MET collection.
        </p>
        <p className="project-description">
          The picutres are processed to the same size with labels as shown on top of the page. In addition, data augmentation was incorporated to prevent overfittting, given that this is a small dataset.
        </p>
        <img src={img_augmentation} alt="Image Augmentation Example" className="project-image" />
        <p className="project-subdescription">
          Data Augmentation Example
        </p>
        <hr className="project-line" />


        {/* =========== Model ============*/}
        <p className="project-subtitle">Model</p>
        <p className="project-description">
          The models I used are CNNs, one Keras and one Tensorflow. (Keras is model 1, Tensorflow is model 2) Essentially they are the same thing, but the Keras one is more nuanced with multiple layers, while the Tensorflow one is really a high-level, basic CNN, with 3 hidden layers.
        </p>
        <ReactEmbedGist gist="yuhanwww/1ae0dcfd17641c8330489c477d4a6aa1"/>
        <br/>
        <hr className="project-line" />

        {/* =========== Evaluation & Results ============*/}
        <p className="project-subtitle">
          Evaluation & Results
        </p>
        <p className="project-description">
        <b>Training Result</b><br/>The model overall reached an accuracy around 60%, which is not as ideal. Because the training takes much time, and the artwroks from ancient cultures indeed have many similar features, it is hard to know whether this is a good stopping point, 
        or there are some potential places to work on to improve the model. The model’s performance at this stage seems to really be dependent on the data available for one category.
        </p>
        <p className="project-description">
          Results of 2 models on the original dataset:
        </p>
        <img src={two_model_vis_bar} alt="2 Bar Plot showing Model Training Result from 2 Models" className="project-image" />
        <img src={two_model_vis_conv} alt="2 Convolutional Matrix showing Model Training Result from 2 Models" className="project-image" />
        <p className="project-description">
          Then coming to different categorizations, it definitely helps to improve the model’s performance. Deleting Roman yields an 80% accuracy for Greek; and building a balanced dataset yields a 67% overall accuracy rate.I think it will be more interesting to dig deeper into the model and find out what features of the images lead to its prediction at this moment.
        </p>
        <p className="project-description">
          Results of Tensorflow model on 3 different categorizations:
        </p>
        <img src={three_model_vis_bar} alt="3 Bar Plots showing Model Training Result from 2 Models" className="project-image" />
        <br/>
        <p className="project-description">
        <b>Mystery Object Prediction</b><br/> Finally coming to the prediction, the model definitely is more confident to (or prefer to) predicting Greek and Egyptian, as it never predicts the artwork to be Roman even though it is trained on 4 categories.
        </p>
        <img src={mystery_pred} alt="2 Bar Plot showing Model Training Result from 2 Models" className="project-image" />
        <p className="project-description">
          Greek and Egyptian are the two that are predicted the most, while Roman is never predicted as the highest probable culture origin. To officially implement the model in real art recognition, more work is needed to decipher how the model predicts, which will more effectively provide insights about what features link to what prediction.
        </p>


      </span>
    </section>
    
  );
};

export default ArtRecognizer;
