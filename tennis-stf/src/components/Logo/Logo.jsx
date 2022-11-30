import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {
    return(
        <Link to="/" className={`logo ${props.wrap==="wrap" ? "wrap" : ""}`}>{props.text}</Link>
    );
}

export default Logo;