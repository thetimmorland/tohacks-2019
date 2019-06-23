import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      name:null
    };
  }

  emailChanged = event => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };

  passwordChanged = event => {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  };

  nameChanged = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <div>
          <TextField
            label="Name"
            onChange={this.nameChanged}
            margin="normal"
            variant="filled"
          />
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              fetch(window.location.host).then(response => {
                console.log(response);
              });
            }}>
            Save Changes
          </Button>
        </div>
      </form>
    );
  }
}
export default RegisterPage;
