import EnterField from "./EnterField"
import SignUpButton from "./SignUpButton"
import SignUpHeader from "./SignUpHeader"

const SignUp = () => {
    return (
        <div>
            <SignUpHeader/>
            <div className="mainSignUp">
                <div className='forms'>
                    <b><p className='label'>Joining is free and secure. What are you waiting for?</p></b>
                    <EnterField forName='fn' label='First Name'/>
                    <EnterField forName='ln' label='Last Name'/>
                    <EnterField forName='emailAddress' label='Email Address' placeholder='e.g. abc123@gmail.com'/>
                    <EnterField forName='pw' label='Create Password'/>
                    <EnterField forName='pw' label="Re-enter Password"/>
                    <EnterField forName='zipcode' label='Zip Code'/>
                    <EnterField forName='phone-number' label='Phone Number' placeholder='1-234-567-8910'/>
                    <EnterField forName='fn' label='Referral Code'/>
                    <SignUpButton className='long' text="Sign Up"/>
                </div>
            </div>
        </div>
    )
}

export default SignUp
