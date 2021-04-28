import React from 'react';

const ProjectDetail = ({selectedProject}) => {

    if(!selectedProject){
        return(null)
    }
    return(
        <>
            <p>{selectedProject.projectName}</p>
        </>
    )
}

export default ProjectDetail;