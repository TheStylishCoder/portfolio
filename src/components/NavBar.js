import React from 'react';
import '../static/css/NavBar.css';


const NavBar = ({lightMode, setLightMode}) => {

    

    if (lightMode) {
        document.body.classList.remove("DarkMode");
        document.body.classList.add("WhiteMode");
    } else {
        document.body.classList.remove("WhiteMode");
        document.body.classList.add("DarkMode");
    }

 
  

    


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
                    <div>
                        <label className="switch">
                        <input type="checkbox" onChange={event => setLightMode(!lightMode)} />
                        <span className="slider round"></span>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
       
       
    )
}

export default NavBar;