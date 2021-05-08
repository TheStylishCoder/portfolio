import React from 'react';


const Contact = () => {

    return(
        <div className="contact" id="contact">
             <h2>Get In Touch</h2>
            <ul className="contact-links">
           
                <li className="contact-elements"><a href="https://github.com/TheStylishCoder" target="_blank" rel="noreferrer"><i className="fab fa-github fa-5x"></i></a></li>
                <li className="contact-elements"><a href="https://www.linkedin.com/in/1annacunningham/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-5x"></i></a></li>
                <li className="contact-elements"><a href="mailto:ac.annacunningham@gmail.com" ><i className="far fa-envelope fa-5x"></i></a></li>
            </ul>
        </div>
    )
}

export default Contact;

