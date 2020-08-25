import React from "react";
import Logo from "../images/breaking-bad-logo.png";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper black">
        <div className="container">
          <img
            src={Logo}
            alt="Breaking Bad"
            className="brand-logo center responsive-img"
            width="70"
            height="50"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
