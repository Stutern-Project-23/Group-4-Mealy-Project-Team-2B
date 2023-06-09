import React from 'react'
import Avatar from './profile-icons/icons8-avatar-96.png'

const MyProfile = () => 
 (
    <div>
        <h3>My Profile</h3>
        <div className="my-profile-cont">
            <div className="my-avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="details">
                <p className='my-name'>Amara Chukwu</p>
                <p>Lagos, Nigeria</p>
            </div>
        </div>
    </div>
  )


export default MyProfile