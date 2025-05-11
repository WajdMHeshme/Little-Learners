import React from "react";
import "./Events.css";
import MainHeading from "../benefits/heading/MainHeading";
import { EventsCardData } from "../../Data";
import StudentsCard from "../students/studentsCards/StudentsCard";
const Events = () => {
  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf={"Our Features"}
          heading={"Events & Celebrations"}
          mainPgf={
            "At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
          }
        />
        <div className="cardsStudents">
            {
                EventsCardData.map((card , index) => (
                    <StudentsCard 
                    key={index}
                    img={card.img}
                    title={card.title}
                    pgf={card.pgf}
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Events;
