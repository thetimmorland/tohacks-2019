import React, { Component } from 'react';
import './App.css';
import LoginPage from "./LoginPage.js";
import RegisterPage from "./RegisterPage.js";
import Home from "./Home.js";
import Profile from "./Profile.js";
import TopBar from "./TopBar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage/>
      </div> 
    );
  }
}

export default App;
