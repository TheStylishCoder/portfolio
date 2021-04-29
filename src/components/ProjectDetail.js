import React from 'react';

const ProjectDetail = ({selectedProject}) => {

    if(!selectedProject){
        return(null)
    }
    return(
        <div id="project">
            <p>{selectedProject.projectName}</p>
        </div>
    )
}

export default ProjectDetail;