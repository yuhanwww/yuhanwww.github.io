import React from 'react';

import prototype from '../../../assets/projects/edtech/final_prototype.gif';
import affinity from '../../../assets/projects/edtech/affinity.png';
import persona from '../../../assets/projects/edtech/persona.jpg';
import ux_storyboard from '../../../assets/projects/edtech/ux_storyboard.png';
import interface_storyboard from '../../../assets/projects/edtech/interface_storyboard.png';
import lowfi_improv from '../../../assets/projects/edtech/lowfi_improv.png';
import midfi from '../../../assets/projects/edtech/mid-fi.gif';
import midfi_improv from '../../../assets/projects/edtech/midfi_improv.png';
import bonus from '../../../assets/projects/edtech/bonus.gif';
import app from '../../../assets/projects/edtech/app.gif';

const EdTech = () => {
  return (
    <section className="project section">
      <h2 className="section_title project-header">W3School Reimagined</h2>
      <span className="section_subtitle project-header">Applying learning science principles to boost motivation in OG online coding classroom</span>
      <img src={prototype} alt="Interactive Demo of Final Figma Prototype gif showcase" className="project_title-image" />
      <span className="project-content">

        {/* =========== A. Background & Pain Points =========== */}
        <hr className="project-line" />
        <br/>
        <p className="project-description"><strong>Background & Pain Points</strong></p>
        <p className="project-description">
          W3Schools as the widely used OG online cooding classroom is well-known for its resourceful yet overwhelming interface. Many exercises are static and repetivie, making them prone to rote memorization rather than active learning.
          Stemming from our embodied experiences, we set undergraduate students as our target users who want to self-learn and strengthen coding skills to increase competency and enrich their portfolio.
          We want to stimulate learner's MOTIVATION through applying learning theories in the website redesign, facilitating more organic, self-guided engagement in this website for sustainable, life-long learning.
        </p>
        <img src={persona} alt="Persona" className="project_page-image"/>
        <p className="project-subdescription">
          Persona of our target user
        </p>
        <br/>

        {/* =========== B. UX Research =========== */}
        <hr className="project-line" />
        <br/>
        <p className="project-description"><strong>UX Research</strong></p>
        <p className="project-description">
          To guide our redesign, we first critiqued the website to enlist pain points and feature ideation. From here, we interviewd 5 target users to further solidify our feature ideation.
          Then, we conducted affinity programming to elicit themes as design guidelines. Accordingly, we distilled 4 improvement points:
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
        <p className="project-description"><strong>Design Inspirations</strong></p>

        <p className="project-description">
          In addition to the above pain points, we also referred to learning science principles and literature on motivation to further consolidate our features.
        </p>
        <p className="project-description">
          My feature is <i>W3 Heap</i>, a Note Community (aka stack overflow in w3school). 
        </p>
        <p className="project-description">
          From <strong>empirical experience</strong>, novice users learn coding through mimicking, and experienced users also leverage shared codes from more seasoned users' sharing for improved efficiency, storage, aesthetics, and more.
          <br/>
          From <strong>learning science perspective</strong>, this feature combines intrinsic value & efficacy expectancy. <d className="project-subdescription">[1] </d>
          The note community is curated based on user’s personal need and can uniquely facilitate user for their own projects. <d className="project-subdescription">[3] </d> 
          Sharing notes in the community and forming interactions also forms a learning-oriented environment within the website, which further prones users' motivation. <d className="project-subdescription">[2] </d> 
          Putting the functions into a handbook and curate it is also a rewarding process as users can see how their skills grow, refer back with good efficiency, and have longer-term retention.<d className="project-subdescription">[1] </d> 
          <br/><d className="project-subdescription">[1] Ambrose et al. <i>How learning works: Seven research-based principles for smart teaching.</i> John Wiley & Sons, 2010.</d>
          <br/><d className="project-subdescription">[2] Vygotsky, L. S. Mind in society: The development of higher psychological processes, 1978. </d>
          <br/><d className="project-subdescription">[3] National Academies of Sciences <i>How people learn II: Learners, contexts, and cultures.</i> National Academies Press, 2018.</d>
        </p>
        <p className="project-description">
          Putting all together, <i>W3 Heap</i> allows users to take notes and curate their library of functions with modified codes & callouts, as well as other's notes. This features facilitates users' active and reflective learning, as well as long term retention.
        </p>
        <p className="project-subdescription">
          <a href={ux_storyboard} target="_blank" rel="noopener noreferrer" >Click here to view the UX Storyboard of this feature</a>
        </p>

        {/* =========== D. Low & Mid-Fi Prototyping =========== */}
        <hr className="project-line" />
        <br/>
        <p className="project-description"><strong>Low & Mid-Fidelity Prototyping</strong></p>

        <p className="project-description">
          With the feature structure set, I started from low fidelity prototype through an interface storyboard.
        </p> 

        <img src={interface_storyboard} alt="Low fidelity Interface storyboard" className="project_page-image"/>
        <p className="project-subdescription">
          Initial Interface storyboard
        </p>

        <p className="project-description">
          I conducted a contextual inquiry with a target user through this low-fidelity storyboard. Users liked the core concept of this feature.
          <br/>Howerver, they also pointed out 2 confusing aspects: they don't see the value to add a date for the note, and that they want multiple highlights option in one code block.
        </p>

        <img src={lowfi_improv} alt="Screenshot of low fidelity Interface Improvement" className="project_page-image"/>
        <p className="project-subdescription">
          Interface change before & after
        </p>

        <p className="project-description">
          Based on this feedback, I removed the add date option and added multiple highlights representation in the interface.
          <br/> Following this step, I developed a mid-fi prototype in Figma for funtionality testing.
        </p>

        <img src={midfi} alt="Interactive Demo of mid fidelity Prototype in Figma" className="project_page-image"/>
        <p className="project-subdescription">
          Mid-fi Interface Prototype
        </p>

        <p className="project-description">
          To further polish this feature's detailed functionalities, I performed conducted a 2-user studies through their think-aloud testing. 
          Both users were able to navigate through this feature easily and appreciated the notebook + StackOverflow concept. 
          <br/><br/>
          Similarly, they also contributed improvement points:
          <ul style={{paddingLeft: '2rem'}}>
            <li>1.   The <i>category</i> function is confusing as users are unsure if this category is for languageo / purpose / or what purpose.</li>
            <li>2.   To further mimic the StackOverflow forum, the users desire similar options to indicate their support or bookmark of others' notes.</li>
          </ul>
        </p>

        <img src={midfi_improv} alt="Screenshot of Mid fidelity improved version" className="project_page-image"/>
        <p className="project-subdescription">
          Mid-fi Interface Prototype
        </p>

        <br/>

        {/* =========== E. User Testing & Final Prototype =========== */}
        <hr className="project-line" />
        <br/>
        <p className="project-description"><strong>User Testing & Final Prototype</strong></p>

        <p className="project-description">
          Finally, the Figma prototype was taken to high-fi in Figma as well.
          While there aren't many changes on this feature because it's in Figma already, more efforts were put into seamlessly integrating 5 features within the team.
          <br/><br/> However, there is a surprise bonus feature ;)
        </p>

        <img src={bonus} alt="Interactive Demo of bonus feature in Figma -- dynamic adding list language from breadcrumb top menu to the left menu and ADs-free right menu" className="project_page-image"/>
        <p className="project-subdescription">
          Bonus Feature: Dynamic language menu & No more ADs on the right!
        </p>

        <p className="project-description">
          A final round of contextual inquiry was performed on the final prototype, meanwhile the presentation of this project in EdTech class also gathered good feedback from now all LST experts in the room.
        </p>

        <p className="project-description">
          Based on feedback from contextual inquiry and LST experts, the final prototype needs two additional touches. 
          First, the design language of the prototype can still be more aligned towards the real website. This requires the whole team to settle down on a design language and implement throughout the polished path.
          Second, for my feature on note community, the emphasis of this feature to share notes or form a community is unclear. A simpler and more straightforward definition of the feature would help users better conceptualize and leverage this feature to motivate learning. 
        </p>

        <img src={prototype} alt="Interactive Demo of the final polished W3 Heap note community feature" className="project_page-image"/>
        <p className="project-subdescription">
          Final Polished W3 Heap Feature
        </p>

        <p className="project-description">
          And therefore, the final feature was modified to further realistically reflect the original W3 School, while the <i>W3 Heap</i> feature was finalized with clear functionalities. 
        </p>

        <br/>

        {/* =========== Individual Project =========== */}
        <hr className="project-line" />
        <br/>
        <p className="project-description"><strong>Individual Project</strong></p>

        <p className="project-description">
          For individual assignment on micro-learning, I developed a quick app about film development.
          <br/><br/> I've been shooting in analogue camera since last semester of cTollege, and film development is the first amazingly fun part of what you do after a film is shot.
          To share this fun with more people, I created thia app as a fast lookup for anyone to quickly get an overview of the process or to get a quick refresher.
          <br/><br/> The user flow is divided into 3 sections: before development; during development; and after development -- essentially following the real development stages.
          Before starting, the user can access a quick overview of the lesson, with expandable bulletpoints of each section's content, and the option to jump to any stage.
          After each section, there's a fast check-in question that asks really important question about the previous stage to ensure that the user actually learned -- otherwise, <strong>the film can be exposed and EVERYTHING DISAPPEARS!!</strong>
        </p>

        <img src={app} alt="Interactive Demo of micro-learning App Figma Prototype about film development" className="project_page-image" style={{maxHeight: '60vh'}}/>
        <p className="project-subdescription">
          micro-learning on film development App prototype
        </p>

        <p className="project-description">
          The page has a simple structure: (from top to bottom) a progress bar with icons visualizing each development stage's instruments, the content, and a button to continue or return.
          <br/><br/>Before this assignment, I thought I had good knowledge of Figma -- I was wrong. This assignment helps me gain such comprehensive understanding of how layout, component, and section works in Figma. I am able to make everything organized and simple, while also highly interactive and comprehensive.
          <br/>I'd say also, by making this micro-learning app, I had a little refresher on the film development process, as well as many fun fact / fundamental principles for film develoment :))
        </p>

        <br/>

        {/* =========== Final Feedback ============*/}
        <hr className="project-line" />
        <br/>
        <p className="project-description"><strong>Final Reflection</strong></p>
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