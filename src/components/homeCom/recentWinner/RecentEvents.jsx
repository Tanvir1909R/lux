import React from 'react'
import './recent.scss'
import { Slider } from '../..'
import event1 from '../../../assets/event-1.jpg'
import event2 from '../../../assets/event-2.jpg'
import event3 from '../../../assets/event-3.jpg'
import event4 from '../../../assets/event-4.jpg'

const RecentEvents = () => {
  const events = [
    event1,event2,event3,event4
  ]
  return (
    <div className='container'>
        <div className="winner_wrapper">
            <div className='winner_heading'>
                <small>Events</small>
                <h3>Recent Events</h3>
            </div>
            <div className="winner_slider">
                <Slider isNavigation={true} isBreakdown={true} data={events}/>
            </div>
        </div>
    </div>
  )
}

export default RecentEvents