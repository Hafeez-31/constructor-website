import React, { useState } from "react";
import './navbar.css'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaSearch } from "react-icons/fa";
import constructLogo from "../../assets/images/navimg/constructlogo.png"

const Navbar = ({ scrollTo, refs }) => {

    const [openSearch, setOpenSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (section) => {
        const doScroll = () => {
            if (section === "home") scrollTo(refs.homeRef);
            else if (section === "services") scrollTo(refs.servicesRef);
            else if (section === "offer") scrollTo(refs.offerRef);
            else if (section === "project") scrollTo(refs.projectRef);
            else if (section === "aboutus") scrollTo(refs.aboutusRef);
            else if (section === "contact") scrollTo(refs.contactRef);

            setMenuOpen(false);

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
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li onClick={() => scrollToSection("home")}>HOME</li>
                    <li onClick={() => scrollToSection("services")}>SERVICES</li>
                    <li onClick={() => scrollToSection("offer")}>OFFERS</li>
                    <li onClick={() => scrollToSection("project")}>PROJECTS</li>
                    <li onClick={() => scrollToSection("aboutus")}>ABOUT US</li>
                    <li onClick={() => scrollToSection("contact")}>CONTACT</li>
                    <li className="search-wrapper">
                        <FaSearch
                            className="search-icon"
                            onClick={() => setOpenSearch(prev => !prev)}
                        />
                        <div className={`search-label ${openSearch ? "open" : ""}`}>
                            <input type="text" placeholder="Search..." />
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="icon-container">
                <span className="search-wrapper">
                    <FaSearch
                        className="search-icon"
                        onClick={() => setOpenSearch(prev => !prev)}
                    />
                    <div className={`search-label ${openSearch ? "open" : ""}`}>
                        <input type="text" placeholder="Search..." />
                    </div>
                </span>
                {!menuOpen ? (
                    <span className="hamburger" onClick={() => setMenuOpen(true)}>
                        <span className="ham-line"></span>
                        <span className="ham-line"></span>
                        <span className="ham-line"></span>
                    </span>
                ) : (
                    <span className="close-btn" onClick={() => setMenuOpen(false)}>
                        ✕
                    </span>
                )}
            </div>
        </div>
    )
}

export default Navbar;