import logo from '../images/CSH Logo.png'
import { Link } from "react-router-dom";
import NavButton from './NavButton';


// 'text' is being used to show which button needs to be highlighted in the nav bar depending on the page.

const Banner = ({color}) => {

    return (
      <div className="navbar">
        <div id="left-navbar">
          <NavButton content='Home' text={color === 'home' ? 'home' : ''} link='/home'/>
          <NavButton content='Studies For You' text={color === 'studies-for-you' ? 'home' : ''} link='/studies-for-you'/>
          <NavButton content='Browse Studies' text={color === 'browse-studies' ? 'home' : ''} link='/browse-studies'/>
          <NavButton content='Manage Profile' text={color === 'manage-profile' ? 'home' : ''} link='/manage-profile'/>
          <NavButton content='FAQ' text={color === 'faq' ? 'home' : ''} link='/faq'/>
        </div>
        <div id="right-navbar">
          <img src={logo} alt="logo" width="300" height="100"/>
        </div>  
      </div>
    )
}

export default Banner
