import React from 'react'

const ProjectCard = (props) => {
    return(
        <div className='project-card'>
            {props.project.title}
        </div>
    )

}

export default ProjectCard;