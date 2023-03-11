import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCrop,
  faHandScissors,
} from "@fortawesome/fontawesome-free-solid";
import "../myservices/MyServices.css";

const MyServices = () => {
  return (
    <div className="container">
      <h1 className="myservices">My Services</h1>
      <div className="services">
        <div className="service_list">
          <FontAwesomeIcon className="font_icon fa-5x" icon={faCode} />
          <p className="service_list_name">Web Design</p>
          <p className="service_list_desc">
            I help users to design their site in professional way with excellent
            look and feel.
          </p>
        </div>
        <div className="service_list">
          <FontAwesomeIcon className="font_icon fa-5x" icon={faCrop} />
          <p className="service_list_name">Full Stack Web Development</p>
          <p className="service_list_desc">
            I help users to design their site in professional way with excellent
            look and feel.
          </p>
        </div>
        <div className="service_list">
          <FontAwesomeIcon className="font_icon fa-5x" icon={faHandScissors} />
          <p className="service_list_name">Frontend Design (React) </p>
          <p className="service_list_desc">
            I help users to design their site in professional with React state
            and redux global state management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
