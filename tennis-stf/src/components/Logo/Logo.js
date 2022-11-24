import React from "react";
import "./Logo.css";

const Logo = (props) => {
    return(
        <a href="index.html" className={`logo ${props.wrap==="wrap" ? "wrap" : ""}`}>{props.text}</a>
    );
}

export default Logo;