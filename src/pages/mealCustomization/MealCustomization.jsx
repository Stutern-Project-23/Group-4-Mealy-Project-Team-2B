import React from 'react'
import closeBtn from './images/close.png'
import mainImage from './images/main-image.png'
import star1 from './images/filled-star.png'
import star2 from './images/stroke-star.png'
import plus1 from './images/black-plus.png'
import minus1 from './images/black-minus.png'
import plus2 from './images/org-plus.png'
import minus2 from './images/org-minus.png'
import { extraCart, ingredients, details } from './data'
import './style.css'

const MealCustomization = () =>  (
    <main className="main-container flex">
        <div className="main-close">
            <img src={closeBtn} alt="" />
        </div>
        <div className="container flex">
            <div className="about flex">
                <div className="main-ingredients">
                    <div className="">
                        <img src={mainImage} alt="" />
                    </div>
                    <div className="ingredients flex">
                        <h4>Main Ingredients:</h4>
                        <div className="ing flex">
                            {ingredients.map((ingredient) =>  (
                                <div className="ing-image" key={ingredient.id}>
                                    <img src={ingredient.image} alt="" />
                                </div>  
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div className="rates flex">
                    <div className="rate-imgs flex">
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star2} alt="" />
                    </div>
                    <p>(22)</p>
                </div>
                <div className="food-details flex">
                    {details.map((detail) => (
                        <div className="details flex" key={detail.id}>
                            <p>{detail.title}</p>
                            <small>{detail.text}</small>
                        </div>
                    ))}
                </div>
                <p className='some-text'>
                    This that, wherever comes to mind. Global village.
                    This that, wherever comes to mind. Global village.
                    This that, wherever comes to mind. Global village.
                </p>
            </div>
            <div className="food-cart flex">
                <div className="smokey flex" >
                    <div className="smokey-texts flex">
                        <p>Smokey Jollof</p>
                        <small>#350.00</small>
                    </div>
                    <div className="smokey-number flex">
                        <img src={plus2} alt="" className='minus' /> 3 <img src={minus2} alt="" className='plus' />
                    </div>
                </div>
                <div className="extras flex">
                    <h2>Extras</h2>
                    <div className="cart flex">
                        {extraCart.map((extra) => (
                            <div className="food flex" key={extra.id}>
                                <div className="price flex">
                                    <div className="food-img">
                                        <img src={extra.image} alt="" />
                                    </div>
                                    <div className="food-texts flex">
                                        <p>{extra.food}</p>
                                        <small>{extra.price}</small>
                                    </div>
                                </div>
                                <div className="food-number flex">
                                    <div className="close-img"> <img src={closeBtn} alt="" /> </div>
                                    <div className="add flex">
                                        <img src={minus1} alt="" className='minus' /> 3 <img src={plus1} alt="" className='plus' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="input-add flex">
                    <input type="text" name="" id="" className='amount' placeholder='#33, 067' /> 
                    <button type='submit' className='add-btn'>Add To Cart</button>
                </div> 
            </div>
        </div>
    </main>
)

export default MealCustomization