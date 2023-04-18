import React, { useEffect } from "react";
import "./membership.scss";
// import user from "../../../assets/user.webp";
// import gift from "../../../assets/gift.webp";
// import doller from "../../../assets/doller.webp";
import rightKey from "../../../assets/right_key.png";
import leftKey from "../../../assets/left_key.png";
// import MembershipCard from "../../membershipCard/MembershipCard";
import { gsap } from "gsap";

const Membership = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const depth = 90;
      const moveX = (e.pageX - window.innerWidth / 2) / depth;
      // const moveY = (e.pageY - window.innerHeight / 2) / 90;
      const moveY = (e.pageY / 90) - 25
      console.log(moveY);
      gsap.to('.left_key',{
        x:moveX * 2,
        rotate: moveY,
        transformOrigin:'left'
      })
      gsap.to('.right_key',{
        x:moveX * 2,
        rotate: - moveY,
        transformOrigin:'right'
      })
    });
  }, []);
  return (
    <div className="container">
      <div className="membership_wrapper">
        {/* <div className="membership_heading">
          <small>MEMBERSHIP PACKS</small>
          <h3>Membership Options</h3>
        </div>
        <div className="benefits">
          <div className="benefit">
            <div className="benefit_icon">
              <img src={user} alt="user" />
            </div>
            <div className="benefit_desc">
              <h4>Members Benefits</h4>
              <p>
                Members enjoy exclusive discounts and rewards with over 4500+
                businesses ANZ-wide.
              </p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit_icon">
              <img src={gift} alt="gift" />
            </div>
            <div className="benefit_desc">
              <h4>Trade Promotions</h4>
              <p>
                Our members receive automatic entries into ALL of our trade
                promotions.
              </p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit_icon">
              <img src={doller} alt="doller" />
            </div>
            <div className="benefit_desc">
              <h4>Flexible Plans</h4>
              <p>
                Pick a suitable membership for you! Memberships start at only
                $19.99.
              </p>
            </div>
          </div>
        </div>
        <div className="membership_cards">
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
        </div> */}
        <div className="membership_join">
          <h1>
            YOU DON’T HAVE TO STRUGGLE <span>ALONE...</span>
          </h1>
          <h3>
            LET’S TAKE <span>THE JOURNEY</span> TOGETHER.
          </h3>
          <div className="key_button">
            <img src={leftKey} alt="key" className="key left_key" />
            <button>Join Now</button>
            <img src={rightKey} alt="key" className="key right_key" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
