/* 
Can be reused with every sign up and login page via admin, partner, or patient.
The 'long' is in reference to the sign up button at the end of the form fields. the 'signUpButton' is in reference
to the sign up button beside the 'login' hyperlink at the top of the page.
*/
import React from 'react'

const SignUpButton = ({className, text}) => {
    const classN = className === 'long' ? 'long' : 'signUpButton'

    return (
        <button className={classN}><b>{text}</b></button>
    )
}



export default SignUpButton
