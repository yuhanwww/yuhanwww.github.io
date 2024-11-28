import React from 'react';
import './artwork_page.css';
import ArtworkSlider from './artwork_slider';

import nurses_have_hair from '../../../assets/artworks/nurses_have_hair/nurses_have_hair.png';
import nhh_process from '../../../assets/artworks/nurses_have_hair/nhh_process.JPG';
import shan_xia_back from '../../../assets/artworks/nurses_have_hair/shan_xia_back.JPG';
import shan_xia_front from '../../../assets/artworks/nurses_have_hair/shan_xia_front.JPG';
import shaving from '../../../assets/artworks/nurses_have_hair/shaving.JPG';

const NursesHaveHair = () => {

  const nurses_have_hair_images = [
    { src: nurses_have_hair, alt: "Nurses Have Hair", description: "Nurses Have Hairv" },
    { src: shan_xia_front, alt: "Shan Xia, a nurse who voluntarily shaved her hair", description: "Shan Xia, the nurse who voluntaily shaved her hair" },
    { src: shan_xia_back, alt: "Shan Xia walking away, with her name on the isolation gown", description: "Shan Xia walking away, with her name on her isolation gown" },
    { src: shaving, alt: "Nurses being shaved hair", description: "Nurses being shaved hair with a camera shooting" },
    { src: nhh_process, alt: "Nurses Have Hair Process Collage", description: "Nurses Have Hair Process Collage" },
  ];

  return (
    <section className="artwork_page section">
    <h2 className="section_title artwork_page-header">Nurses Have Hair</h2>
    <span className="section_subtitle artwork_page-header">A clay figurine work reflection on nurses shave hair incident during Covid-19</span>
    
    {/* Image Gallery */}
    <div className="artwork_page-gallery">
      <ArtworkSlider
        images={nurses_have_hair_images}
      />
    </div>
    <br/>
    
    <span className="artwork_page-content">
    
      <p className="artwork_page-description">
        During Covid-19, a nurse in China, Shan Xia 单霞, voluntarily shaved her hair to save time and efforts from cleaning her hair to cure patients.
      </p>
      <p className="artwork_page-description">
        Her voluntary sacrifice was widely praised, which was a brave and determinate choice. 
        However, a city government decided to mimic this news by shaving many female nurses' hair, with press shooting the scene.
        It is unacceptable to use authority and force nurses to shave their hair, which has no relation to their professional ability and efficiency.
        Covid-19 was such a pressing issue, and it was shocking that the government chose to focus on propaganda over actual fighting against the disease.
        I was furious and desperate about the news.
      </p>
      <img src={nurses_have_hair } alt="Boy Running from His Mother's Talon" className="artwork_page-image" />
      <p className="artwork_page-description">
        <br/>Justaposing <i>Shan Xia's</i> determinate walking and nurses' coerced, performative shaving scene, I hope people to see the sarcastic nature of the show that the government put on.
        All the nureses were brave and remarkable, but they have the right to choose their personal appearance, and it is absolutely intolerable to put them on show for meaningless propaganda. 
      </p>
    

    </span>
  </section>
    
  )
}

export default NursesHaveHair;