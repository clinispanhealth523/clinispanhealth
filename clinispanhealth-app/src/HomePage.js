import './HomePage.css';
import logo from './images/CSH Logo.png'

function HomePage() {
  return (
    <Banner />
  );
}

function Banner() {
    return (
      <div className="navbar">
        <button id="home">Home</button>
        <button>Studies For You</button>
        <button>Browse Studies</button>
        <button>Manage Profile</button>
        <button>FAQ</button>
        <img src={logo} alt="logo" width="300" height="100"/>
      </div>
    );
}

export default HomePage;