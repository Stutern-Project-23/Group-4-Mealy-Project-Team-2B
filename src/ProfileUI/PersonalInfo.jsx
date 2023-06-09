import React from 'react'
import Edit from './profile-icons/Group 1 (1).png'

const PersonalInfo = () => 
   (
    <div className='personal-info'>
        <p className='my-info'>Personal Information</p>
        <div className="table-info">
            <div className="table">
                <table>
                    <tr>
                        <td>First Name</td>
                        <td className='right'>Last Name</td>
                    </tr>
                    <tr>
                        <td className='name'>Amara</td>
                        <td className='name right'>Chukwu</td>
                    </tr>
                    <tr>
                        <td>Email address</td>
                        <td className='right'>Phone</td>
                    </tr>
                    <tr>
                        <td className='name'>amarachuckwu@gmail.com</td>
                        <td className='name right'>+234 543 6788 0086</td>
                    </tr>
                </table>
            </div>
            <div className="edit">
                <span>Edit</span>
                <img src={Edit} alt="" />
            </div>
        </div>
    </div>
  )


export default PersonalInfo