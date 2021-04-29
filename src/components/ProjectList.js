import React from 'react';
import Popup from 'reactjs-popup';
import '../static/css/Portfolio.css';

const ProjectList = ({allProjects, onProjectSelect}) => {

    

   

    const listItems = allProjects.map((project, index) => {
        let herokuIcon = () => {
            if(project.heroku){
                return(
                    <a href={project.heroku} target="_blank" rel="noreferrer"><img className="heroku" src="/images/heroku-logo.png" alt="heroku-logo" height="45px" /></a>
                )
            }
        }
        
        return(
            <li onClick = {() => {onProjectSelect(project)} } key={index} >
                {project.projectName} 
                <br />
                <img src={project.image1} alt="project preview" height = "250" width="auto" /> 
                <br />
                
                <Popup
                    trigger={<button className="button"> Open Modal </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> {project.projectName}  </div>
                        <div className="content">
                        {' '}
                        {project.brief}
                        <br />
                        {project.about}
                        <br />
                        {project.technologies}
                        <br />
                        {project.image1}
                        <br />
                        
                        </div>
                        <div className="actions">
                        
                        <a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github fa-4x"></i></a>
                        
                       {herokuIcon()}
    
                        </div>
                    </div>
                    )}
                </Popup>
                
                                
            </li>
        )
    })

   
   


    return(
        <div className="portfolio" id="portfolio">
            <ul>
                {listItems}
            </ul>
            
        </div>
    )
}

export default ProjectList;