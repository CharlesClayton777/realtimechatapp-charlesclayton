import React from 'react'
import Add from "../img/addAvatar.png"

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className = "logo">Chat App </span>
            <span className = 'title'>Register</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign In</button>
            </form>
            <p>Don't have an account? Register here</p>
        </div>
    </div>
  )
}