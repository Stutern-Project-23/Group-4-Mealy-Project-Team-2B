import React from 'react'
import Meals from './Meals';
import Price from './Price';
import Menu from './Menu';

const MealModal = () =>  (
    <div className='meal-cust-container'>
        <div className="food-desc-section">
            <Meals />
        </div>
        <div className="price-section">
            <Price />
            <Menu />
        </div>
    </div>
  )


export default MealModal;
