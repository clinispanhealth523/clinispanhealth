import Banner from './components/Banner';
import create from './images/create-acct.PNG'
import hands from './images/hands.PNG'
import fb from './images/fb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Banner color='home'/>
      <ContactBtn />
      <Dashboard />
      <Dashboard2 />
      <Dashboard3 />
    </div>
  );
}


function ContactBtn() {
  return (
    <div className="contactBtn">
      <p>
        Contact a CSH 
        <br />
        Professional
      </p>
      <button id="contact"><FontAwesomeIcon id="icon" icon={faComments} /></button>
    </div>
  );
}

function Dashboard() {

  let content = window.localStorage.getItem('loggedIn') ? `Welcome back, ${window.localStorage.getItem('first')}!` : "Welcome back!";

  return (
    <div className="dashboard">
      <div id="header">
        <h1>{content}</h1>
      </div>
      <p id="subtitle">This is your user dashboard. Here, you can choose to browse clinical studies or manage your profile.</p>
      <div id="tiles">
        <div className="tile">
          <p className="tile-p">Find Studies for You</p>
          <p className="tile-sp">Find clinical studies recommended specifically for you based on your conditions and geographic location.</p>
          <div className="tileBtnDiv">
            <Link to="/studies-for-you">
              <button className="tileBtn">Studies for you</button>
            </Link>
          </div>
        </div>
        <div className="tile">
          <p className="tile-p">Start browsing studies</p>
          <p className="tile-sp">Start browsing available clinical studies and request a free screening appointment if you want to participate.</p>
          <div className="tileBtnDiv">
            <Link to="/browse-studies">
              <button className="tileBtn">Browse studies</button>
            </Link>
          </div>
        </div>
        <div className="tile">
          <p className="tile-p">Profile</p>
          <p className="tile-sp"><strong>Please complete your profile to improve your experience.</strong> 
          Keep your profile information updated so we can notify you when studies of interest are available.</p>
          <div className="tileBtnDiv">
            <Link to="/manage-profile">
              <button className="tileBtn">Manage profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard2() {
  return (
    <div className="dashboard">
        <div className="h3">
          <h3>New to Clinispan? Check out our website to find out more about the medical 
            study process and to see what people are saying about us!
          </h3>
        </div>
        <div id="db2-img-container">
          <img id="db2-img" src={create} alt="acct" />
        </div>
    </div>
  );
}

function join() {
  window.open('https://www.facebook.com/CliniSpanHealth/');
}

function Dashboard3() {

  return (
    <div className="dashboard">
      <div className="h3">
        <h3>Join a CSH Community! We have multiple CSH Facebook groups where you
        can share about your passion for research or be encouraged by others experiencing the same
        health challenges!
        </h3>
      </div>
      <div id="db3">
        <div className="join">
          <img id="fb" src={fb} alt="Facebook" />
          <button id="FbBtn" onClick={join}>Join Today!</button>
        </div>
        <div className="join">
          <img id="hands-img" src={hands} alt="acct" width="600" height="320" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;