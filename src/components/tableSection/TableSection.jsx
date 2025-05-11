import MainHeading from '../benefits/heading/MainHeading';
import './TableSection.css';
import { FeeStructure, AdditionalServices } from './TableData';

export default function Table() {
    return (
        <>
            <MainHeading
                startPgf="Our Features"
                heading="Fee Structure"
                mainPgf="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
            />
            <div className="container">
                <div className="table1" data-aos="fade-up">
                    <div className="first-table">
                        <div className="thead">
                            <ul>
                                <li id="th0">Program</li>
                                <li>Age Group</li>
                                <li>Annual Tuition</li>
                                <li>Registration Fee</li>
                                <li >Activity Fee</li>
                            </ul>
                        </div>
                        <div className="tbody">
                            {FeeStructure.map((item, index) => (
                                <ul
                                    key={index}
                                    id={
                                        index === 0
                                            ? 'first-ul'
                                            : index === FeeStructure.length - 1
                                                ? 'last-ul'
                                                : ''
                                    }
                                >
                                    <li>{item.program}</li>
                                    <li>{item.ageGroup}</li>
                                    <li>{item.tuition}</li>
                                    <li>{item.registration}</li>
                                    <li className="price">{item.activity}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="table2" data-aos="fade-up">
                    <div className="second-table">
                        <div className="thead">
                            <h3>Additional Services</h3>
                        </div>
                        <div className="tbody">
                            {AdditionalServices.map((item, index) => (
                                <ul
                                    key={index}
                                    id={
                                        index === 0
                                            ? 'first-ul'
                                            : index === AdditionalServices.length - 1
                                                ? 'last-ul'
                                                : ''
                                    }
                                >
                                    <li>{item.service}</li>
                                    <li className="price">{item.price}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}