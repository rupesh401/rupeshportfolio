import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
  fa,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/fontawesome-free-solid";
import "../hero/Hero.css";

const Hero = () => {
  return (
    <div className="container" id="hero">
      <div className="row container hero-both">
        <div className="col-lg-7 hero-left">
          <div className="row social_and_name">
            <div className="col-lg-2 social-media">
              <ul className="social-media-links">
                <li>
                  <a href="https://www.facebook.com/gautam.rupesh.1/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rupesh-gautam-745a20197/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rupesh401">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-10">
              <h1 className="name">
                Hi, I'm <span className="diff-color">Rupesh</span> Gautam.
              </h1>
              <p className="position">
                <span>Software Developer</span>
              </p>
              <p className="mydescription">
                A passionate web Developer from Kitchener, Ontario with 2 years
                of experience in React JS with excellent and reponsive web
                design skills.
              </p>
              <button className="contactmebtn">
                <FontAwesomeIcon icon={faAddressBook} className="px-3" />
                Contact Me
              </button>
              <a href="images/Resume_new.pdf" className="btn btn_download">
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 hero-right">
          <img src="./images/logo.png" alt="myimage" className="myimage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
