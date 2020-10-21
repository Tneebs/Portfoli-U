import React from "react";
import SwimLane from "../components/SwimLane";

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";

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
  };

  componentDidMount() {
    fetch("http://localhost:3000/projects/1")
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

  addSwimLane = (addedSwimLane) => {
    this.setState({
      swimlanes: [...this.state.swimlanes, addedSwimLane],
    });
  };

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
              key={swimlane.id}
              swimlaneId={swimlane.id}
              swimlane={swimlane}
              addSwimLane={this.props.addSwimLane}
              removeSwimLane={this.props.removeSwimLane}
              addTask={this.props.addTask}
              removeTask={this.props.removeTask}
            />
          ))}
        </div>
        <CardActions>
        <Button size="large" color="primary" className="swimlane-add-button">
          +
        </Button>
      </CardActions>
      </div>
    );
  }
}

export default withStyles(useStyles)(ProjectPage);
