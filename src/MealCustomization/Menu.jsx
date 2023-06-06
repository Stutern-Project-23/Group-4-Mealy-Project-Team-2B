import React from 'react'
import Fish from './images/fish.png'
import Chicken from './images/chicken.png'
import Plantain from './images/plantain.png'

const Menu = () => 
  (
<>
    <div className='extra-div'>
       <div className="order-img">
         <img src={Fish} alt="" />
       </div>
       <div className="order-price">
           <p className='name'>Grilled Fish</p>
           <p className='amount'>#350.00</p>
       </div>
       <div className="order-quantity">
            <button type='button'>-</button>
            <span>3</span>
            <button type='button'>+</button>
       </div>
    </div>
    <div className='extra-div'>
       <div className="order-img">
         <img src={Chicken} alt="" />
       </div>
       <div className="order-price">
           <p className='name'>Deep Fried Chicken</p>
           <p className='amount'>#350.00</p>
       </div>
       <div className="order-quantity">
            <button type='button'>-</button>
            <span>3</span>
            <button type='button'>+</button>
       </div>
    </div>
    <div className='extra-div'>
       <div className="order-img">
         <img src={Plantain} alt="" />
       </div>
       <div className="order-price">
           <p className='name'>Fried Plantain</p>
           <p className='amount'>#350.00</p>
       </div>
       <div className="order-quantity">
            <button type='button'>-</button>
            <span>3</span>
            <button type='button'>+</button>
       </div>
    </div>

    <div className="cart-input">
        <input type="text" placeholder='#33,067'/>
        <button type='button' className='btn'>Add to cart</button>
    </div>
</>    
  )


export default Menu