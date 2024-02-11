import React from 'react'
//import "./style.scss"

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className = "logo">Lama </span>
            <span className = 'title'>Register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" />
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}