import React from 'react'
import './Activites.css'
import MainHeading from '../benefits/heading/MainHeading'
import { CardDataStudents } from '../../Data';
import Card from '../benefits/cards/Card';
const Activites = () => {
  return (
    <section>
        <div className="container">
        <MainHeading 
        startPgf={'Our Features'}
        heading={'Extracurricular Activities'}
        mainPgf={'At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including'}
        />
        <div className="cardContainer">
            {
                CardDataStudents.map((card , index) => (
                    <Card 
                    key={index+1}
                    icon={card.icon}
                    heading={card.heading}
                    paragraph={card.paragraph}/>
                ))
            }
        </div>
        </div>
    </section>
  )
}

export default Activites
