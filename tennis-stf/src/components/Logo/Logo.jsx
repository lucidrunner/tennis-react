import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {

    const handleLogoClick = () => {
    window.scrollTo(0, 0);
    }
    return (
        <Link to={props.to} onClick={handleLogoClick} className={`logo ${props.wrap === "wrap" ? "wrap" : ""}`}>{props.text}</Link>
    );
}

export default Logo;