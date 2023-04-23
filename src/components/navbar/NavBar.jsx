import React, { useRef } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navbar = useRef(null)
  const handleNavbar = ()=>{
    navbar.current.classList.toggle('navActive')
  }
  return (
    <header>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav ref={navbar}>
            <div>
              <a href='#footer'>About</a>
            </div>
            <div>
              <a href="#membership">Rewards</a>
            </div>
            <div>
              <Link>Login</Link>
            </div>
            <div>
              <Link>Join Now</Link>
            </div>
          </nav>
          <div className="bar" onClick={handleNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              color="blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
