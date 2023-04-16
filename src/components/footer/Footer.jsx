import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
import {FaFacebookF, FaTiktok} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          <div className="company_desc">
            <img src={logo} alt="logo" />
            <p>
              info@luxurylifestyleaustralia.com.au <br />
              1300 589 543
            </p>
            <div className="social">
              <FaFacebookF/>
              <BsInstagram/>
              <FaTiktok/>
            </div>
          </div>
          <div className="footer_menu">
            <Link to={'/'}>Winner</Link>
            <Link to={'/'}>Giveaways</Link>
            <Link to={'/'}>Support SCCP</Link>
            <Link to={'/'}>Nissan Skyline</Link>
            <Link to={'/'}>Promotion</Link>
          </div>
          <div className="footer_menu">
            <Link to={'/'}>FAQ</Link>
            <Link to={'/'}>Contact Us</Link>
            <Link to={'/'}>Memberships</Link>
            <Link to={'/'}>Vip Weekly Cash Draw</Link>
          </div>
          <div className="footer_menu">
            <Link to={'/'}>T&C / VIP Cash Draw</Link>
            <Link to={'/'}>T&C / VIP Cash Draw</Link>
            <Link to={'/'}>T&C / VIP Cash Draw</Link>
            <Link to={'/'}>T&C / VIP Cash Draw</Link>
            <Link to={'/'}>T&C / VIP Cash Draw</Link>
            <Link to={'/'}>T&C / VIP Cash Draw</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
