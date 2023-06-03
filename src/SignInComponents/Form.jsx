import React from 'react'
import { Link } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
import Image from '../signinimages/Screen Shot 2023-04-30 at 5.52.png'
import Logo from './Logo'
import SignInOptions from './SignInOptions'
import Icons from './Icons'



const Form = () => 

//  const { register, handleSubmit, formState: { errors } } = useForm();

   (
    <div className='form-container'>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Phone number/Email'  />
            <input type='text' placeholder='Password'  />
            <input type='submit' className='btn' placeholder='Sign In' />
        </form> */}
        <form action="" className='form'>
        <div className="logo-div">
            <Logo />
        </div>
        <h3>Sign In</h3>
          <div className='input'>
             <input className='name' type="text" placeholder='Phone number / Email' />
          </div>
          <div className='password-div'>
             <input className='password' type="password" placeholder='Password'/>
             <Link className='link' to='/forgetpassword'>Forget password?</Link>
          </div>
          <div>
             <button type='submit' className='btn'>Sign In</button>
          </div>
          <div className="options">
            <SignInOptions />
          
          </div>
            <Icons />
          <div className="option-two">
             <p>Dont have an account?</p>
             <Link to='/signup' className='signup-link'>Sign Up</Link>
          </div>
          <div className="guest-div">
          <p className='or'>or <br /></p>
          <Link to='/guest' className='guest-link'>Continue as a Guest</Link>
          </div>
        </form>
        <div className="image-div">
          <img src={Image} alt="Plate of food" />
        </div>
    </div>
  )


export default Form