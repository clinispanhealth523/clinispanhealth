// This header is going to be commonly used amongst the login and sign-up portals for admin, patient, and partner.
// This header can also be used whenever you are logged out of CliniSpan.

import SignUpButton from "./SignUpButton"
import HyperLink from "./HyperLink"

// ADD onClick FUNCTIONS

const SignUpHeader = () => {
    return (
        <div className='signUpHeader'>
            <div className='containerH'>
                <div className='cshHeader'></div>
            </div>
            <div className='containerH2'>
                    <HyperLink name='browse'/>
                    <HyperLink name='login'/>
                    <SignUpButton/>
                
            </div>
        </div> 
    )
}



export default SignUpHeader