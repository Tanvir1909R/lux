import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          <div className="company_desc">
            <img src={logo} alt="logo" />
            <div>
              <p>
                hola@https://juicegin.com <br />
                1300 589 543
              </p>
              <a
                href="https://www.instagram.com/juice__gin/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
          <div className="timer">
            <div>
              <p>000</p>
              <span>Days</span>
            </div>
            <div>
              <p>00</p>
              <span>hours</span>
            </div>
            <div>
              <p>00</p>
              <span>min</span>
            </div>
            <div>
              <p>00</p>
              <span>sec</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
