import React from "react";
import './offer.css';
import Man from "../../assets/images/offerimg/man.png"
import Truck from "../../assets/images/offerimg/truck.png"
import Cap from "../../assets/images/offerimg/cap.png"

const Offer = () => {
    return (
        <div className="offers">
            <h2>What We Offer</h2>
            <div className="underline-1"></div>
            <div className="offer">
                <div>
                    <img src= {Man} />
                    <h6>HOUSE REPAIR</h6>
                    <p>Quisque porttitor dui eget tellus ornare laoreet Morbi<br></br>ornare. tellus at finibus pretium, ex erat viverra</p>
                </div>
                <div>
                    <img src= {Truck} />
                    <h6>CONSTRUCTION BUILDINGS</h6>
                    <p>In sit amet mi vel nunc fringilla imperdiet. Phasellus<br></br>porta molestie efficitur vitae pretium ullamcorper</p>
                </div>
                <div>
                    <img src= {Cap} />
                    <h6>CONCEPTUAL DESIGNS</h6>
                    <p>Vestibulum posuere dolor at orci egestas, in cursus<br></br>lorem interdum, molestie gravida mauris</p>
                </div>
            </div>
            <div className="members">
                <div className="numbers">
                    <h3>50+</h3>
                    <p>STAFF MEMBERS</p>
                </div>
                <div className="numbers">
                    <h3>10</h3>
                    <p>PARTNERS</p>
                </div>
                <div className="numbers">
                    <h3>120+</h3>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="numbers">
                    <h3>400</h3>
                    <p>SATISFIED CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default Offer;