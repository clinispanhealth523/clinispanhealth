import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './components/signUp.js'
import Login from './components/Login.js'
import HomePage from './HomePage.js';
import BrowseStudies from './components/BrowseStudies.js'


import './index.css'
import './signUp.css'
import './HomePage.css'
import './browseStudies.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*Declaring routes in the section below */}
      <Switch>
        <Route path="/" component={SignUp} exact/>
        <Route path="/home" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/browse-studies" component={BrowseStudies}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
