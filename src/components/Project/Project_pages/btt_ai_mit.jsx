import './project_page.css';
import ReactEmbedGist from 'react-embed-gist';

import arrow from '../../../assets/icons/arrow.svg';
import conf_mtx_wordcloud from '../../../assets/projects/bttai/conf_mtx_wordcloud.png';
import approach from '../../../assets/projects/bttai/approach.png';
import two_model_comparison from '../../../assets/projects/bttai/2model_comparison.png';
import NYBG_data_snippet from '../../../assets/projects/bttai/NYBG_data_snippet.png';

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

            {/* =========== Final Thoughts ============*/}
            {/* <p className="project-subtitle">
            Final Thoughts
            </p>
            <p className="project-description">
            Does ML recognize artworks' origin culture? YES. Does ML recognize mystery artworks? Maybe. 
            The takeaway of this study, opposite to what I expected on art insight, was more about how ML work.
            I realized that ML's prediction is significantly dependent on the dataset distribution, and so it is inclined to predict the categories with the most representation.
            It seems like a probability problem at this moment, not an art historical analysis. 
            But still, it was an exciting trial with good insights on ML.
            </p>
            <p className="project-description">
            A similar project I am currently invovled in is using ML to prove Guerilla Girl's artwork. You can learn more through <a target="_blank" rel="noopener noreferrer" href="https://fangyizhu.github.io/guerilla-ai/">link to <b>Guerilla AI</b></a>.
            <br />
            An artwork reflecting on this idea where users need to fix a dataset to train a ML is stored on <a target="_blank" rel="noopener noreferrer" href=""><i><b>Stupid Machine Learning</b></i> page</a>.
            </p> */}

        </span>
        </section>

    )
}

export default BTTAI;