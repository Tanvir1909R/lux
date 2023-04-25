import React, { useLayoutEffect, useRef } from "react";
import "./rewards.scss";
import { Slider } from "../..";
import { gsap } from "gsap";
import rightKey from "../../../assets/right_key.png";
import leftKey from "../../../assets/left_key.png";
import reward1 from '../../../assets/reward-1.jpg'
import reward2 from '../../../assets/reward-2.jpg'
import reward3 from '../../../assets/reward-3.jpg'
import soon from '../../../assets/c.jpg'

const Rewards = () => {
  const btn = useRef()
  useLayoutEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const moveY = e.pageY / 90 - 13;
      let centerX = window.innerWidth / 2
      let x = e.clientX - centerX
      let positiveX = Math.abs(x) / 3
      let xOf2 = x / 3
      // console.log(leftPosition,rightPosition);
      console.log(x);
      console.log(positiveX);
      gsap.to(".left_key", {
        x: x >= 0 ?  - xOf2 : xOf2,
        rotate: moveY,
        transformOrigin: "left",
      });
      gsap.to(".right_key", {
        x:  positiveX ,
        // x: x,
        rotate: -moveY,
        transformOrigin: "right",
      });
    });
  }, []);
  const data = [
    {
      url:reward1,
      link:"https://linktr.ee/kabanaubud",
    },
    {
      url:reward2,
      link:"https://linktr.ee/rumors_ibiza",
    },
    {
      url:reward3,
      link:"https://www.savaya.com",
    },
    {
      url:soon,
      link:"",
    }
  ]
  return (
    <div className="container">
      <div className="rewards_wrapper">
        <div className="heading">
          <h1>
            Nightlife & <br /> Lifestyle Rewards Club
          </h1>
          <div className="key_button">
            <img src={leftKey} alt="key" className="key left_key" />
            <button ref={btn}>Join Now</button>
            <img src={rightKey} alt="key" className="key right_key" />
          </div>
        </div>
        <div className="reward_detail">
          <div className="detail_heading">
            <small>MEMBER REWARDS</small>
            <h3>Rewards with exclusive venues</h3>
          </div>
          <div className="detail_desc">
            <p>
            Introducing you to an invite-only loyalty rewards club and partner program. Members benefit from exclusive deals in entertainment, dining, travel and much more. 
            </p>
          </div>
        </div>
        <div className="reward_slider">
          <Slider isAutoplay={true} isBreakdown={true} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
