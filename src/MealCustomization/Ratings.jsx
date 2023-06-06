import React from 'react'
import Star from './images/star-fill.png'
import Rating from './images/empty-star.png'

const Ratings = () => 
   (
    <div className='ratings'>
        <div className="rating-star-div">
            <img src={Star} alt="rating-icon" />
            <img src={Star} alt="rating-icon" />
            <img src={Star} alt="rating-icon" />
            <img src={Star} alt="rating-icon" />
            <img src={Rating} alt="" />
        </div>
        <div className="review">
        <   p>(22)</p>
        </div>
    </div>
  )


export default Ratings