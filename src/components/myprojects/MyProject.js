import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/fontawesome-free-solid";
import "../myprojects/MyProject.css";

const MyProject = () => {
  return (
    <div className="container">
      <h1 className="my_projects">My Projects</h1>
      <div className="project_list">
        <div className="project">
          <img
            src="./images/tiffinbatta.png"
            alt="Tiffin Batta"
            className="Project_image"
          />
          <div className="layer">
            <h5 className="project_title">Tiffin Batta</h5>
            <p>Online food delivery platform with different plans.</p>
            <a href="https://tiffinbatta.com/">
              <FontAwesomeIcon icon={faLink} />{" "}
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="./images/Web_Design_4.png"
            alt="Food Lab"
            className="Project_image"
          />
          <div className="layer">
            <h5 className="project_title">Food Lab</h5>
            <p className="project_desc">
              Subscription based food system for better health.
            </p>
            <a className="link_icon" href="#">
              <FontAwesomeIcon className="linkk_icon" icon={faLink} />{" "}
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="./images/Web_Design1.png"
            alt="Web Design 2"
            className="Project_image"
          />
          <div className="layer">
            <h5 className="project_title">Pacific Resort Design</h5>
            <p>Design the website with different position.</p>
            <a href="https://rupeshgautam.com.np/responsive-assignment-2/">
              <FontAwesomeIcon icon={faLink} />{" "}
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="./images/Web_Design_2.png"
            alt="Web Design 3"
            className="Project_image"
          />
          <div className="layer">
            <h5 className="project_title">Smart Buy</h5>
            <p>Ecommerce Site with different listing of mobile phones.</p>
            <a href="#">
              <FontAwesomeIcon icon={faLink} />{" "}
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="./images/Web_Design_3.png"
            alt="Food Design 4"
            className="Project_image"
          />
          <div className="layer">
            <h5 className="project_title">Take a Look</h5>
            <p>Grid based designing of the website.</p>
            <a href="#">
              <FontAwesomeIcon icon={faLink} />{" "}
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="./images/Web_Design_5.png"
            alt="Food Design 4"
            className="Project_image"
          />
          <div className="layer">
            <h5 className="project_title">Food Lab (Detail Page)</h5>
            <p>Detail Page of Food Lab website.</p>
            <a href="#">
              <FontAwesomeIcon icon={faLink} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
