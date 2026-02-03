import React, { forwardRef } from "react";
import './services.css'
import { GiOilPump, GiMineTruck } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";

const Services = forwardRef((_, ref) => {
    return (
        <div className="features" ref={ref}>
            <div className="feature">
                <GiOilPump className="feature-icon" />
                <h6>HEALTH & SAFETY FIRTS</h6>
                <p>Quisque porttitor dui eget tellus ornatre laoreet<br></br> Morbi ornate. tellus at finibus pretium. ex erat<br></br> viverra monaeta seanme toremipsum.</p>
            </div>
            <div className="feature">
                <MdEngineering className="feature-icon" />
                <h6>EXPERIENCED EXPERTS</h6>
                <p>In sit amet mi vel nunc fringilla imperdiet phasel-<br></br>lus porta molestie efiicitur vitae pretium ullamcor-<br></br>per amaetur.Lorem ipsum mentoramen</p>
            </div>
            <div className="feature">
                <GiMineTruck className="feature-icon" />
                <h6>WE'RE INNOVATIVE</h6>
                <p>Vestibulum posuere dolor at orci egesta. in<br></br>cursus lorem interdum, molestie gravida mauris.<br></br>Quisque vulputate lacinia ipsum vel pellente</p>
            </div>
        </div>
    )
});

export default Services;