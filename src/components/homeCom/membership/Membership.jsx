import React from "react";
import "./membership.scss";
import tag from "../../../assets/tag.webp";
import timer from "../../../assets/timer.webp";
import discord from "../../../assets/discord.png";

const Membership = () => {
  return (
    <div className="container">
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
          <div className="program_card">CARD</div>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit_icon">
                <img src={tag} alt="tag" />
              </div>
              <div className="benefit_desc">
                <h4>Preferred Pricing</h4>
                <li>Enjoy exclusive pricing and benefits.</li>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit_icon">
                <img src={timer} alt="sand clock" />
              </div>
              <div className="benefit_desc">
                <h4>Early Access</h4>
                <li>Try new and seasonal events before anyone else.</li>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit_icon">
                <img src={discord} alt="discord" />
              </div>
              <div className="benefit_desc">
                <h4>Discord Access</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
