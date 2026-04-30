import React from 'react';

import prototype from '../../../assets/projects/edtech/edtech.gif';
import affinity from '../../../assets/projects/edtech/affinity.png';
import persona from '../../../assets/projects/edtech/persona.jpg';
import ux_storyboard from '../../../assets/projects/edtech/ux_storyboard.png';
import interface_storyboard from '../../../assets/projects/edtech/interface_storyboard.png';
import interface_storyboard_improved from '../../../assets/projects/edtech/interface_storyboard_improved.png';


import CS325_Team_JAYC_Poster_pdf from '../../../assets/files/hci/CS325_Team_JAYC_Poster.pdf';

const EdTech = () => {
  return (
    <section className="project section">
      <h2 className="section_title project-header">W3School Reimagined</h2>
      <span className="section_subtitle project-header">Aapplying learning science principles to boost motivation in OG online coding classroom</span>
        <img src={prototype} alt="Final Figma Prototype gif showcase" className="project_title-image" />
        <span className="project-content">

          {/* =========== A. Background & Pain Points =========== */}
          <hr className="project-line" />
          <br/>
          <p className="project-description"><strong>Background & Pain Points</strong></p>
          <p className="project-description">
            W3Schools as the widely used OG online cooding classroom is well-known for its resourceful yet overwhelming interface.
          </p>
          <p className="project-description">
            To guide our redesign, we first critiqued the website through embodied experiences and conducted interviews with our target users. 
            Then, we conducted affinity programming to elicit themes as design guidelines. Accordingly, we distilled 4 pain points:
          </p>
            <ul className="project-description"  style={{paddingLeft: '2rem'}}>
              <li>•   Lack of instruction for interaction</li>
              <li>•   Lack of clear guideline for navigation</li>
              <li>•   Boring interactions</li>
              <li>•   Confusing purpose for tutorials and exercises</li>
            </ul>
          <img src={affinity} alt="Affinity Diagram" className="project_page-image"/>
          <p className="project-subdescription">
            Affinity Diagram to problem space, feedback on features, and suggestions
          </p>
          <br/>

          {/* =========== C. Design Inspirations =========== */}
          <hr className="project-line" />
          <br/>
          <p className="project-description"><strong>Learning Theory & Design Ideation</strong></p>
  
          <img src={persona} alt="Affinity Diagram" className="project_page-image"/>
          <p className="project-subdescription">
            Affinity Diagram to problem space, feedback on features, and suggestions
          </p>
          <img src={ux_storyboard} alt="Affinity Diagram" className="project_page-image"/>
          <p className="project-subdescription">
            Affinity Diagram to problem space, feedback on features, and suggestions
          </p>
          <img src={interface_storyboard} alt="Affinity Diagram" className="project_page-image"/>
          <p className="project-subdescription">
            Affinity Diagram to problem space, feedback on features, and suggestions
          </p>

         {/* =========== D. Low & Mid-Fi Prototyping =========== */}
          {/* <hr className="project-line" />
          <p className="project-description"><strong>D. Low & Mid-Fidelity Prototyping</strong></p>
  
          <p className="project-description">
            Key pivots: removed pre-defined note categories (confusing to users) and replaced "Endless Mode" with a user-selectable difficulty tier.
          </p>  */}
          {/* ── E. User Testing & Final Prototype ── */}
        {/* <hr className="project-line" />
        <p className="project-description"><strong>E. User Testing & Final Prototype</strong></p>
        <p className="project-description">
          A second round of contextual inquiries on the high-fi prototype focused on the league system and the Add-to-Note feature.
        </p>
 
        <p className="project-description"><strong>Feature 5: Add to Note — Community Function Annotation</strong></p>
        <p className="project-description">
          Users bookmark functions with their own code modifications and callouts, and browse community notes on the same function — turning W3Schools into a hybrid lookup tool and lightweight Stack Overflow. Grounded in intrinsic value (a handbook curated to your own projects) and Vygotsky's ZPD (beginners scaffold off expert notes).
        </p> */}

        {/* =========== Final Feedback ============*/}
        <hr className="project-line" />
        <br/>
        <p className="project-description"><strong>Final Touch & Reflection</strong></p>
        <p className="project-description">
          Based on feedback from contextual inquiry and LST experts, the final prototype needs two additional touches. 
          First, the design language of the prototype can still be more aligned towards the real website. This requires the whole team to settle down on a design language and implement throughout the polished path.
          Second, for my feature on note community, the emphasis of this feature to share notes or form a community is unclear. A simpler and more straightforward definition of the feature would help users better conceptualize and leverage this feature to motivate learning. 
        </p>
        <p className="project-description">
          Before joining this class, I was choosing between LST and HCI as my concentration. Having studied widely about learning science theories and deeply about motivation, I excitedly decide to settle down on LST. 
          Reading about learning science literature was very inspiring, espeically reflecting on my own and my friends' learning models.
          I enjoy the practice of applying ed tech principles in system design. While I have prior experience with user research and prototyping,the combination of contextual inquiries and learning science groundings forms a great user research protocol.
        </p>

      </span>
    </section>
  )
}

export default EdTech;