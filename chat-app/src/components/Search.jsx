import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder="Search for user"/>
      </div>
      <div className='userChat'>
        <img src="https://cdn.tinybuddha.com/wp-content/uploads/2016/01/Happy-Guy.jpg" alt=""/>
        <div className="userChatInfo">
          <span>Sam</span>
        </div>
      </div>
    </div>
  )
}
