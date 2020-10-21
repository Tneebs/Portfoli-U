import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import TaskModal from "./TaskModal";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// const handleModal = () => {
//     <TaskModal /> // Creating an onClick to show a modal
// }

const Task = (props) => {

    const handleRemoveTask = () => {
        fetch(`http://localhost:3000/tasks/${props.taskId}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "Auth-Key": localStorage.getItem("auth_key")
        }})
        .then(res => res.json())
        .then(deletedTask => console.log(deletedTask))
    
        props.removeTask(props.task)
    }

    

  const classes = useStyles();
  return (
    <div className="task-container">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            {props.task.title}
          </Typography>
        </CardContent>
      </Card>
      <CardActions>
          <Button size="large" color="secondary" className="task-dlt-button" onClick={() => handleRemoveTask()}> 
            -
          </Button>
        </CardActions>
    </div>
  );
};

export default Task;

// set onClick for - Button with removeTask from props
