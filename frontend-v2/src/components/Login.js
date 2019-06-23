import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { Link } from "@material-ui/core";

class LoginPage extends Component {
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
    axios.get('http://www.volunteerme.xyz/api/users/6').then(resp => { // revise for token auth
      this.setState({
        loggedIn: true,
        user: resp.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <img src="logo.png" />
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
            this.state.loggedIn ? <Link to="/home" /> : null
          }
        </div>
      </div>
    );
  }
}

export default LoginPage;
