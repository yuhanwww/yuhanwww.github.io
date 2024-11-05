import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/icons/logo.png';

const NavBar = () => {
    /* Toggle Menu */
    const [Toggle,showMenu] = useState(false);

    return (
        <header className="navbar">
            <nav className="nav container">
                <a href="/" className="nav_logo">
                    <img src={logo} alt="YW" className="nav_logo-img" />
                </a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <NavLink
                                to="/" 
                                className={({ isActive }) => isActive ? "nav_link active-link" : "nav_link"}
                                end
                            >
                                <i className="uil uil-user nav_icon"></i>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav_item">
                            <NavLink
                                to="project" 
                                className={({ isActive }) => isActive ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-file-alt nav_icon"></i>
                                Project
                            </NavLink>
                        </li>

                        <li className="nav_item">
                            <NavLink
                                to="gallery" 
                                className={({ isActive }) => isActive ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-scenery nav_icon"></i>
                                Gallery
                            </NavLink>
                        </li>

                        <li className="nav_item">
                            <NavLink
                                to="more" 
                                className={({ isActive }) => isActive ? "nav_link active-link" : "nav_link"}
                            >
                                <i className="uil uil-ellipsis-h nav_icon"></i>
                                More
                            </NavLink>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}> 
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
    }

    export default NavBar;