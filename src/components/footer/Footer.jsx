import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit similique reiciendis dolore ipsam suscipit fugiat magni ipsum, ex aut aliquam hic ab exercitationem atque adipisci debitis deleniti. Animi iure aperiam laborum voluptas ex quo quisquam est autem, porro vitae velit.</p>
          <p>Website by <strong>G</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
