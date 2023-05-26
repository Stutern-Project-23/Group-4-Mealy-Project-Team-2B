import React from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

const Icons = () => 
  (
    <div className='icons-container'>
        <div className="apple">
          <FaApple />
        </div>
        <div className="gmail">
           <FcGoogle />
        </div>
        <div className="facebook">
           <BsFacebook />
        </div>
    </div>
  )


export default Icons