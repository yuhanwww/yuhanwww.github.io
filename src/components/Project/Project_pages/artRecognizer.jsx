import React from 'react';
import './project_page.css';

import two_model_vis_bar from '../../../assets/projects/artRecognizer/2model_vis_bar.png';
import two_model_vis_conv from '../../../assets/projects/artRecognizer/2model_vis_conf.png';
import three_model_vis_bar from '../../../assets/projects/artRecognizer/3cate_vis_bar.png';
import img_augmentation from '../../../assets/projects/artRecognizer/Image_Augmentation.png';
import sample_from_data from '../../../assets/projects/artRecognizer/Sample_from_Data.png';
import model_snippet from '../../../assets/projects/artRecognizer/model_snippet.png'; 
import mystery_art_recognizer from '../../../assets/projects/artRecognizer/myster_art_recognizer.png'; 
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
            Convolutional Neural Network (CNN) is a subtype of Neural Networks that is mainly used for applications in image recognition. For the final project, I trained a CNN that recognizes artworks from ancient Near Eastern, Egyptian, Greek, and Roman styles that were introduced in the ARH 212 course. The training data of this CNN are pictures of artworks from those cultures. The label for the training data is the culture origin of the artworks in the images. The trained neural network was used to predict what culture a collection of mystery objects was from. The model’s performance was highly dependent on the data distribution on different categories, and the final results indicated Greek styled artworks’ high resemblance to both Egyptian and Roman styles.
        </p>
        <br/>
        {/* <img src={tripetala} alt="Example of Unrolled Tripetala" className="project-image" /> */}
        {/* <p className="project-subdescription">Example of Unrolled Tripetala, Delaunay Triangulation is applyed on the points on the plant to form "fronts" -- up & down vectors of the point relationship</p> */}
        <hr className="project-line" />

        {/* =========== Data ============*/}
        <p className="project-title">
          Data
        </p>
        <p className="project-description">
            Data used for this project comes from WikiArt, the MET collection, and several directly from Google search engine. WikiArt images were used for prototype testing, which is the “Final-Project-Prototype” file. It yields good accuracy, but the dataset is poorly balanced with poor resolution.
        </p>
        {/* <img src={sample_from_data} alt="Sample Data" className="project-image" /> */}
        {/* <p className="project-subtitle">
          Sample Data
        </p> */}
        {/* <img src={example_disk} alt="Example Disk Stacking Model" className="project-image" /> */}
        {/* <p className="project-subdescription">Example Disk Stacking Model</p>
        <p className="project-description">
          As you can see here, left is the bottom of a disk stacking, and right is the top. After stacking disks to the top, we will have a regular pattern. The top “front” of the model is consisted of points that forms up and down parastiches. The product of up and down vectors is the periodicity of this model.
        </p>
        <p className="project-subtitle">
          TDA from megatile
        </p>
        <p className="project-description">
          There is a limitation in our first approach. TDA studies the geometry of pointcloud, but since we are removing points to form a brave lattice, we might have removed features in the original pointcloud that is what TDA is interested in. To make sure we keep as many details as we can, we designed a second variation. A fact about the disk stacking model is that disks at the bottom of the model represent the early stage of plant growth, which is unstable and does not have a clear period. Based on this fact, we can create a “megatile” that is a power set of the points in the last period. Since a period of points have up and down vectors, we will create a up_vectors * down_vectors point cloud that is regular as well, and use TDA to measure the difference between the bottom disks with this regular pattern generated from the top disks. This variation allows us to preserve geometric features of the disk model.
        </p> */}
        {/* <img src={megatile} alt="TDA from Megatile explanation" className="project-image" /> */}
        {/* <p className="project-subdescription">Megatile Example: we form a power set of the up and down vectors, and then generate points accordingly as 1 megatile. In this TDA variation, we use 4*4 megatile as the regular pattern to compare with the original model.</p>
        <p className="project-subtitle">
          Delaunay Triangulation
        </p>
        <p className="project-description">
          The last variation is different from the previous 2, where we compare the original pointcloud to a regular pattern, and see how different they are. Though we have preserved a good amount of geometric features, we are still not looking at the entire model. Because of this, we decided to apply delaunay triangulation of the whole disk stacking model, and then record the differences between the sides and angles of whole the triangulation. This would take the whole pointcloud into consideration.
        </p>
        <hr className="project-line" /> */}


      </span>
    </section>
    
  );
};

export default ArtRecognizer;
