import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/login" />
      </div>
    );
  }
}

export default App;
