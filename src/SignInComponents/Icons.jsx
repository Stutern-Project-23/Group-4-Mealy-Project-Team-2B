import React from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

const Icons = () => 
  (
    <div className='icons-container'>
        <div className="apple">
          <FaApple className='apple-logo' />
        </div>
        <div className="gmail">
           <FcGoogle className='google' />
        </div>
        <div className="facebook">
           <BsFacebook className='facebook-logo' />
        </div>
    </div>
  )


export default Icons