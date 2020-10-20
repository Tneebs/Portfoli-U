import React from "react";
import Task from "./Task";

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

const addSwimLane = () => {

}

const removeSwimLane = () => {

}

const SwimLanes = (props) => {
  const { classes } = useStyles();
  return (
    <div>
      <Card className="classes.root">
        <CardContent>
          <Task tasks={props.tasks} handleInputChange={props.handleInputChange} />
        </CardContent>
        <CardActions>
          <Button size="large" color="secondary" className="swimlane-dlt-button">
            -
          </Button>
        </CardActions>
      </Card>
      <CardActions>
        <Button size="large" color="primary" className="swimlane-add-button">
          +
        </Button>
      </CardActions>
    </div>
  );
};

export default SwimLanes;
