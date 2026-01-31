import React, { forwardRef } from "react";
import './footer.css';
import Design from "../../assets/images/footerimg/design.png"

const Footer = forwardRef((__, ref) => {
    return (
        <div className="footer" ref={ref}>
            <div className="footer-top">
                <div className="footer-col">
                    <div className="footer-logo-box">
                        <img src= {Design} />
                        <div>
                            <h2>CONSTRUCT</h2>
                            <p>Construction & Design Services</p>
                        </div>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>OUR SERVICE</h3>
                    <div className="line-1"></div>
                    <div className="footer-link">
                        <ul>
                            <li>Conceptual design</li>
                            <li>House repair</li>
                            <li>Design engineer</li>
                        </ul>

                        <ul>
                            <li>Remodel</li>
                            <li>Construction</li>
                            <li>Management</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>CONTACT US</h3>
                    <div className="line-2"></div>
                    <div className="footer-contact">
                        <ul>
                            <li>Phone: 144-359-0773</li>
                            <li>Address: 112 White Cemetery Rd, New York city</li>
                            <li>Email: Contact@yoursite.com</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2017 DesignGalaxy8. All rights reserved.</p>

                <div className="footer-links">
                    <a href="#">Privacy policy</a>
                    <span>|</span>
                    <a href="#">Terms of use</a>
                </div>
            </div>
        </div>
    )
});

export default Footer;