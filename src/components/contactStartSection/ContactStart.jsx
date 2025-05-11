import "./ContactStart.css";
import CornerImg from "/assets/AbstractDesign5.png";
import { FaEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
const ContactStart = ({ title, mainTitle, paragraph , style }) => {
  return (
    <div data-aos="zoom-in" className="start">
      <div className="imgCorner">
        <img src={CornerImg} alt="img" />
      </div>
      <div className="content">
        <div className="contentTitles">
          <p className= {style}> {title}</p>
          <h1> {mainTitle}</h1>
        </div>
        <div className="pgfContainer">
          <p>{paragraph}</p>
          <div className="contact-info">
            <div className="info">
                <div className="icon">
                <FaEnvelope />
                </div>
                <p>hello@littlelearners.com</p>
            </div>
            <div className="info">
                <div className="icon">
                <BsTelephoneFill />
                </div>
                <p>+91 91813 23 2309</p>
            </div>
            <div className="info">
                <div className="icon">
                <FaLocationDot />
                </div>
                <p>Somewhere in the World</p>
            </div>
            <div className="info">
                <div className="icon">
                <FaClock />
                </div>
                <p>Office Hours - 9am - 6 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStart;
