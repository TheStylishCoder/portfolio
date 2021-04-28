import React from 'react';

const ProjectList = ({allProjects, onProjectSelect}) => {

    const listItems = allProjects.map((project, index) => {
        return(
            <li onClick = {()=> {onProjectSelect(project)}} key={index}>{project.projectName}</li>
        )
    })



    return(
        <div className="project-list">
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ProjectList;