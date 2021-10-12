import { Link } from "react-router-dom";

const NavButton = ({content, text, link}) => {
    return ( 
    <button className="nav">
        <Link className='linkH' id={text === 'home' ? 'home' : 'na'} to={link}>{content}</Link>
    </button>
        

    )
}

export default NavButton
