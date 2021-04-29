import React from 'react';
import '../static/css/NavBar.css';


const NavBar = () => {

    return(
        <div className="navbar">
            <ul>
                <li>
                    <a href="#top">HOME</a>
                </li>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;