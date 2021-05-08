import React from 'react';



const MobileNavBar = ({lightMode, setLightMode, menuOpen, setMenuOpen}) => {



    

    if (lightMode) {
        document.body.classList.remove("DarkMode");
        document.body.classList.add("WhiteMode");
    } else {
        document.body.classList.remove("WhiteMode");
        document.body.classList.add("DarkMode");
    }

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }
   
    


    return(
        <>
        
        <div className="mobile-navbar">
            <ul className="nav-elements">
            <li className="theme-toggle">
                <label className="switch">
                <input type="checkbox" onChange={event => setLightMode(!lightMode)} />
                <span className="slider round"></span>
                </label>
            </li>
            <li className="burger-wrapper">
                <div className="menu-icon" onClick={handleClick}>
                    {menuOpen ? (
                        <button className="close">&times;</button>
                    ) : (
                        <p ><i className="fa fa-bars fa-2x"></i></p>
                    )}
                    
                </div>
                <ul className={menuOpen ? "nav-options active" : "nav-options"} >
                    
                    <li className="option" onClick={closeMenu}><a href="#about">ABOUT</a></li>
                    <li className="option" onClick={closeMenu}><a href="#portfolio">PORTFOLIO</a></li>
                    <li className="option" onClick={closeMenu}><a href="#contact">CONTACT</a> </li>
                </ul>
                
            </li>
            </ul>
        </div>
        </>
    )
}

export default MobileNavBar;