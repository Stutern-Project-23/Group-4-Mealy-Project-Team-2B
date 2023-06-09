import React from 'react'
import MyProfile from './MyProfile'
import PersonalInfo from './PersonalInfo'
import Adress from './Adress'

const Body = () => 
   (
    <div className='profile-body'>
         <h3>Account settings</h3>
         <div className="profile-info-container">
            <div className="sidebar">
               {/* THE SIDEBAR SHOULD GO HERE */}
            </div>
            <div className="profile-info">
               <MyProfile />
               <PersonalInfo />
               <Adress />
            </div>
           
         </div>
    </div>
  )


export default Body