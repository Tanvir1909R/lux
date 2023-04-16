import React from 'react'
import './recent.scss'
import { Slider } from '../..'

const RecentWinner = () => {
  return (
    <div className='container'>
        <div className="winner_wrapper">
            <div className='winner_heading'>
                <small>Winner</small>
                <h3>Recent Winner</h3>
            </div>
            <div className="winner_slider">
                <Slider isNavigation={true} isBreakdown={true}/>
            </div>
        </div>
    </div>
  )
}

export default RecentWinner