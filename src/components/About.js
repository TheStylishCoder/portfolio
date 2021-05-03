import React from 'react';
import '../static/css/About.css';

const About = () => {

    return(
        <div className="about" id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <p>I am a software developer with a love of learning and a keen interest in front end development. I have recently completed <a href="https://codeclan.com" target="_blank" rel="noreferrer">CodeClan</a>’s Professional Software Development course which gave me the opportunity to explore a range of languages and technologies including Java, Python, JavaScript and React whilst practising TDD and agile methodologies. 
                    <br/>
                    <br/>
                    Previously I worked in retail management which shaped me to think commercially, ensure I am always client focused and gave me a good grounding in e-commerce principles. I have an honours degree in Fashion Design and have always been interested in the arts. 
                    <br/>
                    <br/>
                    I have a true passion for supporting others and would like to take on a new role that allows me to combine my creative, commercial and coding skills, build inspiring web applications and solve complex problems. 
                </p>
                <img src="/images/me.png" alt="me" height="250px" />
            </div>
        </div>
    )
}

export default About;