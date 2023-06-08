import React from 'react'
import './style.css'
import { orders, histories } from './data'

const Orders = () =>  (
    <div className="main-orders-container flex">
        <h1>Account Settings</h1>
        <div className="orders-container flex">
            <div className="side-bar">
                <ul className='flex'>
                    <li>My Profile</li>
                    <li className='active'>Orders</li>
                    <li>Payments</li>
                    <li>Logout</li>
                    <li>Delete Account</li>
                </ul>
            </div>
            <div className="main">
                <div className="orders flex">
                    <div className="ongoing-orders flex">
                        <h3 className='head-ord'>Ongoing Orders</h3>
                        <div className="ongoing">
                            {orders.map((order) => (
                                <div className="order-container flex">
                                    <div className="order flex" key={order.id}>
                                        <div className="order-img">
                                            <img src={order.image} alt="" />
                                        </div>
                                        <div className="order-texts flex">
                                            <h5>{order.name}</h5>
                                            <small>{order.details}</small>
                                            <small>{order.detail2}</small>
                                            <p>{order.price}</p>
                                        </div>
                                    </div>
                                    <div className='order-btn'>
                                        <button type="submit" >{order.text}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-history flex">
                        <h3 className='head-ord'>Order History</h3>
                        <div className="history">
                            {histories.map((history) => (
                                    <div className="order-container flex">
                                        <div className="order flex" key={history.id}>
                                            <div className="order-img">
                                                <img src={history.image} alt="" />
                                            </div>
                                            <div className="order-texts flex">
                                                <h5>{history.name}</h5>
                                                <small>{history.details}</small>
                                                <small>{history.detail2}</small>
                                                <p>{history.price}</p>
                                            </div>
                                        </div>
                                        <div className='order-btn'>
                                            <button type="submit" >{history.text}</button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
)

export default Orders