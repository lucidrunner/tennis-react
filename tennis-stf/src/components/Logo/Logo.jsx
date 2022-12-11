import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {

    //Edge-ish case where we're on the main page and expect to go to the top when clicking the header / footer logo
    //We scroll to top on clicking any other link but this only fires if we go to a new page,
    const handleLogoClick = () => {
    window.scrollTo(0, 0);
    }
    return (
        <Link to={props.to} onClick={handleLogoClick} className={`logo ${props.wrap === "wrap" ? "wrap" : ""}`}>{props.text}</Link>
    );
}

export default Logo;