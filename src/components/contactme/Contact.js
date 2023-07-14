import React from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/fontawesome-free-solid";
import "../contactme/Contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r8b41f5",
        "template_wmslyp8",
        e.target,
        "pcljsiuaBsILRrgQI"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1 className="contact">Get in Touch</h1>
      <div className="row">
        <div className="col-lg-5 contact_left">
          <div className="contactleft_item">
            <FontAwesomeIcon className="fa-3x" icon={faPhone} />
            <h3 className="contactleft_title">Contact Number</h3>
            <p className="contactleft_desc">+15195890548</p>
          </div>
          <div className="contactleft_item">
            <FontAwesomeIcon className="fa-3x" icon={faLocationArrow} />
            <h3 className="contactleft_title">Address</h3>
            <p className="contactleft_desc">Kitchener, Ontario, Canada</p>
          </div>
          <div className="contactleft_item">
            <FontAwesomeIcon className="fa-3x" icon={faEnvelope} />
            <h3 className="contactleft_title">Email</h3>
            <p className="contactleft_desc">gautamrupesh401@gmail.com</p>
          </div>
        </div>
        <div className="col-lg-7 contact_right">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="form_item">
              <input
                className="namee"
                placeholder="Enter your name"
                name="namee"
              />
            </div>
            <div className="form_item">
              <input
                type="email"
                className="email"
                name="email"
                placeholder="Emter your email"
                required
              />{" "}
            </div>
            <div className="form_item">
              <textarea
                className="message"
                name="message"
                placeholder="Enter your Message"
                required
              />
              <div className="form_item">
                <button type="submit" className="btn btn-danger">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
