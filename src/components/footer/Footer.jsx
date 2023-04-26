import React from "react";
import "./footer.scss";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer_wrapper">
          <a
            href="https://www.instagram.com/juice__gin/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <h1>JOIN OUR COMMUNITY</h1>
          <button>REGISTER FOR REWARDS</button>
          <p>
            JAG VIP Corporate Rewards Program empowers young
            entrepreneurs to find exclusive events & express themselves.These premier events come with access to members-only experiences
            and direct messaging to our invite-only community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
