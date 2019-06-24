import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from '@material-ui/core';
import HomePage from './containers/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
