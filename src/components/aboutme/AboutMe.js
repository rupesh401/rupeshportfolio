import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/fontawesome-free-solid";
import "../aboutme/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 aboutme_left">
          <h1 className="aboutme_head">About Me</h1>
          <img
            className="aboutus_image"
            src="./images/aboutme.png"
            alt="About Me Image"
          />
        </div>
        <div className="col-lg-6 aboutme_right">
          <h2 className="web_developer">
            Web<span className="diff-color"> Developer</span>{" "}
          </h2>
          <p className="aboutme_first_desc">
            To secure a challenging position in the corporate world using my
            skills as a Web Developer, so that I can meet to my passion of doing
            work in this field.{" "}
          </p>
          <ul className="aboutme_list">
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <span className="detail">Birthday:</span>
              August 24 1996
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <span className="detail">Phone:</span>
              5195890548
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <span className="detail">Email:</span>
              gautamrupesh401@gmail.com
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <span className="detail">No of Experience years:</span>2 years
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <span className="detail">Degree:</span> Web Development(Graduated December 2022)
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <span className="detail">FreeLancing :</span>Available
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
