import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
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

  render() {
    return (
      <form noValidate autoComplete="off">
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
          <Button variant="contained" color="primary" onClick={() => {
            fetch(window.location.host + "/login")
            .then(response => {console.log(response)})
          }}>
            Login
          </Button>
        </div>
      </form>
    );
  }
}

export default LoginPage;
