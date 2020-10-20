import React from "react";
import SwimLanes from "../components/SwimLanes";

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
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="project-card">
        <div className="project-details">
          <SwimLanes
            swimlanes={this.state.swimlanes}
            tasks={this.state.tasks}
            handleInputChange={this.props.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ProjectPage);
