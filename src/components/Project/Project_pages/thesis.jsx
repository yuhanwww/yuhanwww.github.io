import React from 'react';
import './project_page.css';

import ai_poster from '../../../assets/projects/thesis/ai_poster.png';
import thesis_proposal from '../../../assets/files/Thesis_Proposal-Yuhan_Wang.pdf';

const Thesis = () => {
  return (
    <section className="project section">
      <h2 className="section_title project-header">AI Trust in Higher Education</h2>
      <span className="section_subtitle project-header">Honor Thesis project surveying the perception and usage of AI in higher education.</span>
      <img src={ai_poster} alt="TDA on Phyllotaxis Poster" className="project_title-image" />
      <span className="project-content">

        {/* =========== Intro ============*/}
        <p className="project-description">
          The introduction of ChatGPT disrupted my college life in my junior year. 
          Seeing its powerful functions and how my peers successfully leveraged it to study efficiently influenced my "addiction" to it.
          However, it is apparent that professors or even the institution would not be happy about our misues of AI. Even for us individually, it's hard and very personal to measure when we are abusing AI in our everyday study.
          Therefore, this thesis study aims to target areas where instituional policy, faculty perception, and students' use are misaligned, which would inform us how we can form and facilitate ethical AI use.
          <br/><br/>
          Currently, we are gathering public opinion through anonymous feedback. Open questions we ask include:
          <div className="textIndent">
            <br/> "Where do you draw the line on AI use between cheating & non-cheating?"
            <br/> "How do you manipulate AI to generate non-AI-like output?"
            <br/> "How have you used AI in a way that you thought was borderline cheating?"
          </div>
          {/* <br/> "Where do you draw the line on AI use between cheating & non-cheating?" */}
          {/* <br/> "Where do you draw the line on AI use between cheating & non-cheating?" */}
        </p>
        <hr className="project-line" />

        {/* =========== Progress ============*/}
        <br/>
        <p className="project-description">
          To learn more about the project, you could check the following links:
          <div className="textIndent">
            <br/><a href = {thesis_proposal} target = "_blank" >Thesis Proposal</a>
            <br/><a target="_blank" rel="noopener noreferrer" href="https://circular-perigee-85a.notion.site/Thesis-118f380ecde4803cbb9ece1d95b9214c">Thesis Updates</a>
          </div>
        </p>
        <hr className="project-line" />

        {/* =========== Questions ============*/}
        <br/>
        <p className="project-description">
          Questions that come up:
          <br/><br/><b>For Students:</b>
          <div className="textIndent">
            <br/> What’s your way of using AI in assignments? Do you think they are plagiarism?
            <br/> Is there any policy on AI use that you are aware of from the honor code or from the course syllabus?
            <br/> How do you understand the institution’s opinion on AI use?
            <br/> Do you use AI differently for different assignments/tasks? 
            <br/> What is the difference between using a tutor and using AI?
            <br/> Why would use Ai instead of a tutor and vice versa - what elements affect this decision?
            <br/> If you knew you would not get "caught", how concerned are you with abusing AI?
          </div>
          <br/><br/><b>For Faculty:</b>
          <div className="textIndent">
            <br/> Is using generative AI in students’ assignment completion plagiarism?
            <div className="textIndent"><br/> If yes, why do they think it is plagiarism? Is using AI in any part of the assignment unacceptable? How is it different from referring to other’s articles and potentially coping with the same argument?</div>
            <div className="textIndent"> If not, to what extent is using AI in the assignment acceptable? What is the line between plagiarism and students’ own intellectual output? </div>
            <br/> Is the AI use policy included in the syllabus? What is included and what effect do you expect it to have?
            <br/> Do you use any methods to check if AI might be used in students’ assignments?
            <br/> What do you hope students gain from the assignments and how would using generative AI hinder/facilitate/influence their learning?
            <br/> Is there any institutional policy that you are aware of on AI use? How do you understand the institution’s opinion on AI use?
            <br/> Do you care if AI can produce an A level paper? Would that make you reconsider the assignment?
          </div>
          <br/><br/><b>For Honor Board:</b>
          <div className="textIndent">
            <br/> Is using generative AI in students’ assignment completion plagiarism?
            <div className="textIndent"><br/> If yes, why do they think it is plagiarism? Is using AI in any part of the assignment unacceptable? Why is it not explicitly written in honor code?</div>
            <div className="textIndent"> If not, to what extent is using AI in the assignment acceptable? What is the line between plagiarism and students’ own intellectual output? Who decides the extend and how is it measured?</div>
            <br/> Is there any case of using AI as violation of the honor code? What kind of defense do you hear?
            <br/> How would you approach a report on using AI as plagiarism?
          </div>
        </p>

      </span>
    </section>
  )
}

export default Thesis;