import SignUpHeader from "./SignUpHeader"

import { useState } from "react";
import { signUp } from "../apis/signUpSubmit";
import SignOutHeader from "./SignOutHeader";


const SignUp = () => {
    
    const [inputs, setInputs] = useState({
        first: "",
        last: "",
        email: "",
        password: "",
        pw2: "",
        zipcode: "",
        phone: "",
        referral_code: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp(inputs, window.location.origin);
        window.location.href='/'
    }

        const loggedIn = localStorage.getItem('user').split(',')
        
        if (loggedIn[0].length > 1) {

            return (
                <div>
                <SignOutHeader/>
                <div className='mainSignUp'>
                    <div className='forms2'>
                    <div><h2>An account is already logged in! Logout to sign up.</h2></div>
                    </div>
                </div>
            </div>
            )
        }
    
    return (
        <div>
            <SignUpHeader/>
            <div className="mainSignUp">
                <div className='forms'>
                    <form onSubmit={handleSubmit}>
                        <label> First Name:
                            <input
                                type="text"
                                name="first"
                                value={inputs.first || ""}
                                onChange={handleChange}
                            />
                        </label><br /><br />
                        <label> Last Name:
                            <input
                                type="text"
                                name="last"
                                value={inputs.last || ""}
                                onChange={handleChange}
                            />
                        </label><br /><br />
                        <label> Username:
                            <input
                                type="text"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                placeholder='e.g. abc123'
                            />
                        </label><br /><br />
                        <label> Create Password:
                            <input
                                type="password"
                                name="pw"
                                value={inputs.pw || ""}
                                onChange={handleChange}
                            />
                        </label><br /><br />
                        <label> Re-enter Password:
                            <input
                                type="password"
                                name="pw2"
                                value={inputs.pw2 || ""}
                                onChange={handleChange}
                            />
                        </label><br /><br />
                        <label> Zip Code:
                            <input
                                type="text"
                                name="zipcode"
                                value={inputs.zipcode || ""}
                                onChange={handleChange}
                            />
                        </label><br /><br />
                        <label> Phone Number:
                            <input
                                type="text"
                                name="phone"
                                value={inputs.phone || ""}
                                onChange={handleChange}
                                placeholder='1-234-567-8910'
                            />
                        </label><br /><br />
                        <label> Referral Code:
                            <input
                                type="text"
                                name="referral"
                                value={inputs.referral || ""}
                                onChange={handleChange}
                            />
                        </label><br /><br />
                        <input type="submit" className='long' text="Sign Up" value="Sign Up" />
                    </form>    
                </div>
            </div>
        </div>
    )
}

export default SignUp
