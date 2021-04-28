import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


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
        }
    ])



    return(
        <Router>
        <>
        </>
        </Router>
    )
}

export default ProjectContainer;