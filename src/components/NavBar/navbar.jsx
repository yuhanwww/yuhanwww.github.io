import React,{ useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/icons/logo.png';
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
        
            if (window.scrollY === 0) {
                currentSection = 'intro';
            } else {
                sections.forEach((section) => {
                const sectionTop = section.offsetTop - 50; // Adjust for navbar height
                const sectionHeight = section.clientHeight;
        
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
                });
            }
        
            console.log(`Active Section: ${currentSection}`);
            setActiveSection(currentSection);
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        
    return (
        <header className="navbar">
            <nav className="nav container">
                <a href="/" className="nav_logo">
                    <img src={logo} alt="YW" className="nav_logo-img" />
                </a>

                <div className= "nav_menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <HashLink
                                sx={{ display: 'flex', alignItems: 'center'   }}
                                className={`nav_link ${activeSection === 'intro' ? 'active-link' : ''}`}
                                to="/"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <i className="uil uil-user nav_icon"></i>
                                Home
                            </HashLink>
                        </li>

                        <li className="nav_item">
                            <HashLink
                                sx={{ display: 'flex', alignItems: 'center'   }}
                                className={`nav_link ${activeSection === 'project' ? 'active-link' : ''}`}
                                to="/#project">
                                <i className="uil uil-user nav_icon"></i>
                                Project
                            </HashLink>
                        </li>

                        <li className="nav_item">
                            <HashLink
                                sx={{ display: 'flex', alignItems: 'center'   }}
                                className={`nav_link ${activeSection === 'artwork' ? 'active-link' : ''}`}
                                to="/#artwork">
                                <i className="uil uil-user nav_icon"></i>
                                Artwork
                            </HashLink>
                        </li>

                    </ul>
                </div>

            </nav>
        </header>
    )
    }

    export default NavBar;