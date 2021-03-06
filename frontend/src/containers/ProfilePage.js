import React from "react";
import ProjectPage from "./ProjectPage";
import ProjectCard from "../components/ProjectCard";

import ProfileForm from "../components/ProfileForm";
import ProfileDisplay from "../components/ProfileDisplay";

import ImageUploader from "react-images-upload";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import TextField from "@material-ui/core/TextField";


const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      pictures: [],
      age: null,
      email: "",
      phone: "",
      skill: "",
      work: "",
      education: "",
      users_projects: [],
      isActive: true,
      currentProject: '',
      newProjectTitle: ''
    };

    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    let user = Number(localStorage.getItem("user")); // This is getting the user.id set from Login with token

    fetch(`http://localhost:3000/users/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Auth-Key": localStorage.getItem("auth_key"),
      },
    })
      .then((resp) => resp.json())
      // .then(update => console.log(update.projects[0]))
      .then((update) =>
        this.setState({
          name: update.user.name,
          picture: update.user.picture,
          age: update.user.age,
          email: update.user.email,
          phone: update.user.phone,
          skill: update.user.skill,
          work: update.user.work,
          education: update.user.education,
          users_projects: update.projects,
        })
      )
      .then(console.log(this.state.users_projects))

  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  toggleDetails = () => {
    this.setState((previousState) => {
      return {
        isActive: !previousState.isActive,
      };
    });
  };

  handleInputChange = (e) => {
    console.log(this.state.newProjectTitle)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();

    let user = Number(localStorage.getItem("user")); // This is getting the user.id set from Login with token

    let newUser = {
      picture: this.state.picture,
      age: this.state.age,
      email: this.state.email,
      phone: this.state.phone,
      skill: this.state.skill,
      work: this.state.work,
      education: this.state.education,
    };

    fetch(`http://localhost:3000/users/${user}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Auth-Key": localStorage.getItem("auth_key"),
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      // .then(update => console.log(update))
      .then((update) =>
        this.setState({
          picture: update.picture,
          age: update.age,
          email: update.email,
          phone: update.phone,
          skill: update.skill,
          work: update.work,
          education: update.education,
        })
      );
  };

  setProject = (project) => {
    this.setState({
        currentProject: project
    })
    this.props.setCurrentProject(project)
    this.props.history.push(`/projects/${project.id}`)
  }

  createProject = () => {

    fetch(`http://localhost:3000/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Auth-Key": localStorage.getItem("auth_key"),
      },
      body: JSON.stringify({
        title: this.state.newProjectTitle,
        user_id: Number(localStorage.getItem("user"))
    }),
    })
      .then((resp) => resp.json())
      .then(project => this.setProject(project))
  };

  removeProject = (selectedProject) => {
    this.setState({
      users_projects: this.state.users_projects.filter(
        (project) => project !== selectedProject
      ),
    });
  };

    handleProjectShow = () => { 
        this.props.setCurrentProject()
    }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="profile-page">
          <div className="profile-display">
            <h1>Profile Information</h1>
            {/* <div className="profile-picture-uploader">
              <ImageUploader
                withIcon={true}
                buttonText="Choose Image"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                accept="accept=image/*"
              />
            </div> */}

            <div className="profile-picture-name">
              <img src={this.state.picture} />
              <h2>Hello, {this.state.name}!</h2>
            </div>

            {!this.state.isActive ? (
              <ProfileForm
                name={this.state.name}
                pictures={this.state.pictures}
                age={this.state.age}
                email={this.state.email}
                phone={this.state.phone}
                skill={this.state.skill}
                work={this.state.work}
                education={this.state.education}
                users_projects={this.state.users_projects}
                isActive={this.state.isActive}
                handleInputChange={this.handleInputChange}
                handleEditSubmit={this.handleEditSubmit}
                toggleDetails={this.toggleDetails}
              />
            ) : (
              <ProfileDisplay
                name={this.state.name}
                pictures={this.state.pictures}
                age={this.state.age}
                email={this.state.email}
                phone={this.state.phone}
                skill={this.state.skill}
                work={this.state.work}
                education={this.state.education}
                users_projects={this.state.users_projects}
                isActive={this.state.isActive}
                handleInputChange={this.handleInputChange}
                handleEditSubmit={this.handleEditSubmit}
                toggleDetails={this.toggleDetails}
              />
            )}
          </div>

          <div className="project-container">
            <h1>Projects</h1>
            <Button
              variant="outlined"
              className="project-create-btn"
              onClick={() => this.createProject()}
            >
              Create Project
            </Button>
            <br></br>
            <br></br>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="New Project"
              type="text"
              name="newProjectTitle"
              placeholder="New Project Title"
              onChange={(e) => this.handleInputChange(e)}
            />
            <div className="project-display">
              {this.state.users_projects.map((project) => (
                <ProjectCard
                  project={project}
                  projectId={project.id}
                  setCurrentProject={this.props.setCurrentProject}
                  handleInputChange={this.handleInputChange}
                  removeProject={this.removeProject}
                  toggle={this.toggleDetails}
                /> // passing handleInputChange as props down to ProjectCard to pass to ProjectPage etc.
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(withRouter(ProfilePage));
