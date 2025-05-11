import React from "react";
import MainHeading from "../benefits/heading/MainHeading";
import Card from "../benefits/cards/Card";
import { SupportCardsData } from "../../Data";
const Support = () => {
  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf={"Our Achievements"}
          heading={"Student Support"}
          mainPgf={
            "At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
          }
        />
        <div className="cardContainer">
          {SupportCardsData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              heading={card.heading}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
