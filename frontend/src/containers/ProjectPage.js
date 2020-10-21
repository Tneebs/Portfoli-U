import React from "react";
import SwimLane from "../components/SwimLane";

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class ProjectPage extends React.Component {
  state = {
    swimlanes: [],
    tasks: [],
    project: "",
    newSwimLaneTitle: ''
  };

  componentDidMount() {
    fetch("http://localhost:3000/projects/7")
      .then((res) => res.json())
      .then((payload) =>
        this.setState({
          swimlanes: payload.project_swimlanes,
          project: payload.project,
        })
      );
  }

  checkSwimLanes = () => {
    console.log(this.state);
  };

  addSwimLane = () => {
    fetch(`http://localhost:3000/swim_lanes`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Auth-Key": localStorage.getItem("auth_key")
        },
        body: JSON.stringify({
            title: this.state.newSwimLaneTitle,
            project_id: this.state.project.id
        })
    })
    .then(res => res.json())
    .then(addedSwimLane => this.setState({
        swimlanes: [...this.state.swimlanes, addedSwimLane]
    }))
}


  removeSwimLane = (selectedSwimLane) => {
    this.setState({
      swimlanes: this.state.swimlanes.filter(
        (swimlane) => swimlane !== selectedSwimLane
      ),
    });
  };

  addTask = (addedTask) => {
    this.setState({
      tasks: [...this.state.tasks, addedTask],
    });
  };

  removeTask = (selectedTask) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task !== selectedTask),
    });
  };

  handleInputChange = (e) => {
    console.log(this.state.newSwimLaneTitle)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="project-card">
        {this.checkSwimLanes()}
        <h1>{this.state.project.title}</h1>
        <div className="project-details">
          {this.state.swimlanes.map((swimlane) => (
            <SwimLane
              className="swimlane-scroll"
              swimlaneId={swimlane.id}
              swimlane={swimlane}
              addSwimLane={this.addSwimLane}
              removeSwimLane={this.removeSwimLane}
              addTask={this.state.addTask}
              removeTask={this.state.removeTask}
            //   toggle={this.props.toggle}
            />
          ))}
        </div>
        <CardActions>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="New SwimLane"
          type="text"
          name="newSwimLaneTitle"
          placeholder="New SwimLane"
          onChange={(e) => this.handleInputChange(e)}
        />

        <Button size="large" color="primary" className="swimlane-add-button" onClick={this.addSwimLane}>
          +
        </Button>
      </CardActions>
      </div>
    );
  }
}

export default withStyles(useStyles)(ProjectPage);
