import React,{useState} from 'react';
import './navbar.css';
import logo from '../../assets/icons/logo.png';

const NavBar = () => {
    /* Toggle Menu */
    const [Toggle,showMenu] = useState(false);

    return (
        <header className="navbar">
            <nav className="nav container">
                <a href="" className="nav_logo">
                    <img src={logo} alt="YW" className="nav_logo-img" />
                </a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#projects" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                                Projects
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#gallery" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                Gallery
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#more" className="nav_link">
                                <i className="uil uil-ellipsis-h nav_icon"></i>
                                More
                            </a>
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