import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from '../components/Homepage';
import ProjectList from '../components/ProjectList';

const ProjectContainer = () => {

    const [allProjects, setAllProjects] = useState([
        {
            projectName: "The Travel List",
            brief: "",
            about: "",
            technologies: "",
            image1: "",
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
            image1: "",
            image2: "",
            image3: "",
            github: "",
            heroku: ""  
        }
    ])



    return(
        <Router>
        <>
        <Route exact path = "/" render = {() => <Homepage /> } />
        <Route exact path = "/portfolio" render = { () => <ProjectList allProjects={allProjects}/>} />
        </>
        </Router>
    )
}

export default ProjectContainer;