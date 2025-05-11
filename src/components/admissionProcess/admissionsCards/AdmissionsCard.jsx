import React from "react";
import line from "/assets/Container (1).png";
import "./AdmissionsCard.css";
const AdmissionsCard = ({ num, title, pgf  }) => {
  return (
    <div data-aos="zoom-out" className="AdCard">
      <div className="numtitle">
        <div data-aos="fade-left" className="num">{num}</div>
        <img src={line} alt="line" />
      </div>

      <div className="mainCard">
        <h2>{title}</h2>
        <p>{pgf}</p>
      </div>
    </div>
  );
};

export default AdmissionsCard;
