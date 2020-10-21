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
    tasks: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/swim_lanes/${this.props.swimlaneId}`)
    .then(res => res.json())
    .then(payload => this.setState({
      tasks: payload.swimlane_tasks
    }))
  }

  render(){
    // const classes = useStyles()
      return (
    <div>
      <Card className='swimlane-card'>
        <CardContent>
          <h2>{this.props.swimlane.title}</h2>
          {this.state.tasks.map(task => (
              <Task task={task} handleInputChange={this.props.handleInputChange} addTask={this.props.addTask} removeTask={this.props.removeTask} />
          ))}
        </CardContent>
          <TextField
          id="outlined-basic"
          variant="outlined"
          label="New Task"
          type="text"
          name="task"
          placeholder="New Task"
        />
      <Button size="large" color="primary" className="task-add-button">
        +
      </Button>
        <CardActions>
          <Button size="small" color="secondary" className='swimlane-dlt-button' > 
            ☓
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
}

export default withStyles(useStyles) (SwimLane);

// set onClick on - Button with removeSwimLane from this.props
// set onClick on + Button with addSwimLane from this.props
