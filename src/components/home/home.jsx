import React, { forwardRef } from "react";
import './home.css'

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
        </div>
    )
});

export default Home;