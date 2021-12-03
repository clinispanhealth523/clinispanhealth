
import HyperLink from "./HyperLink"

// The header will act as a navigation router for react with links to different sites
import { Link } from "react-router-dom";
const SignOutHeader = () => {
    return (
        <div className='signUpHeader'>
            <div className='containerH'>
                <Link className='link'to="/home">
                    <div className='cshHeader'>
                    </div>
                </Link>
            </div>
            <div className='containerH2'>
                <Link className='link'to='/browse-studies'>
                    <HyperLink name='browse'/>
                </Link>
                <button className='signUpButton' onClick={
                    function() { 
                        localStorage.setItem('user', '')
                        window.location.href='/'
                    }
                }>Logout</button>
                
            </div>
        </div> 
    )
}

export default SignOutHeader