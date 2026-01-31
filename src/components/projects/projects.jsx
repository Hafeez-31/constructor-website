import React, { forwardRef } from "react";
import './projects.css'
import { IoMdArrowDropdown, IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Sand from "../../assets/images/projectimg/sand.png"
import House from "../../assets/images/projectimg/house.png"
import Engineer from "../../assets/images/projectimg/engineer.png"
import Times from "../../assets/images/projectimg/times.png"
import Talk from "../../assets/images/projectimg/talk.png"
import Connect from "../../assets/images/projectimg/connect.png"
import Business from "../../assets/images/projectimg/business.png"
import Estate from "../../assets/images/projectimg/estate.png"

const Projects = forwardRef((__, ref) => {
    return (
        <div className="wrapper" ref={ref}>
            <div className="latest-projects">
                <h2>Our Latest Projects</h2>
                <div className="underline"></div>

                <div className="projects-row">
                    <img src= {Sand} />
                    <img src= {House} />
                    <img src= {Engineer} />
                </div>
                <div className="slider-buttons">
                    <button><IoMdArrowDropleft/></button>
                    <button><IoMdArrowDropright/></button>
                </div>
            </div>
            <div className="consultation">
                <div className="consultation-box">
                    <div className="consult-left">
                        <h3>Free Consultation</h3>
                        <div className="underline-2"></div>
                        <p>
                            Sed vitae tempus nunc, eu mollis elit. Ut pulvinar lorem quis tortor tristique ornare.
                            Cura-<br></br>bitur tortor urna, maximus eget eros. Orci varius natoque penatibus et magnis disparturient.
                        </p>
                    </div>

                    <form className="consult-form">
                        <div className="cosult-grid">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Phone" />
                        </div>
                        <input type="text" className="full" placeholder="Type of work needed" />
                        <span className="arrow"><IoMdArrowDropdown/></span>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
            <div className="logos">
                <img src= {Times} />
                <img src= {Talk} />
                <img src= {Connect} />
                <img src= {Business} />
                <img src= {Estate} />
            </div>
        </div>
    )
});

export default Projects