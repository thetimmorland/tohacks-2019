import React, { Component } from 'react';
import './App.css';
import LoginPage from "./LoginPage.js";
import RegisterPage from "./RegisterPage.js";
import Home from "./Home.js";
import Profile from "./Profile.js";
import TopBar from "./TopBar.js";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      showRegistration: false,
    }
  }

  handleLogin = () => {
    this.setState({loggedIn: true})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn ? <Home /> : <LoginPage handler={this.handleLogin} />
        }
      </div> 
    );
  }
}

export default App;
