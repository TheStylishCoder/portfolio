import React from 'react';
import {Link} from 'react-router-dom';
import '../static/css/NavBar.css';


const NavBar = () => {

    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;