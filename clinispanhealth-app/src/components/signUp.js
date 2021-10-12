import EnterField from "./EnterField"
import SignUpButton from "./SignUpButton"
import SignUpHeader from "./SignUpHeader"

const SignUp = () => {
    return (
        <div>
            <SignUpHeader/>
            <div className="mainSignUp">
                <div>
                    <p className="np">Click <a href=".">here</a> to sign up if you are a Non-Profit Organization.</p>
                </div>
                <div className='forms'>
                    <b><p className='label'>Joining is free and secure. What are you waiting for?</p></b>
                    <EnterField forName='emailAddress' label='Email Address' placeholder='e.g. abc123@gmail.com'/>
                    <EnterField forName='pw' label='Create Password'/>
                    <EnterField forName='pw' label="Re-enter Password"/>
                    <EnterField forName='zipcode' label='Zip Code'/>
                    <EnterField forName='phone-number' label='Phone Number' placeholder='1-234-567-8910'/>
                    <SignUpButton className='long' text="Sign Up"/>
                </div>
            </div>
        </div>
    )
}

export default SignUp
