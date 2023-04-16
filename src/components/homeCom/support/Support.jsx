import React from "react";
import "./support.scss";
import supportLogo from "../../../assets/support_logo.webp";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="container">
      <div className="support_wrapper">
        <div className="support_heading">
          <small>CHARITIES WE SUPPORT</small>
          <h3>PROUDLY SUPPORTING</h3>
        </div>
        <div className="support_cards">
          <div className="support_card">
            <div className="support_card_logo">
              <img src={supportLogo} alt="logo" />
            </div>
            <div className="support_card_desc">
              <h4>Charlie Teo</h4>
              <p>
                Dr Teo strongly believes that a surgeon’s responsibility to his
                patients shouldn’t end after surgery.
              </p>
              <Link to="/">More Info</Link>
            </div>
          </div>
          <div className="support_card">
            <div className="support_card_logo">
              <img src={supportLogo} alt="logo" />
            </div>
            <div className="support_card_desc">
              <h4>Charlie Teo</h4>
              <p>
                Dr Teo strongly believes that a surgeon’s responsibility to his
                patients shouldn’t end after surgery.
              </p>
              <Link to="/">More Info</Link>
            </div>
          </div>
          <div className="support_card">
            <div className="support_card_logo">
              <img src={supportLogo} alt="logo" />
            </div>
            <div className="support_card_desc">
              <h4>Charlie Teo</h4>
              <p>
                Dr Teo strongly believes that a surgeon’s responsibility to his
                patients shouldn’t end after surgery.
              </p>
              <Link to="/">More Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
