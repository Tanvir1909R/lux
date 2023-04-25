import React from "react";
import "./membership.scss";
import {CgSandClock} from 'react-icons/cg'
import {CiBadgeDollar} from 'react-icons/ci'
import {FaDiscord} from 'react-icons/fa'
import card from '../../../assets/card.png'

const Membership = () => {
  return (
    <div className="container bg-black">
      <div className="membership_wrapper">
        <div className="membership_join">
          <h1>
            DISCOVER NEW PARTY <span>LOCATIONS..</span>
          </h1>
          <h3>
            LET’S TAKE <span>THE JOURNEY</span> TOGETHER.
          </h3>
          <button>Join Now</button>
          <p>There are no fees—just consult with our team if you think it is the right fit for your <br /> needs, and we’ll get you set up for free.</p>
        </div>
        <div className="rewards_program">
          <div className="program_card">
            <img src={card} alt="card" />
          </div>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit_icon">
                <CiBadgeDollar />
              </div>
              <div className="benefit_desc">
                <h4>Preferred Pricing</h4>
                <li>Enjoy exclusive pricing and benefits.</li>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit_icon">
                <CgSandClock />
              </div>
              <div className="benefit_desc">
                <h4>Early Access</h4>
                <li>Try new and seasonal events before anyone else.</li>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit_icon">
                <FaDiscord />
              </div>
              <div className="benefit_desc">
                <h4>Discord Access</h4>
                <li>Chat directly with our corporate event planners via Slack.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
