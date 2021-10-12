import EnterField from "./EnterField";
import SignUpButton from "./SignUpButton";
import SignUpHeader from "./SignUpHeader";

const Login = () => {
    return (
        <div>
            <SignUpHeader/>
            <div className='mainSignUp'>
                <div className='forms'>
                    <b><p className='label'>Glad to have you back!</p></b>
                    <EnterField forName='emailAddress' label='Email Address' placeholder='e.g. abc123@gmail.com'/>
                    <EnterField forName='pw' label='Password'/>
                    <SignUpButton className='long' text='Login'/>
                </div>
            </div>
        </div>
    )
}

export default Login
