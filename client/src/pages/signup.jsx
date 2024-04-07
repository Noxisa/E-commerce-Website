import React from 'react';
import './CSS/signup.css';

const Signup = () => {
    return (
        <div className='loginsignup'> 
<div className='loginsignup-container'>
    <h1>Sign up</h1>
    <div className='loginsingup-fields'>
        <input type='text' placeholder='Your Name' />
        <input type='emial' placeholder='Email Address' />
        <input type='password' placeholder='Password' />
    </div>
    <button>Continue</button>
    <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
    <div className="loginsignup-aggree">
        <imput type='checkbox' name='' id='' />
        <p>Agree to the terms of use & privacy policy.</p>
    </div>
</div>
        </div>
    )
}

export default Signup;