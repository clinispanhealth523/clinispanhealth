import logo from '../images/CSH Logo.png'

// 'text' is being used to show which button needs to be highlighted in the nav bar depending on the page.

const Banner = ({text}) => {
    return (
      <div className="navbar">
        <div id="left-navbar">
          <button className="nav" id={text === 'home' ? 'home' : ''}>Home</button>
          <button className="nav" id={text === 'studies-for-you' ? 'home' : ''}>Studies For You</button>
          <button className="nav" id={text === 'browse-studies' ? 'home' : ''}>Browse Studies</button>
          <button className="nav" id={text === 'manage-profile' ? 'home' : ''}>Manage Profile</button>
          <button className="nav" id={text === 'faq' ? 'home' : ''}>FAQ</button>
        </div>
        <div id="right-navbar">
          <img src={logo} alt="logo" width="300" height="100"/>
        </div>  
      </div>
    )
}

export default Banner
