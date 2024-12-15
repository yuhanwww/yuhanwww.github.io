import React from 'react';

import key_features from '../../../assets/projects/hci/key_features.png';
import interfaces from '../../../assets/projects/hci/interfaces.png';
import wechat_prototype from '../../../assets/projects/hci/wechat_prototype.png';
import wireframe from '../../../assets/projects/hci/wireframe.png';
import prototype_qr from '../../../assets/projects/hci/prototype_qr.png';
import paper_prototype from '../../../assets/projects/hci/paper_prototype.png';


import CS325_Team_JAYC_Poster_pdf from '../../../assets/files/hci/CS325_Team_JAYC_Poster.pdf';
import Milestone_1 from '../../../assets/files/hci/Milestone_1.pdf';
import Milestone_2 from '../../../assets/files/hci/Milestone_2.pdf';
import Milestone_3 from '../../../assets/files/hci/Milestone_3.pdf';
import wechat_prototype_pdf from '../../../assets/files/hci/WeChat_improved.pdf';

const HCI = () => {
  return (
    <section className="project section">
      <h2 className="section_title project-header">InterNest</h2>
      <span className="section_subtitle project-header">An App Prototype for Internatioanl Community -- Final Project for CS 325 Human-Computer Interaction</span>
        <a href={CS325_Team_JAYC_Poster_pdf} target="_blank" rel="noopener noreferrer">
          <img src={key_features} alt="Poster for CS 325 Final Project" className="project_title-image" />
        </a>
        <span className="project-content">

          {/* =========== Intro ============*/}
          <p className="project-description">
            As an international student, it was natural for me to immediately think about the international community when the prompt for the final project for my HCI course was to design for a specific group. 
            An App for internationals, I hope, can help ease overwhelmingness from the US-centric context. 
            I will admit though, wireframing and desining has brought me so much fun during the busy application season. 
            View our Final Report on <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@tmle0/internest-empowering-international-students-together-22208a623e52">Medium</a>.
          </p>
          <hr className="project-line" />
          <br/>

          {/* =========== Prototype ============*/}
          <div class="row">
            <div class="column">
              <img src={prototype_qr} alt="QR Code to Prototype" className="project_page-image-qr"/>
              <p className="artwork_page-description">
                <a target="_blank" rel="noopener noreferrer" 
                  href="https://www.figma.com/proto/whmyiA7yTiJVOMYtopcm5t/CS-325-High-fidel-Prototype?node-id=7-448&node-type=canvas&t=ey2DlQ8IW6x8TXiI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A448">
                  Link to gain exclusive access of <i>InterNest</i> prototype
                  <br/>(recommended experience on mobile device)
                </a>
              </p>
            </div>
            <div class="column">
              <img src={interfaces} alt="QR Code to Prototype" className="project_page-image-"/>
            </div>
          </div>
        <br/>
        <hr className="project-line" />

        {/* =========== Research ============*/}
        <br/>
        <p className="project-description">
          We started our project by surveying international students' need as well as conducting literature review on works to support internatioanl students in their foreign study. 
          We reviewed 10 scholarly articles and discovered that <a target="_blank" rel="noopener noreferrer" href={Milestone_1}>community building</a> is proved to a strong support system for the international community. 
          While there are many social studies on this topic, there isn't much practice implementing methods to facilitate community engagement. 
        </p>
        <a target="_blank" rel="noopener noreferrer" href={wechat_prototype_pdf}>
          <img src={wechat_prototype} alt="WeChat Prototype" className="project_page-image"/>
          <p className="project-subdescription">
            Click to try an improved Improved Prototype of WeChat
          </p>
        </a>
        <p className="project-description">
          Since we have also found out that mobile app is a great platform for community building because of its versatility, we decided to build an app for the international students. 
          One exciting app we referred to is WeChat, which is a social platform widely popular especially for the Asian community, of which I have created a Balsamiq prototype. 
          We targeted, from WeChat, things we want to include that is lacking: professional guidance on things like visa help & cross-cultural recognition and representation.
        </p>
        <hr className="project-line" />

        {/* =========== Persona & Prototype ============*/}
        <br/>
        <p className="project-description">
          After qualitatively analyzing our survey result, we created <a target="_blank" rel="noopener noreferrer" href={Milestone_1}>2 personas</a> and <a target="_blank" rel="noopener noreferrer" href={Milestone_2}>4 tasks</a> to guide our prototype. 
          We initiated low-fidelity prototype for 3 modalities: App, Website, and Kiosk. 
          Each of them has its own strength, but based on our preliminary testing and insight from literature review, we decided to create the final prototype in App modality.
        </p>
        <img src={paper_prototype} alt="Paper Prototype of App" className="project_page-image"/>
        <hr className="project-line" />
        <br/>
        <p className="project-description">
          Informed by our low-fidelity prototype, we finally created our high-fidelity prototype in Figma. 
          We started from setting up a universal color theme, icon set, fonts, and other design details to facilitate an internal consistency. 
          Then we expanded our 4 main functions on 4 pages, guided by our tasks. 
          We performed <a target="_blank" rel="noopener noreferrer" href={Milestone_3}>user testing</a> on the final prototype and made improvements accordingly.
        </p>

      </span>
    </section>
  )
}

export default HCI;