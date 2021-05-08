import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from '../components/Homepage';
import ProjectList from '../components/ProjectList';
import About from '../components/About';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileNavBar from '../components/MobileNavBar';

const ProjectContainer = () => {

    const [allProjects] = useState([
        {
            projectName: "The Travel List",
            brief: "Build a Flask app to track someone's travel adventures. The app should have full CRUD funtionality and RESTful routes.",
            about1: "This web app is built according to the MVC software architectural pattern and allows the user to track a list of countries, cities and attractions that are on their wishlist. There is also a Travel Journal section that the user can write reviews in. The SQL 'Like' operator is used to search the database for a specified user input and returns case insensitive results. ",
            about2: "It has full CRUD functionality which allows the user to create, view, edit and delete countries, cities, attractions and reviews. I built this for my solo Python Project in week 4 of CodeClan's Professional Software Development course.",
            technologies: "Python, PostgreSQL, Flask, HTML, CSS, pyscopg2, pip3",
            image1: "/images/TL1.png",
            image2: "/images/TL2.png",
            image3: "/images/TL3.png",
            image4: "/images/TL4.png",
            github: "https://github.com/TheStylishCoder/TravelBucketList_Project",
            heroku: "https://the-travel-list.herokuapp.com"
        
        },
        {
            projectName: "Hello Space",
            brief: "Build an interactive educational web application that displays information in a fun and interesting way for the BBC.",
            about1: "The user can view information on a list of planets held in a RESTful JSON API that is stored in a MongoDB database and they have the ability to create and delete planets. Data is also fetched from 3 external APIs (NASA Astronomy Picture of the Day, The Space Devs Launches and The Space Devs Astronauts) then rendered in the home, astronaut and launch components. There is a planets quiz section that tells the user if they have answered correctly in real time and an interactive section was created using Canvas and Three libraries.",
            about2: "Leaflet was used to show the sites of the upcoming rocket launches (these were marked with custom icons) and the Highcharts library was implemented to show analysis of astronaut nationalities. This was a group JavaScript project completed in week 9 of CodeClan's Professional Software Development course. It is built with the MERN stack and routes were tested using Insomnia.",
            technologies: "JavaScript, React, MongoDB, Express, Node.js, npm, Leaflet, Highcharts, Three, Canvas, CSS",
            image1: "/images/HS1.png",
            image2: "/images/HS2.png",
            image3: "/images/HS3.png",
            image4: "/images/HS4.png",
            github: "https://github.com/TheStylishCoder/SpaceAppProject",
            heroku: ""  
        },
        {
            projectName: "Full Stack News",
            brief: "Build a web application that allows a news company to upload the latest news.",
            about1: "The web app has functionality for both users and admin staff. Once users have logged in, additional navbars conditionally render based on the user's role type. Standard users can view all articles and journalists as well as news in their area, recently viewed articles and can add articles to a reading list to save for later. Admin staff can create, edit and delete journalists and articles. ",
            about2: "The backend relational database was built using Spring Boot Dev Tools, Spring Data JPA, Spring Web and an H2 database with a Maven build system. Multiple fetches are implemented in the React front end using JPA derived queries to filter news articles by category. This was a group Java project completed in week 15 of CodeClan's Professional Software Development course. Insomnia was used for testing. ",
            technologies: "Java, React, Spring, Maven, Hibernate, CSS",
            image1: "/images/FSN1.png",
            image2: "/images/FSN2.png",
            image3: "/images/FSN3.png",
            image4: "/images/FSN4.png",
            github: "https://github.com/TheStylishCoder/JavaNewsProject",
            heroku: ""  
        }
    ])
    const [selectedProject, setSelectedProject] = useState(null);

    const [lightMode, setLightMode] = useState(true);

    const [menuOpen, setMenuOpen] = useState(false);

    const handleSelectedProject = (selectedProject) => {
        setSelectedProject(selectedProject)
       
    };

    
   


    return(
        <Router>
        <>
        <NavBar lightMode={lightMode} setLightMode={setLightMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        
        <MobileNavBar lightMode={lightMode} setLightMode={setLightMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <Route exact path = "/" render = {() => 
        <>
        <Homepage /> 
        <About />
        <ProjectList allProjects={allProjects} onProjectSelect={handleSelectedProject} selectedProject={selectedProject}/>
        <Contact />
        </>
        } />

        <Footer />
        </>
        </Router>
    )
}

export default ProjectContainer;