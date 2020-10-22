import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ProfileForm = (props) => {
  const classes = useStyles();

  return (
    <div className="profile-form-stats">
      <form className={classes.root} noValidate autoComplete="off">

        <div className='profile-form-container'>
          <div className="profile-form-left">
            <div className="form-age">
              <TextField
                id="standard-basic"
                label="Age"
                value={props.age}
                onChange={(e) => props.handleInputChange(e)}
                name="age"
                placeholder={props.age}
              />
            </div>

            <div className="form-email">
              <TextField
                id="standard-basic"
                label="Email"
                value={props.email}
                onChange={(e) => props.handleInputChange(e)}
                name="email"
                placeholder={props.email}
              />
            </div>

            <div className="form-phone">
              <TextField
                id="standard-basic"
                label="Phone Number"
                value={props.phone}
                onChange={(e) => props.handleInputChange(e)}
                name="phone"
                placeholder={props.phone}
              />
            </div>
          </div>

          <div className='profile-form-right'>
            <div className="form-skill">
              <TextField
                id="standard-basic"
                label="Skills"
                value={props.skill}
                onChange={(e) => props.handleInputChange(e)}
                type="textarea"
                name="skill"
                placeholder={props.skill}
              />
            </div>

            <div className="form-work">
              <TextField
                id="standard-basic"
                label="Work Experience"
                value={props.work}
                onChange={(e) => props.handleInputChange(e)}
                name="work"
                placeholder={props.work}
              />
            </div>

            <div className="form-education">
              <TextField
                id="standard-basic"
                label="Education"
                value={props.education}
                onChange={(e) => props.handleInputChange(e)}
                name="education"
                placeholder={props.education}
              />
            </div>
          </div>
          </div>

            <Button
            className='confirm-btn'
              variant="outlined"
              onClick={(e) => {
                props.handleEditSubmit(e);
                props.toggleDetails(e);
              }}
            >
              Confirm
            </Button>

      </form>
    </div>
  );
};

export default ProfileForm;
