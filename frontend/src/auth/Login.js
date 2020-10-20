import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const localHandleInput = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let userInfo = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((token) => {
        // console.log(token['user'])
        localStorage.setItem("auth_key", token["auth_key"]);
        localStorage.setItem("user", token.user.id);
        props.handleCurrentUser(token["user"]);
        //   console.log(this.state.current_user)
        props.history.push("/");
        props.handleLogin();
      });
  };

  return (
    <div className="login-form">
      <form
        className={classes.root}
        Validate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="login-display">
          <h2>Login</h2>
        </div>

        <div className="login-username">
          <TextField
            id="standard-basic"
            required
            label="Username"
            type="text"
            value={username}
            onChange={(e) => localHandleInput(e)}
            name="username"
            placeholder="Username"
          />
          {/* <input className='input100'type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder='Username'/> */}
        </div>

        <div className="login-password">
          <TextField
            id="standard-basic"
            required
            label="Password"
            type="password"
            value={password}
            onChange={(e) => localHandleInput(e)}
            name="password"
            placeholder="Password"
          />
          {/* <input className='input100' type="password" value={password} onChange={localHandleInput} name='password' placeholder="Password"  /> */}
        </div>

        <div className="login-submit-btn">
          <Button variant="outlined" type="submit" value="Submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
