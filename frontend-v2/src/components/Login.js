import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { Link, Redirect } from "@material-ui/core";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
      loggedIn: false
    }
  }

  emailChanged = (event) => {
    console.log(event.target.value)
    this.setState({ email: event.target.value })
  }

  passwordChanged = (event) => {
    console.log(event.target.value)
    this.setState({ password: event.target.value })
  }

  loginClicked = () => {
    console.log("click")
    
  }

  render() {
    return (
      <div className="App">
        <div>
          <img height="25%" width="25%" src="Logo.png"/>
        </div>
        <div>
          <TextField
            label="Email"
            type="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            onChange={this.emailChanged}
          />
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
            onChange={this.passwordChanged}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={this.loginClicked}>
            Login
          </Button>
          {
            this.state.loggedIn ? <Redirect to={{
              pathname: '/home',
              state: { user: this.state.user[0] }
            }}
            /> : null
          }
        </div>
      </div>
    );
  }
}

export default Login;
