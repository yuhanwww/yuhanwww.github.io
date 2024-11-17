import React from 'react';
import emailIcon from '../../assets/icons/emailIcon.svg';
import linkedinIcon from '../../assets/icons/linkedinIcon.svg';
import githubIcon from '../../assets/icons/githubIcon.svg';
import cvIcon from '../../assets/icons/cvIcon.svg';
import { Link } from 'react-scroll'; 
import CV from '../../assets/files/CV_Yuhan_Wang.pdf';
import './intro.css';


const Icons = () => {
  return (
    <div className="socialIcons">
        <Link type='email' className="socialIcon" onClick={() => { window.location.href = 'mailto:ywang70@smith.edu'; } }><img src={emailIcon} alt='email' className="socialIconImg" /></Link>
        <Link type='linkedin' className="socialIcon" onClick={() => window.open('https://www.linkedin.com/in/yuhan-wang-yw/', '_blank', 'noopener,noreferrer')}><img src={linkedinIcon} alt='LinkedIn'className="socialIconImg" /></Link>
        <Link type='github' className="socialIcon" onClick={() => window.open('https://github.com/yuhanwww', '_blank', 'noopener,noreferrer')}><img src={githubIcon} alt='Github' className="socialIconImg" /></Link>
        <a href = {CV} target = "_blank" className="socialIcon" ><img src={cvIcon} alt='CV' className="socialIconImg" /></a>
    </div>
  )
}

export default Icons;