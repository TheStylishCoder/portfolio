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
            brief: "brief",
            about: "about",
            technologies: "technologies",
            image1: "/images/TL1.png",
            image2: "",
            image3: "",
            github: "https://github.com/TheStylishCoder/TravelBucketList_Project",
            heroku: "https://the-travel-list.herokuapp.com"
        
        },
        {
            projectName: "Hello Space",
            brief: "",
            about: "",
            technologies: "",
            image1: "/images/HS1.png",
            image2: "",
            image3: "",
            github: "",
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