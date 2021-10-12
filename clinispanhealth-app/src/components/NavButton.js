import { Link } from "react-router-dom";

const NavButton = ({content, text, link}) => {
    return ( 
    <Link className="nav" id={text === 'home' ? 'home' : 'na'} to={link}>{content}</Link>
    );
}

export default NavButton
