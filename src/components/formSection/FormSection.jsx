import React from "react";
import MainHeading from "../benefits/heading/MainHeading";
import "./FormSection.css";
import { FaFacebook , FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
const FormSection = () => {
  return (
    <section>
      <MainHeading
        startPgf={"Contact Form"}
        heading={"Student Information"}
        mainPgf={
          "If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
        }
      />

      <div className="formContainer" data-aos="fade-up">
        <div className="buttonsContainer">
            <div className="icon">
            <FaFacebook />
            </div>
            <div className="icon">
            <FaTwitter />
            </div>
            <div className="icon">
            <ImLinkedin />
            </div>
        </div>
        <form action="">
          <div className="inputs">
            <div className="input">
              <p>Parent Name</p>
              <input required id="1" type="text" placeholder="Enter Parent Name" />
            </div>
            <div className="input">
              <p>Email Address</p>
              <input required id="2" type="email" placeholder="Enter Email Address" />
            </div>
            <div className="input">
              <p>Phone Number</p>
              <input id="3" type="number" placeholder="Enter Phone Number" />
            </div>
            <div className="input">
              <p>Student Name</p>
              <input required id="4" type="text" placeholder="Enter Students Name" />
            </div>
            <div className="input">
              <p>Student Age</p>
              <input id="5" type="number" placeholder="Enter Student Age" />
            </div>
            <div className="input">
              <p>Program of Intrest</p>
              <input type="text" placeholder="Select Program" />
            </div>
          </div>

          <div className="textArea">
            <p>Message</p>
            <textarea placeholder="Enter your Message"></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
