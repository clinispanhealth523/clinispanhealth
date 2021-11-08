import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './components/signUp.js'
import Login from './components/Login.js'
import HomePage from './HomePage.js';
import StudiesForYou from './components/StudiesForYou.js';
import BrowseStudies from './components/BrowseStudies.js'
import ManageProfile from './components/ManageProfile.js'
import FAQ from './components/FAQ.js'

import './index.css'
import './signUp.css'
import './HomePage.css'
import './browseStudies.css'
import './ManageProfile.css'
import './faq.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*Declaring routes in the section below */}
      <Switch>
        <Route path="/" component={SignUp} exact/>
        <Route path="/home" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/studies-for-you" component={StudiesForYou}/>
        <Route path="/browse-studies" component={BrowseStudies}/>
        <Route path="/manage-profile" component={ManageProfile}/>
        <Route path="/faq" component={FAQ}/>
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

function cov_2douw1o98a() {
  var path = "C:\\Users\\kmaat\\Documents\\UNC 2021-2022\\Fall 2021\\COMP 523\\clinispanhealth523\\clinispanhealth\\clinispanhealth-app\\src\\msg.js";      
  var hash = "329554dc6b8f05ef4edd7d82d30f8fc9b8e1a5d9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\kmaat\\Documents\\UNC 2021-2022\\Fall 2021\\COMP 523\\clinispanhealth523\\clinispanhealth\\clinispanhealth-app\\src\\msg.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 4
        },
        end: {
          line: 2,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "testMsg",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 31
          }
        },
        loc: {
          start: {
            line: 1,
            column: 34
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "329554dc6b8f05ef4edd7d82d30f8fc9b8e1a5d9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2douw1o98a = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2douw1o98a();
export default function testMsg() {
  cov_2douw1o98a().f[0]++;
  cov_2douw1o98a().s[0]++;
  return "Hello World";
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZy5qcyJdLCJuYW1lcyI6WyJ0ZXN0TXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLGVBQWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBO0FBQUE7QUFDOUIsU0FBTyxhQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0TXNnKCkge1xyXG4gICAgcmV0dXJuKFwiSGVsbG8gV29ybGRcIik7XHJcbn0iXX0= 