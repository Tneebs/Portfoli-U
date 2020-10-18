import React from 'react'

const ProjectCard = (props) => {
    return(
        <div className='project-card'>
            <div className='project-details'>
                {props.project.title}
            </div>
        </div>
    )

}

export default ProjectCard;