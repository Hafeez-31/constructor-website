import React, { forwardRef } from "react";
import './home.css'
import { GiOilPump, GiMineTruck } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";

const Home = forwardRef((_, ref) => {
    return (
        <div className="hero" ref={ref}>
            <div className="content">
                <h1>CONSTRUCTION SERVICES</h1>
                <p>Aenean accumsan nulla quis vestibulum aliquam crasm dui</p>
                <div className="buttons">
                    <button className="btn learn">LEARN MORE</button>
                    <button className="btn touch">GET IN TOUCH</button>
                </div>
            </div>
            <div className="features">
                <div className="feature">
                    <GiOilPump className="feature-icon"/>
                    <h6>HEALTH & SAFETY FIRTS</h6>
                    <p>Quisque porttitor dui eget tellus ornatre laoreet<br></br> Morbi ornate. tellus at finibus pretium. ex erat<br></br> viverra monaeta seanme toremipsum.</p>
                </div>
                <div className="feature">
                    <MdEngineering className="feature-icon"/>
                    <h6>EXPERIENCED EXPERTS</h6>
                    <p>In sit amet mi vel nunc fringilla imperdiet phasel-<br></br>lus porta molestie efiicitur vitae pretium ullamcor-<br></br>per amaetur.Lorem ipsum mentoramen</p>
                </div>
                <div className="feature">
                    <GiMineTruck className="feature-icon"/>
                    <h6>WE'RE INNOVATIVE</h6>
                    <p>Vestibulum posuere dolor at orci egesta. in<br></br>cursus lorem interdum, molestie gravida mauris.<br></br>Quisque vulputate lacinia ipsum vel pellente</p>
                </div>
            </div>
        </div>

    )
});

export default Home;