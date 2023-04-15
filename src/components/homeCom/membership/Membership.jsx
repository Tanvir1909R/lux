import React from "react";
import "./membership.scss";
import user from "../../../assets/user.webp";
import gift from "../../../assets/gift.webp";
import doller from "../../../assets/doller.webp";
import MembershipCard from "../../membershipCard/MembershipCard";

const Membership = () => {
  return (
    <div className="container">
      <div className="membership_wrapper">
        <div className="membership_heading">
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
          <MembershipCard/>
          <MembershipCard/>
          <MembershipCard/>
          <MembershipCard/>
        </div>
      </div>
    </div>
  );
};

export default Membership;
