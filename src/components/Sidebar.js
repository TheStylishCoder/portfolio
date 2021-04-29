import React from 'react';
import '../static/css/Sidebar.css';

const Sidebar = () => {

    return(
        <>
        <ul className="sidebar">
            <li><a href="https://github.com/TheStylishCoder"><i className="fab fa-github fa-2x"></i></a></li>
            <li><a href="https://www.linkedin.com/in/1annacunningham/"><i className="fab fa-linkedin fa-2x"></i></a></li>
            <li><a href="mailto:ac.annacunningham@gmail.com"><i className="far fa-envelope fa-2x"></i></a></li>
        </ul>
        </>
    )
}

export default Sidebar;