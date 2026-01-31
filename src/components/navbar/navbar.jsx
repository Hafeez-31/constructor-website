import React from "react";
import './navbar.css'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaSearch } from "react-icons/fa";
import constructLogo from "../../assets/images/navimg/constructlogo.png"

const Navbar = ({ scrollTo, refs }) => {

    const scrollToSection = (section) => {
        const doScroll = () => {
            if (section === "home") scrollTo(refs.homeRef);
            else if (section === "project") scrollTo(refs.projectRef);
            else if (section === "contact") scrollTo(refs.contactRef);
        };

        if (location.pathname === "/") {
            doScroll();
        } else {
            navigate("/");
            setTimeout(doScroll, 100);
        }
    };
    return (
        <div className="header-container">
            <div className="topbar">
                <div className="left-info">
                    <span className="info-item"><FaMapMarkerAlt /> <p>112 White Cemetery Rd, NYC</p></span>
                    <span className="info-item"><FaEnvelope /> <p>contact@yoursite.com</p></span>
                </div>
                <div className="right-info">
                    <FaPhoneAlt className="phone-icon" />
                    <span className="consult">FREE CONSULTANT:</span>
                    <span className="phone-number">144-359-0773</span>
                </div>
            </div>
            <nav className='navbar'>
                <div className="logo">
                    <img src={constructLogo} alt="logo" />
                    <div className='nav-text'>
                        <h2>CONSTRUCT</h2>
                        <p>Construction & Design Services</p>
                    </div>
                </div>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection("home")}>HOME</li>
                    <li onClick={() => scrollToSection("project")}>PROJECTS</li>
                    <li>SERVICES</li>
                    <li>ABOUT US</li>
                    <li>PAGES</li>
                    <li onClick={() => scrollToSection("contact")}>CONTACT</li>
                    <li><FaSearch className='search-icon' /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;