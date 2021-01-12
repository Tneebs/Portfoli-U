import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: ""
  };

  componentDidMount() {
    console.log(this.props)
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email,
      },
    };
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((userDetails) => console.log(userDetails));
    this.props.history.push("/login");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="signup-container">
        <form className={"signup-form"} onSubmit={this.handleOnSubmit}>
          <div className="signup-display">
            <h2>SignUp</h2>
          </div>

          <div className="signup-username">
            <TextField
              id="standard-basic"
              required
              type="text"
              label="Username"
              value={this.state.username}
              onChange={(e) => this.handleInputChange(e)}
              name="username"
            />
          </div>

          <div className="signup-password">
            <TextField
              id="standard-basic"
              required
              type="password"
              label="Password"
              value={this.state.password}
              onChange={(e) => this.handleInputChange(e)}
              name="password"
            />
          </div>

          <div className="signup-name">
            <TextField
              id="standard-basic"
              required
              type="text"
              label="Name"
              value={this.state.name}
              onChange={(e) => this.handleInputChange(e)}
              name="name"
            />
          </div>

          <div className="signup-email">
            <TextField
              id="standard-basic"
              required
              type="email"
              label="Email"
              value={this.state.email}
              onChange={(e) => this.handleInputChange(e)}
              name="email"
            />
          </div>

          <div className="signup-confirm-button">
            <Button variant="outlined" type="submit" value="Submit">
              SignUp!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(SignUp);
