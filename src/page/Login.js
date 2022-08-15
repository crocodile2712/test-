import React from 'react'
import "./Page.css";

function Login() {
  return (
    <div className='login'>
        <div className='login-wrapper'>
            <h1>SIGN IN</h1>
            <form className='login-form'>
                <input className="login-input" placeholder='username'></input>
                <input className="login-input" placeholder='password'></input>
                <button className='login-button'>LOGIN</button>
                <p className='login-link'>DO NOT YOU REMEMBER THE PASSWORD?</p>
                <p className='login-link'>CREATE A NEW ACCOUNT</p>
            </form>
        </div>
    </div>
  )
}

export default Login