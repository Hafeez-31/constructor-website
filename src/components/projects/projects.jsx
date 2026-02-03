import React, { forwardRef } from "react";
import './projects.css'
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Sand from "../../assets/images/projectimg/sand.png"
import House from "../../assets/images/projectimg/house.png"
import Engineer from "../../assets/images/projectimg/engineer.png"

const Projects = forwardRef((__, ref) => {
    return (
        <div className="wrapper" ref={ref}>
            <div className="latest-projects">
                <h2>Our Latest Projects</h2>
                <div className="underline"></div>

                <div className="projects-row">
                    <img src={Sand} />
                    <img src={House} />
                    <img src={Engineer} />
                </div>
                <div className="slider-buttons">
                    <button><IoMdArrowDropleft /></button>
                    <button><IoMdArrowDropright /></button>
                </div>
            </div>
        </div>
    )
});

export default Projects