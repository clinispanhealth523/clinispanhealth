import './HomePage.css';
import logo from './images/CSH Logo.png'
import create from './images/create-acct.PNG'
import hands from './images/hands.PNG'
import fb from './images/fb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
  return (
    <div>
      <Banner />
      <ContactBtn />
      <Dashboard />
      <Dashboard2 />
      <Dashboard3 />
    </div>
  );
}

function Banner() {
    return (
      <div className="navbar">
        <div id="left-navbar">
          <button className="nav" id="home">Home</button>
          <button className="nav">Studies For You</button>
          <button className="nav">Browse Studies</button>
          <button className="nav">Manage Profile</button>
          <button className="nav">FAQ</button>
        </div>
        <div id="right-navbar">
          <img src={logo} alt="logo" width="300" height="100"/>
        </div>  
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
  return (
    <div className="dashboard">
      <div id="header">
        <h1>Welcome back!</h1>
      </div>
      <p id="subtitle">This is your user dashboard. Here, you can choose to browse clinical studies or manage your profile.</p>
      <div id="tiles">
        <div className="tile">
          <p className="tile-p">Find Studies for You</p>
          <p className="tile-sp">Find clinical studies recommended specifically for you based on your conditions and geographic location.</p>
          <div className="tileBtnDiv">
            <button className="tileBtn">Studies for you</button>
          </div>
        </div>
        <div className="tile">
          <p className="tile-p">Start browsing studies</p>
          <p className="tile-sp">Start browsing available clinical studies and request a free screening appointment if you want to participate.</p>
          <div className="tileBtnDiv">
            <button className="tileBtn">Browse studies</button>
          </div>
        </div>
        <div className="tile">
          <p className="tile-p">Profile</p>
          <p className="tile-sp"><strong>Please complete your profile to improve your experience.</strong> 
          Keep your profile information updated so we can notify you when studies of interest are available.</p>
          <div className="tileBtnDiv">
            <button className="tileBtn">Manage profile</button>
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
          <button id="FbBtn">Join Today!</button>
        </div>
        <div className="join">
          <img id="hands-img" src={hands} alt="acct" width="600" height="320" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;