import './project_page.css';

import conf_mtx_wordcloud from '../../../assets/projects/bttai/conf_mtx_wordcloud.png';
import approach from '../../../assets/projects/bttai/approach.png';
import two_model_comparison from '../../../assets/projects/bttai/2model_comparison.png';
import NYBG_data_snippet from '../../../assets/projects/bttai/NYBG_data_snippet.png';
import style_transfer_me from '../../../assets/gallery/digital/style_transfer.png';

const BTTAI = () => {
    return (
        <section className="project section">
        <h2 className="section_title project-header">Break Through Tech AI</h2>
        <span className="section_subtitle project-header">Apply Machine Learning on Bat Fungus Detection & Plant Speciman Classification</span>
        <img src={conf_mtx_wordcloud} alt="Word Cloud of Fungus" className="project_title-image" />
        <span className="project-content">

            {/* =========== Intro ============*/}
            <p className="project-description">
                From Summer 2023 - Spring 2024, I participated in the <a target="_blank" rel="noopener noreferrer" href="https://www.breakthroughtech.org/programs/the-ai-program/"><i>Break Through Tech AI @ MIT</i></a>, where I took the Machine Learning (ML) Foundation course and applied ML in 2 projects
                -- <a target="_blank" rel="noopener noreferrer" href="https://github.com/yuhanwww/Bat-Detection-Model">bat fungus detection</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/yuhanwww/BTTAI-NYBG-Kaggle-Competition">NYBG plant classification</a>.
                <br/><br/>
                The year-long program allowed me to gain essential knowledge in ML and apply ML in multiple fields, which also led to my reflection on AI & technology in general.
            </p>
            <hr className="project-line" />

            {/* =========== Bata Detection ============*/}
            <p className="project-title">
                Bat Detection
            </p>
            <p className="project-description">
                White Nose Syndrome (WNS) is a fungal disease that infects skin of the muzzle, ears, wings of hibernating bats and has ravaged North American bat populations. 
                This project aimed to understand the outlook for bat population decline in North America due to WNS, use machine Learning models to predict what features signal population decline, and so to provide insight to guide efficient bioengineered solutions to combat WNS for Biointerphase.
            </p>
            <p className="project-description">
                In the project, we struggled finding enough data for Bat Fungus & WNS detection. Combining 3 datasets from USGS, we used an NLP model and then a Random Forest model. The final result showed a disconnection, that detecting WNS-fungus positive does not directly link to getting WNS. 
                Beyond the actual result, we gained lots of insights on 
                <br/><br/>how different ML models function 
                <img src={two_model_comparison} alt="NLP & Random Forest Project Comparison" className="project-image" />
                and project management.
                <img src={approach} alt="Project Timeline Overvieew" className="project-image" />
            </p>
            <p className="project-description">Check out the <a target="_blank" rel="noopener noreferrer" href="https://github.com/yuhanwww/Bat-Detection-Model">Bat Detection Github Repo</a> for full record~</p>
            <hr className="project-line" />

            {/* =========== Plant Classification ============*/}
            <p className="project-subtitle">
                Plant Classification
            </p>
            <p className="project-description">
                This is the Spring Kaggle Competition from the BTTAI program. I was in <i>Team Orchid</i> and we won the <i>Most Submission</i> award by the end.
                We were asked to classify plant specimen from the <a target="_blank" rel="noopener noreferrer" href="nybg.org">New York Botanic Garden</a>.
                Our model reached 97.7% accuracy in the end. Below is a snippet from the plant specimen data:
            </p>
            <img src={NYBG_data_snippet} alt="Plant Data Snippet" className="project-image" />
            <br/>
            <p className="project-description">Check out the <a target="_blank" rel="noopener noreferrer" href="https://github.com/yuhanwww/BTTAI-NYBG-Kaggle-Competition">BTTAI-NYBG-Kaggle-Competition Github Repo</a> for full record~</p>
            <hr className="project-line" />

            {/* =========== CSC 370 ============*/}
            <p className="project-subtitle">
                ML, Vision, AI
            </p>
            <p className="project-description">
                In my junior year, beyond BTTAI, I took a <i>Deep Learning</i> course and a <i>Computer Vision</i> course. 
                Both of them inspired me to explore the interdisciplinary applications of ML, for example in art.
                I made a <a href="#/project/art_recognizer"><i>Mystery Art Recognizer</i></a> and applied a <i>Style Transfer</i> model, which led to the following production lol:
                <img src={style_transfer_me} alt="Style-transferred me" className="project-image" />
                My grown understanding on AI also led to my artwork <a href=""><i>Stupid Machine Learning</i></a> reflecting on people's use of AI as well as an <a href="/#/project/thesis">honor thesis</a> on AI Trust.
            </p>
            <p className="project-description">
                I am so grateful to be one of the people who know a bit about AI, as when I was young, I often wondered who knew how complex machines like TV or the internet works.
                AI is the current disruptive tool, and I am glad I know a bit about it so I'm not completely freaked out by its power.
                That being said, I hope my work can help expand a little knowledge on AI, or improve people's experience when using it.
            </p>

        </span>
        </section>

    )
}

export default BTTAI;