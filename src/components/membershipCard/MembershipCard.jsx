import React from 'react'
import './mCard.scss'

const MembershipCard = () => {
  return (
    <div className='card'>
        <div className="card_price">
            <h4>BRONZE MEMBERSHIP</h4>
            <small>Per Month</small>
            <h1><small>$</small>19.99</h1>
        </div>
        <div className="card_desc">
            <p>Exclusive discounts to 4500+ businesses</p>
            <p>Access to our Partner network</p>
            <p>Invite to our member-only events</p>
            <p>10% off our merchandise</p>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default MembershipCard