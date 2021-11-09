import logo from '../images/CSH_Logo.PNG';
import NavButton from './NavButton';

// 'text' is being used to show which button needs to be highlighted in the nav bar depending on the page.

const Banner = ({color}) => {

    return (
      <div className="navbar">
        <div id="left-navbar">
          <NavButton className="nav" content='Home' text={color === 'home' ? 'home' : 'na'} link='/home'/>
          <NavButton className="nav" content='Studies For You' text={color === 'studies-for-you' ? 'home' : 'na'} link='/studies-for-you'/>
          <NavButton className="nav" content='Browse Studies' text={color === 'browse-studies' ? 'home' : 'na'} link='/browse-studies'/>
          <NavButton className="nav" content='Manage Profile' text={color === 'manage-profile' ? 'home' : 'na'} link='/manage-profile'/>
          <NavButton className="nav" content='FAQ' text={color === 'faq' ? 'home' : 'na'} link='/faq'/>
        </div>
        <div id="right-navbar">
          <img src={logo} alt="logo" width="300" height="100"/>
        </div>  
      </div>
    );
}

export default Banner;
