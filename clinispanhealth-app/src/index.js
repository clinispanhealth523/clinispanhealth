import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './components/signUp.js'
import Login from './components/Login.js'
import HomePage from './HomePage.js';
import BrowseStudies from './components/BrowseStudies.js'
import ManageProfile from './components/ManageProfile.js'


import './index.css'
import './signUp.css'
import './HomePage.css'
import './browseStudies.css'
import './ManageProfile.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*Declaring routes in the section below */}
      <Switch>
        <Route path="/" component={SignUp} exact/>
        <Route path="/home" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/browse-studies" component={BrowseStudies}/>
        <Route path="/manage-profile" component={ManageProfile}/>
        <Route path="/test" component = {Test}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function Test() {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
        <p>{!data ? "Loading..." : data}</p>
  );
}
