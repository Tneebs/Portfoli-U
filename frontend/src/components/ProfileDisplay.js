import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


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
    fontColor: withTheme 
  },
  pos: {
    marginBottom: 12,
  },
});

const ProfileDisplay = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className="profile-display-stats">
        <div className="profile-left">

          <div className="profile-age">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Age: {props.age}
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="profile-email">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Email: {props.email}
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="profile-number">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Phone Number: {props.phone}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="profile-right">
          <div className="profile-skill">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Skills: {props.skill}
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="profile-work">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Work Experience: {props.work}
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="profile-education">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Education: {props.education}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="profile-edit">
        <Button
          className="edit-profile-btn"
          variant="outlined"
          id="edit"
          type="submit"
          value="Submit"
          onClick={(e) => props.toggleDetails(e)}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileDisplay;
