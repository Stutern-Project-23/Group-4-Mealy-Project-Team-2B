import React from 'react'
import './style.css'
import calender from './calendar.png'
import gtbank from './Rectangle 8.png'
import image2 from './vector (1).png'
import { cart, receipt } from './data'

const PaymentCheckout = () => (
    <div className="payment-checkout flex">
        <div className="delivery-payment flex">
            <div className="payment">
                <div className="delivery-information flex">
                    <h1>Delivery Information</h1>
                    <form action="post" className='delivery-form flex'>
                        <div className="name-number flex">
                            <input type="text" name="name" id="name" className='name-input' placeholder='Name' />
                            <input type="number" name="number" id="number" className='number' placeholder='Mobile number' />
                        </div>
                        <input type="text" name="location" id="location" className='current-location' placeholder='Current location' />
                        
                        <textarea name="message" id="message" cols={30} rows={5} className='notes-area' placeholder='Notes (Optional)' />
                    </form>
                </div>
            </div>
            <div className="schedule flex">
                <div className="schedule-text flex">
                    <h1>Schedule Delivery</h1>
                    <input className="switch" type="checkbox" checked/>
                </div>
                <div className="calender-input flex">
                    <input type="datetime" name="" id="" className='calender' placeholder='Select preferred date and time' /> <img src={calender} alt="" className='calender-img' />
                </div>
            </div>
            <div className="payment-method flex">
                <h1>Payment Method</h1>
                <div className="pay flex">
                    <div className="method flex">
                        <button type='submit'>Pay Online</button>
                        <button type='submit'>Cash on Delivery</button>
                        <button type='submit'>Food Voucher</button>
                    </div>
                    <div className="payment-card flex">
                        <div className="gt-image"><img src={gtbank} alt="" /></div>
                        <div className="atm-texts flex">
                            <p>Guarantee Trust Bank</p>
                            <small>**** **** 5678</small>
                        </div>
                        <div className="image2"><img src={image2} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="checkout flex">
            <div className="cart flex">
                {cart.map((items) => (
                    <div className="food flex" key={items.id}>
                        <div className="price flex">
                            <div className="food-img">
                                <img src={items.image} alt="" />
                            </div>
                            <div className="food-texts flex">
                                <p>{items.food}</p>
                                <small>{items.price}</small>
                            </div>
                        </div>
                        <div className="food-number flex">
                            <div className="close-img"> <img src={items.closeBtn} alt="" /> </div>
                            <div className="add flex">
                                <img src={items.minusBtn} alt="" className='minus' /> 3 <img src={items.plusBtn} alt="" className='plus' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="discount-input flex">
                <input type="number" name="" id="" className='discount' placeholder='Enter discount code' /> <button type='submit' className='discount-btn'>Apply</button>
            </div>
            <div className="receipt flex">
                {receipt.map((total) => (
                    <div className="total flex" key={total.id}>
                        <div className="amount flex"><p>{total.item}</p> <small>{total.price}</small></div>
                    </div>
                ))}
                
                <button type="submit">Payment</button>
                <p className='cancel-order'><a href="/">Cancel Order</a></p>
            </div>
        </div>
    </div>
)

export default PaymentCheckout