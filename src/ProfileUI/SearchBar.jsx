import React from 'react'
import Location from './profile-icons/Frame-1.png'
import Calendar from './profile-icons/Vector (3).png'
import Notification from './profile-icons/Vector (2).png'
import Avatar from './profile-icons/icons8-avatar-96.png'

const SearchBar = () => 
   (
    <div className='search-bar'>
          <div className="location">
             <img src={Location} alt="" />
          </div>
          
          <div className="input">
            <input type="text" placeholder='Enter Location'/>
          </div>
          
          <div className="avatar">
              <img src={Avatar} alt="" />
          </div>
          <div className="calendar">
              <img src={Calendar} alt="" />
          </div>
         
          <div className="notification">
             <img src={Notification} alt="" />
          </div>
         
      
    </div>
  )


export default SearchBar