import React from "react";
import "../MySkills/MySkills.css";

const MySkills = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="skill_section mb-5">My Skills</h1>
        <div className="col-lg-6 skill_left">
          <div className="progress">
            <span className="skill">
              HTML5 <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              CSS 3 <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              PHP <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        
        <div className="progress">
          <span className="skill">
            NodeJS <i className="val">90%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        </div>
        <div className="col-lg-6 skill_right">
          <div className="progress">
            <span className="skill">
              Javascript<i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              REACT <i className="val">70%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              ASP .NET <i className="val">60%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              MySQl / MongoDB <i className="val">70%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
