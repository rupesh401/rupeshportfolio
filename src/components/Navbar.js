import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle } from "@fortawesome/fontawesome-free-solid";
import "../components/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="container">
      <div className="nav">
        <h2 className="logo">
          <span className="diff-color">Rupesh</span> G
        </h2>
        <ul
          className={isMobile ? "nav-mobile-links" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <a className="nav-itemss">Home</a>
          </li>
          <li>
            <a className="nav-itemss">About Me</a>
          </li>
          <li>
            <a className="nav-itemss">Skills</a>
          </li>
          <li>
            <a className="nav-itemss">My Services</a>
          </li>
          <li>
            <a className="nav-itemss">Contact Us</a>
          </li>
        </ul>
        <button
          className="mobile-menu-item"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
