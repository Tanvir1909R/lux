import React from "react";
import "./rewards.scss";
import { Slider } from "../..";
import { gsap } from "gsap";
import rightKey from "../../../assets/right_key.png";
import leftKey from "../../../assets/left_key.png";

const Rewards = () => {
  // const btn = useRef()
  // useLayoutEffect(() => {
  //   document.addEventListener("mousemove", (e) => {
  //     // const depth = 90;
  //     // const moveX = e.clientX - window.innerWidth
  //     // const moveX = (e.pageX - window.innerWidth / 2) / depth;
  //     const moveY = e.pageY / 90 - 13;
  //     let leftPosition = btn.current.getBoundingClientRect().left - e.clientX
  //     let rightPosition = btn.current.getBoundingClientRect().right - e.clientX
  //     console.log(rightPosition, e.clientX);
  //     gsap.to(".left_key", {
  //       x: leftPosition < -63 ? -63 + leftPosition : -leftPosition,
  //       // x: -leftPosition,
  //       rotate: moveY,
  //       transformOrigin: "left",
  //     });
  //     gsap.to(".right_key", {
  //       x: rightPosition > 63 ? rightPosition =  63 + rightPosition : -rightPosition,
  //       rotate: -moveY,
  //       transformOrigin: "right",
  //     });
  //   });
  // }, []);

  const handleInter = ()=>{
    gsap.to('.left_key',{
      transform:.5,
      left:23 + '%',
      opacity:1
    })
    gsap.to('.right_key',{
      transform:.5,
      right:23 + '%',
      opacity:1
    })
  }
  const handleLeave = ()=>{
    gsap.to('.left_key',{
      transform:.5,
      left:10 + '%',
      opacity:0.5
    })
    gsap.to('.right_key',{
      transform:.5,
      right:10 + '%',
      opacity:0.5
    })
  }
  return (
    <div className="container">
      <div className="rewards_wrapper">
        <div className="heading">
          <h1>
            Nightlife & <br /> Lifestyle Rewards Club
          </h1>
          <div className="key_button">
            <img src={leftKey} alt="key" className="key left_key" />
            <button onMouseEnter={handleInter} onMouseLeave={handleLeave}>Join Now</button>
            <img src={rightKey} alt="key" className="key right_key" />
          </div>
        </div>
        <div className="reward_detail">
          <div className="detail_heading">
            <small>MEMBER REWARDS</small>
            <h3>Rewards with 4500+ businesses</h3>
          </div>
          <div className="detail_desc">
            <p>
              Introducing you to Australia’s most luxurious loyalty rewards club
              and partner program. Members benefit from exclusive deals in
              shopping, entertainment, dining, travel and much more.
            </p>
            <button>See More</button>
          </div>
        </div>
        <div className="reward_slider">
          <Slider isAutoplay={true} isBreakdown={true} />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
