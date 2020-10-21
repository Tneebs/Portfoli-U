import React from "react";
import Task from "./Task";

import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

class SwimLane extends React.Component {

  state = {
    tasks: [],
    newTaskTitle: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/swim_lanes/${this.props.swimlaneId}`)
    .then(res => res.json())
    .then(payload => this.setState({
      tasks: payload.swimlane_tasks
    }))
  }

  handleRemoveSwimLane = () => {
    fetch(`http://localhost:3000/swim_lanes/${this.props.swimlaneId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Auth-Key": localStorage.getItem("auth_key")
    }})
    .then(res => res.json())
    .then(deletedSwimLane => console.log(deletedSwimLane))

    this.props.removeSwimLane(this.props.swimlane)
  };

      // this.setState({
    //   swimlanes: this.state.swimlanes.filter(
    //     (swimlane) => swimlane !== selectedSwimLane
    //   ),
    // });

  addTask = () => {
      fetch(`http://localhost:3000/tasks`, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "Auth-Key": localStorage.getItem("auth_key")
          },
          body: JSON.stringify({
            title: this.state.newTaskTitle,
            swim_lane_id: this.props.swimlaneId
          })
      })
      .then(res => res.json())
      .then(addedTask => this.setState({
        tasks: [...this.state.tasks, addedTask]
      }))
    }

    handleInputChange = (e) => {
      console.log(this.state.newTaskTitle)
      this.setState({
        [e.target.name]: e.target.value,
      });
    };




  removeTask = (selectedTask) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task !== selectedTask),
    });
  };

  render(){
    const { classes } = this.props;
      return (
    <div>
      <Card className='swimlane-card'>
        <CardContent>

        {/* {!this.props.isActive ? (                     // Ternary to edit swimlane title, needs props passed down first
          <h2>{this.props.swimlane.title}</h2> ) : (
          <TextField
                id="standard-basic"
                // label={this.props.swimlane.title}
                value={this.props.swimlane.title}
                onChange={(e) => this.props.handleInputChange(e)}
                name="education"
                placeholder={this.props.swimlane.title}
              /> )} */}

          <h2>{this.props.swimlane.title}</h2>

          {this.state.tasks.map(task => (
              <Task task={task} handleInputChange={this.props.handleInputChange} addTask={this.addTask} removeTask={this.removeTask} taskId={task.id} />
          ))}
        </CardContent>
          <TextField
          id="outlined-basic"
          variant="outlined"
          label="New Task"
          type="text"
          name="newTaskTitle"
          placeholder="New Task"
          onChange={(e) => this.handleInputChange(e)}
        />
      <Button size="large" color="primary" className="task-add-button" onClick={this.addTask}>
        +
      </Button>
        <CardActions>
          <Button size="small" color="secondary" className='swimlane-dlt-button' onClick={() => this.handleRemoveSwimLane()}> 
            ☓
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
}

export default withStyles(useStyles) (SwimLane);

// set onClick on x Button with removeSwimLane from this.props
// set onClick on + Button with addTask from this.props
