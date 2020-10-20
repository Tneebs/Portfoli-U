import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import TaskModal from './TaskModal'


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

// const handleModal = () => {
//     <TaskModal /> // Creating an onClick to show a modal
// }

const addTask = () => {

}

const removeTask = () => {

}

const Task = (props) => {
    const classes = useStyles();
        return(
            <div>
                <div className='task-display'>
                    {props.tasks}
                </div>
            <TextField
            id="outlined-basic"
            variant='outlined'
            label="New Task"
            type="text"
            name="task"
            placeholder="New Task"
          />
          <Button size="large" color="primary" className="task-add-button">
            +
          </Button>
          </div>
        );
};

export default Task;