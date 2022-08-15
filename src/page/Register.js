import React from 'react'
import "./Page.css";

function Register() {
  return (
    <div className='register'>
        <div className='register-wrapper'>
            <h1>CREATE AN ACCOUNT</h1>
            <form className='register-form'>
                <input placeholder='name'></input>
                <input placeholder='last name'></input>
                <input placeholder='username'></input>
                <input placeholder='email'></input>
                <input placeholder='password'></input>
                <input placeholder='confirm password'></input>
                <span>
                  'By creating an account, I consent to the processing of my personal data in accordance with the '
                  <b>PRIVACY POLICY</b>
                </span>
                <button>CREATE</button>
            </form>
        </div>
    </div>
  )
}

export default Register