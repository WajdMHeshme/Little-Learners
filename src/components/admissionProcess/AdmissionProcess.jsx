
import MainHeading from "../benefits/heading/MainHeading";
import './AdmissionProcess.css'
import AdmissionsCard from "./admissionsCards/AdmissionsCard";
import { AdmissionProcCardsData } from "../../Data";
import TableSection from '../tableSection/TableSection'
import logo from '/assets/shape-14.svg'
const AdmissionProcess = () => {
  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf={"Process"}
          heading={"Admission Process"}
          mainPgf={
            "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
          }
        />

        <div className="cardsContainerAd">
            {
                AdmissionProcCardsData.map((card , index) => (
                    <AdmissionsCard 
                    key={index}
                    num={card.num}
                    title={card.title}
                    pgf={card.pgf}
                    />
                ))
            }
            <div data-aos="fade-left"  className="end"><img src={logo} alt="logo" /></div>
        </div>
      </div>
      <TableSection />
    </section>
  );
};

export default AdmissionProcess;
