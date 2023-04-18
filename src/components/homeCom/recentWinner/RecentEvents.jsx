import React from 'react'
import './recent.scss'
import { Slider } from '../..'

const RecentEvents = () => {
  const events = [
    
  ]
  return (
    <div className='container'>
        <div className="winner_wrapper">
            <div className='winner_heading'>
                <small>Events</small>
                <h3>Recent Events</h3>
            </div>
            <div className="winner_slider">
                <Slider isNavigation={true} isBreakdown={true}/>
            </div>
        </div>
    </div>
  )
}

export default RecentEvents