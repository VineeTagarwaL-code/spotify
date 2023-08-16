import React from 'react'

import './Signup.css'

export default function SignupPage() {
    return(
        <>
        <div className="signup">
            <div className="header">
            <img src="./images/Signup.png" alt="" />
            <h1>Sign up for free to start listening.</h1>
             <div className="signup-form">
                <label htmlFor="Email">What's your email?</label>
                <input type="email" id="email" placeholder='Enter your email '/>
                <label htmlFor="password">Create a password</label>
                <input type="password" id="password" placeholder='Create a password'/>
                <label htmlFor="name">What should we call you?</label>
                <input type="text"id='profile' placeholder='Enter a profile name'/>
                <div className="gen">
                <label className="gen-label" htmlFor="gender">What's your gender?</label>
                <div className="radio">
                <input type="radio" id="male" name="gender" value="male"/>Male
                <input type="radio" id="female" name="gender" value="female"/>Female
                <input type="radio" id="non-binary"  name="gender" value="non-binary"/>Non-binary
                <input type="radio" id="other"  name="gender" value="other"/>Other
                </div>
                </div>
                <button id='signup'>Sign up</button>
             </div>
             <p>Already have an account? <a href="#">Log in</a></p>
            </div>
        </div>




          </>
)
}