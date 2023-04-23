import React from 'react'
import './recent.scss'
import { Slider } from '../..'
import event1 from '../../../assets/event-1.jpg'
import event2 from '../../../assets/event-2.jpg'
import event3 from '../../../assets/event-3.jpg'
import event4 from '../../../assets/event-4.jpg'

const RecentEvents = () => {
  const events = [
    {
      url:event1,
      link:'https://get-in.com/en/ONE_OF_US_Santa?seller_code=1i2gaEJonZ4'  
    },
    {
      url:event2,
      link:'https://megatix.co.id/events/people-of-the-future-x-kabana?aid=GLJUICEANDGINPPLFUTURE'  
    },
    {
      url: event3,
      link:'https://megatix.co.id/events/solar-live-fire-of-love-x-kabana?aid=GLJUICEANDGINSOLAR'
    },
    {
      url:event4,
      link:""
    }
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