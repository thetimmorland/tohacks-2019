import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import './index.css';

// Import Pages
import LoginPage from './containers/LoginPage'
import HomePage from './containers/HomePage'
import RegisterPage from './containers/RegisterPage'

const routing = (
  <App>
    <Router>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
      </div>
    </Router>
  </App>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
