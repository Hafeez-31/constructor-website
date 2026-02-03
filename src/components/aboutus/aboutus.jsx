import React, { forwardRef } from "react";
import './aboutus.css'
import Times from "../../assets/images/aboutimg//times.png"
import Talk from "../../assets/images/aboutimg/talk.png"
import Connect from "../../assets/images/aboutimg/connect.png"
import Business from "../../assets/images/aboutimg/business.png"
import Estate from "../../assets/images/aboutimg/estate.png"

const Aboutus = forwardRef((__, ref) => {
    return (
        <div ref={ref}>
            <div className="consultation">
                <div className="consultation-box">
                    <div className="consult-left">
                        <h3>Free Consultation</h3>
                        <div className="about-underline"></div>
                        <p>
                            Sed vitae tempus nunc, eu mollis elit. Ut pulvinar lorem quis tortor tristique ornare.
                            Cura-bitur tortor urna, maximus eget eros. Orci varius natoque penatibus et magnis disparturient.
                        </p>
                    </div>

                    <form className="consult-form">
                        <div className="cosult-grid">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Phone" />
                        </div>
                        <input type="text" className="full" placeholder="Type of work needed" />
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
            <div className="logos">
                <div className="logos-track">
                    <img src={Times} />
                    <img src={Talk} />
                    <img src={Connect} />
                    <img src={Business} />
                    <img src={Estate} />
                </div>
            </div>
        </div>
    )
});

export default Aboutus;