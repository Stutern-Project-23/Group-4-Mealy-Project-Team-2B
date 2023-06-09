import React from 'react'
import Edit from './profile-icons/Group 1 (1).png'

const Adress = () => 
   (
    <div className='my-address'>
          <p className='my-info'>Addresses</p>
          <div className="table-info">
                <div className="table">
                    <table>
                        <tr>
                            <td>Country</td>
                            <td className='right'>City/State</td>
                        </tr>
                        <tr>
                            <td className='name'>Nigeria</td>
                            <td className='name right'>Akoka Lagos State</td>
                        </tr>
                        <tr>
                            <td>Street Number</td>
                            <td className='right'>Postal Code</td>
                        </tr>
                        <tr>
                            <td className='name'>St finbarrs road 73</td>
                            <td className='name right'>100213</td>
                        </tr>
                    </table>
                </div>
                <div className="edit">
                    <span>Edit</span>
                    <img src={Edit} alt="" />
                </div>
        </div>
    
    </div>
  )


export default Adress
