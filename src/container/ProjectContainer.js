import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from '../components/Homepage';
import ProjectList from '../components/ProjectList';
import ProjectDetail from '../components/ProjectDetail';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Contact from '../components/Contact';

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
        }
    ])
    const [selectedProject, setSelectedProject] = useState(null);

    const handleSelectedProject = (selectedProject) => {
        setSelectedProject(selectedProject)
       
    };

   


    return(
        <Router>
        <>

        <Sidebar />

        <Route exact path = "/" render = {() => 
        <>
        <Homepage /> 
        <About />
        <ProjectList allProjects={allProjects} onProjectSelect={handleSelectedProject} selectedProject={selectedProject}/>
        {/* <ProjectDetail selectedProject={selectedProject} /> */}
        <Contact />
        </>
        } />


        </>
        </Router>
    )
}

export default ProjectContainer;