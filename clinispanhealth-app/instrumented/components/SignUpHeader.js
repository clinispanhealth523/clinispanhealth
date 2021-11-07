// This header is going to be commonly used amongst the login and sign-up portals for admin, patient, and partner.
// This header can also be used whenever you are logged out of CliniSpan.

import SignUpButton from "./SignUpButton"
import HyperLink from "./HyperLink"

// The header will act as a navigation router for react with links to different sites
import { Link } from "react-router-dom";

// The header exists as a function
const SignUpHeader = () => {
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
                <Link className='link'to="/login">
                    <HyperLink name='login'/>
                </Link>
                <Link className='link'to='/'>
                    <SignUpButton text='Sign Up'/>
                </Link>
                
            </div>
        </div> 
    )
}



export default SignUpHeader