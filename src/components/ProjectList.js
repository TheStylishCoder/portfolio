import React from 'react';

const ProjectList = ({allProjects}) => {

    const listItems = allProjects.map((project, index) => {
        return(
            <li key={index}>{project.projectName}</li>
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