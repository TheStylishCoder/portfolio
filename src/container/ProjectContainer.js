import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from '../components/Homepage';
import ProjectList from '../components/ProjectList';
import NavBar from '../components/NavBar';
import ProjectDetail from '../components/ProjectDetail';
import Sidebar from '../components/Sidebar';
import About from '../components/About';

const ProjectContainer = () => {

    const [allProjects] = useState([
        {
            projectName: "The Travel List",
            brief: "",
            about: "",
            technologies: "",
            image1: "/images/TL1.png",
            image2: "",
            image3: "",
            github: "",
            heroku: ""
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

        <NavBar />

        <Sidebar />

        <Route exact path = "/" render = {() => <Homepage /> } />

        <Route exact path = "/about" render = {() => <About />} />

        <Route exact path = "/portfolio" render = { () => 
        <>
        <ProjectList allProjects={allProjects} onProjectSelect={handleSelectedProject}/>
        <ProjectDetail selectedProject={selectedProject} />
        </>
        } />



        </>
        </Router>
    )
}

export default ProjectContainer;