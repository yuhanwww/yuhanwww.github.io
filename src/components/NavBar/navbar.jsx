import React,{ useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/icons/logo.png';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

            if (window.scrollY === 0) {
                // Ensure "Home" is active when at the top of the page
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
                            <a
                                href="#intro"
                                className={`nav_link ${activeSection === 'intro' ? 'active-link' : ''}`}
                            >
                                <i className="uil uil-user nav_icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a
                                href="#project"
                                className={`nav_link ${activeSection === 'project' ? 'active-link' : ''}`}
                            >
                                <i className="uil uil-file-alt nav_icon"></i>
                                Project
                            </a>
                        </li>

                        <li className="nav_item">
                            <a
                                href="#artwork"
                                className={`nav_link ${activeSection === 'artwork' ? 'active-link' : ''}`}
                            >
                                <i className="uil uil-ellipsis-h nav_icon"></i>
                                Artwork
                            </a>
                        </li>

                        {/* <li className="nav_item">
                            <NavLink
                                to="gallery" 
                                className={({ isActive }) => isActive ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-scenery nav_icon"></i>
                                Gallery
                            </NavLink>
                        </li> */}
                    </ul>

                    {/* <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i> */}
                </div>

            </nav>
        </header>
    )
    }

    export default NavBar;