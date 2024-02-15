import React from 'react'
import Add from "../img/addAvatar.png"
export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className = "logo">Chat App </span>
            <span className = 'title'>Register</span>
            <form>
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input style = {{display:"none"}}type="file" id="file"/>
                <label htmlFor="file">
                  <img src={Add} alt=""/>
                  <button type="button">Change Avatar</button>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}