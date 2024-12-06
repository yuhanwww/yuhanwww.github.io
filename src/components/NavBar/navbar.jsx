import React,{ useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/icons/logo.png';
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
    /* ===== Active Section ===== */
    const [activeSection, setActiveSection] = useState('intro');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
        
            if (window.scrollY < window.innerHeight && location.pathname === '/') {
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
        
            // console.log(`Active Section: ${currentSection}`);
            setActiveSection(currentSection);
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    /* ===== Toggle Menu ===== */
    const [Toggle, showMenu] = useState(false);
        
    return (
        <header className="navbar">
            <nav className="nav container">
                <a href="/" className="nav_logo">
                    <img src={logo} alt="YW" className="nav_logo-img" />
                </a>

                <div className= {Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <HashLink
                                className={`nav_link ${activeSection === 'intro' && location.pathname === '/' ? 'active-link' : ''}`}
                                to="/"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                Home
                            </HashLink>
                        </li>

                        <li className="nav_item">
                            <HashLink
                                className={`nav_link ${activeSection === 'project' ? 'active-link' : ''}`}
                                to="/#project">
                                Project
                            </HashLink>
                        </li>

                        <li className="nav_item">
                            <HashLink
                                className={`nav_link ${activeSection === 'artwork' ? 'active-link' : ''}`}
                                to="/#artwork">
                                Artwork
                            </HashLink>
                        </li>

                        {/* <li className="nav_item">
                            <HashLink
                                className={`nav_link ${location.pathname === '/gallery' ? 'active-link' : ''}`}
                                to="/gallery">
                                Gallery
                            </HashLink>
                        </li> */}

                    </ul>

                    <i 
                        className="uil uil-times nav_close" 
                        onClick={ () => showMenu(!Toggle)}
                    ></i>
                </div>

            <div className="nav_toggle" onClick={ () => showMenu(!Toggle)}>
                <i className="uil uil-water"></i>
            </div>
            </nav>
        </header>
    )
    }

    export default NavBar;