import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ProjectPage from '../containers/ProjectPage'


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


// const removeProject = () => {  // onClick for a button to delete the project frontend and backend

// }

const ProjectCard = (props) => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleRemoveProject = () => {
    fetch(`http://localhost:3000/projects/${props.projectId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Auth-Key": localStorage.getItem("auth_key")
    }})
    .then(res => res.json())
    .then(deletedProject => console.log(deletedProject))

    props.removeProject(props.project)
  };

  const handleProjectShow = (props) => {
    // <Link to={`/projects/${props.projectId}`} />
    props.history.push(`/projects/${props.projectId}`)
};

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom
        >
          {props.project.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleProjectShow}>Learn More</Button>
      </CardActions>
      <CardActions>
        <Button size="small" color="secondary" onClick={handleRemoveProject}>☓</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
