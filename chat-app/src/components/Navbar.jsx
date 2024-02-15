import React from 'react'

export const Navbar = () => {

  //       <span>{currentUser.displayName}</span> line 10
  return (
    <div className='navbar'>
    <span className="logo">Lama Chat</span>
    <div className="user">
      <img src="https://cdn.tinybuddha.com/wp-content/uploads/2016/01/Happy-Guy.jpg" alt=""/>
      <span>Charles</span>
      <button onClick={()=>signOut(auth)}>logout</button>
    </div>
  </div>
  )
}
