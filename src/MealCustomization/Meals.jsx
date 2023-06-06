import React from 'react'
import Food  from "./images/food.png"
import Tomato from "./images/img-1.png"
import Spinach from "./images/img-2.png"
import Onion from "./images/img-3.png"
import Leaf from "./images/img-4 (2).png"
import Dough from "./images/img-5 (2).png"
import Image from "./images/img-6.png"
import Images from "./images/img-7.png"
import Ratings from './Ratings'
import NutriValue from './NutriValue'
import FoodDesc from './FoodDesc'

const Meals = () => 
  (
    <div className='Meals'>
        <div className="food-div">
        <img className='food' src={Food} alt="plate of food" />
        </div>
        <div className="ingredients">
            <div className="text-ingredients">
                <p>Main Ingredients:</p>
            </div>
            <div className="img-ingredients">
                <img src={Tomato} alt="" />
                <img src={Spinach} alt="" />
                <img src={Onion} alt="" />
                <img src={Leaf} alt="" />
                <img src={Dough} alt="" />
                <img src={Image} alt="" />
                <img src={Images} alt="" />
            </div>
        </div>
        <Ratings />
        <NutriValue />
        <FoodDesc />
    </div>
  )


export default Meals