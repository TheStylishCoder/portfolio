import React from 'react';
import Popup from 'reactjs-popup';
import '../static/css/Portfolio.css';

const ProjectList = ({allProjects, onProjectSelect}) => {

    

   

    const listItems = allProjects.map((project, index) => {
        let herokuIcon = () => {
            if(project.heroku){
                return(
                    <a href={project.heroku} target="_blank" rel="noreferrer"><img className="heroku" src="/images/heroku-logo.png" alt="heroku-logo" height="65px" /></a>
                )
            }
        }
        
        return(
            <li onClick = {() => {onProjectSelect(project)} } key={index} >
                <div className="project-card">
                    <h3>{project.projectName} </h3>
                    <br />
                    <img src={project.image1} alt="project preview" height = "250" width="auto" /> 
                    
                    <br />
                    <br/>
                    <Popup
                        trigger={<button className="view-button"> View Info </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div className="modal-header"> 
                                {project.projectName}  
                            </div>
                            <div className="content">
                                {/* {' '} */}
                                <div className="modal-images">
                                    <img className="m-img" src={project.image2} alt="project-screenshot" width="200px" />
                                    <br />
                                    <img className="m-img" src={project.image3} alt="project-screenshot" width="200px" />
                                    <br />
                                    <img className="m-img" src={project.image4} alt="project-screenshot" width="200px" />
                                </div>
                                <div className="modal-text">
                                    <p><b><u>Brief</u></b></p>
                                    {project.brief}
                                    <br />
                                    <p><b><u>About</u></b></p>
                                    {project.about1}
                                    <br />
                                    <br />
                                    {project.about2}
                                    <br />
                                    <p><b><u>Languages & Technologies</u></b></p>
                                    {project.technologies}
                                    <br />
                                    <br />
                                    <a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github fa-4x"></i></a>
                                
                                    {herokuIcon()}
                                </div>
                                <br />
                                
                                <br />
                            


                            
                            </div>
                        
                        </div>
                        )}
                    </Popup>
                    </div>  
                              
            </li>
        )
    })

   
   


    return(
        <div className="portfolio" id="portfolio">
            <h2>LATEST WORK</h2>
            <ul>
                {listItems}
            </ul>
            
        </div>
    )
}

export default ProjectList;