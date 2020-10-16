import React from 'react'

class Task extends React.Component {
    render() {
        return(
            <div className='task-form-card-title'>

                <div className='task-create-btn'>
                </div>

                <div className='task-dlt-btn'>
                </div>
                
            </div>,

            <div className='task-modal-details'>

                <div className='task-modal-description'>
                </div>

                <div className='task-modal-comments'>
                </div>

            </div>
        )
    }
}

export default Task;