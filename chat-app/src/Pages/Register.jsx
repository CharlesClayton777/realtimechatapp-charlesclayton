import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className = "logo">Lama </span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" />
            </form>
        </div>
    </div>
  )
}

export default Register; //export this file