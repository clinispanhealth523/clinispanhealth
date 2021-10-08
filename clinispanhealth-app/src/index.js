import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUpHeader from './components/SignUpHeader.js'
import SignUp from './components/signUp.js'
import HomePage from './HomePage.js'

import './index.css'
import './signUp.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SignUpHeader />
      {/*Declaring routes in the section below */}
      <Switch>
        <Route path="/" exact component={() => <SignUp />} />
        <Route path="/home" exact component={() => <HomePage />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
