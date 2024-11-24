import './project_page.css';
import ReactEmbedGist from 'react-embed-gist';

import arrow from '../../../assets/icons/arrow.svg';
import conf_mtx_wordcloud from '../../../assets/projects/bttai/conf_mtx_wordcloud.png';



const BTTAI = () => {
    return (
        <section className="project section">
        <h2 className="section_title project-header">Break Through Tech AI</h2>
        <span className="section_subtitle project-header">Apply Machine Learning on Bat Fungus Detection & Plant Speciman Classification</span>
        <img src={conf_mtx_wordcloud} alt="Word Cloud of Fungus" className="project_title-image" />
        <span className="project-content">

            {/* =========== Intro ============*/}
            <p className="project-description">
            From Summer 2023 - Spring 2024, I participated in the <a target="_blank" rel="noopener noreferrer" href="https://www.breakthroughtech.org/programs/the-ai-program/"><i>Break Through Tech AI @ MIT</i></a>, where I took the Machine Learning (ML) Foundation course and applied ML in 2 projects -- bat fungus detection and NYBG plant classification.
            <br/><br/>
            The year-long program allowed me to gain essential knowledge in ML and apply ML in multiple fields, which also led to my reflection on AI & technology in general.
            </p>
            <hr className="project-line" />

            {/* =========== Bata Detection ============*/}
            <p className="project-title">
            Bat Detection
            </p>
            <p className="project-description">
            For data collection, I used <a target="_blank" rel="noopener noreferrer"href="https://www.wikiart.org/"><i>WikiArt</i></a> and the <a target="_blank" rel="noopener noreferrer"href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access"><i>MET (the Metropolitan Museum of Art)</i> collection</a>. <i>WikiArt</i>'s have fewer images, and they visually appear in different settings under different shooting conditions with the <i>MET</i> collection ones. 
            Therefore, the final data solely came from the <i>MET Collection</i>.
            </p>
            <p className="project-description">
            Four main categories were chosen: Near East, Egyptian, Greek, and Roman, because these 4 were the ones coverd in the art history course. While there are abundant Greek and Egyptian artworks, Near East and Roman ones are fewer. 
            Therefore, I included 3 ways of distributing the data. Greek & Roman ones were combined in the 2nd distribution because of their proximity, and Near East was excluded from the 3rd distribution because there were just too few. 
            </p>
            {/* <img src={data_distribution} alt="Data Distribution Table" className="project-image" /> */}
            <p className="project-subdescription">
            Data Distribution table
            </p>
            <p className="project-description">
            <br/>For the “Mystery Art Object Reconition” part, I used the images in “Mixed_Categories”, which are images that have multiple styles as labels or don’t have a settled style from <i>MET</i>.
            </p>
            <p className="project-description">
            The picutres were processed to the same size with labels as shown on top of the page. In addition, data augmentation was incorporated to prevent overfittting, given a small dataset.
            </p>
            {/* <img src={img_augmentation} alt="Image Augmentation Example" className="project-image" /> */}
            <p className="project-subdescription">
            Data Augmentation Example
            </p>
            <hr className="project-line" />

            <ReactEmbedGist gist="yuhanwww/1ae0dcfd17641c8330489c477d4a6aa1"/>


            {/* =========== Evaluation & Results ============*/}
            <p className="project-subtitle">
            Plant Classification
            </p>
            <p className="project-description">
            <b>Training Result</b><br/>The model overall reached an accuracy around 60%, which is not as ideal. Because the training takes much time, and the artwroks from ancient cultures indeed have many similar features, it is hard to know whether this is a good stopping point, 
            or there are some potential places to work on to improve the model. The model’s performance at this stage seems to really be dependent on the data available for one category. 
            </p>
            <p className="project-description">
            Results of 2 models on the original dataset:
            </p>
            {/* <img src={two_model_vis_bar} alt="2 Bar Plot showing Model Training Result from 2 Models" className="project-image" /> */}
            {/* <img src={two_model_vis_conv} alt="2 Convolutional Matrix showing Model Training Result from 2 Models" className="project-image" /> */}
            <p className="project-description">
            Then coming to different categorizations, it definitely helps to improve the model’s performance. Deleting Roman yields an 80% accuracy for Greek; and building a balanced dataset yields a 67% overall accuracy rate.I think it will be more interesting to dig deeper into the model and find out what features of the images lead to its prediction at this moment.
            </p>
            <p className="project-description">
            Results of Tensorflow model on 3 different categorizations:
            </p>
            {/* <img src={three_model_vis_bar} alt="3 Bar Plots showing Model Training Result from 2 Models" className="project-image" /> */}
            <br/>
            <p className="project-description">
            <b>Mystery Object Prediction</b><br/> Finally coming to the prediction, the model definitely is more confident to (or prefer to) predicting Greek and Egyptian, as it never predicts the artwork to be Roman even though it is trained on 4 categories.
            </p>
            {/* <img src={mystery_pred} alt="2 Bar Plot showing Model Training Result from 2 Models" className="project-image" /> */}
            <p className="project-description">
            Greek and Egyptian are the two that are predicted the most, while Roman is never predicted as the highest probable culture origin. To officially implement the model in real art recognition, more work is needed to decipher how the model predicts, which will more effectively provide insights about what features link to what prediction.
            </p>
            <hr className="project-line" />

            {/* =========== Final Thoughts ============*/}
            <p className="project-subtitle">
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
            </p>

        </span>
        </section>

    )
}

export default BTTAI;