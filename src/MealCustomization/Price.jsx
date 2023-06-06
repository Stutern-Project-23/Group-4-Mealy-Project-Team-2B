import React from 'react'

const Price = () => 
   (
<>
    <div className='meal-prices'>
        <div className="food-name">
            <h2>Smokey Jollof</h2>
            <p>#350.00</p>
        </div>
        <div className="quantity">
            <button type='button'>-</button>
            <span className='span'>3</span>
            <button type='button'>+</button>
        </div>
    </div>
    <h2 className='extras'>Extras</h2>
 </>
  )


export default Price