import React from "react";
import "./rewards.scss";
import { Slider } from "../..";

const Rewards = () => {
  return (
    <div className="container">
      <div className="rewards_wrapper">
      <div className="heading">
        <h1>Australia’s Luxury & <br /> Lifestyle Rewards Club</h1>
        <button>Join Now</button>
      </div>
      <div className="reward_detail">
        <div className="detail_heading">
          <small>MEMBER REWARDS</small>
          <h3>Rewards with 4500+ businesses</h3>
        </div>
        <div className="detail_desc">
          <p>Introducing you to Australia’s most luxurious loyalty rewards club and partner program. Members benefit from exclusive deals in shopping, entertainment, dining, travel and much more.</p>
          <button>See More</button>
        </div>
      </div>
      <div className="reward_slider">
        <Slider isAutoplay={true} isBreakdown={true}/>
      </div>
      </div>
    </div>
  );
};

export default Rewards;
