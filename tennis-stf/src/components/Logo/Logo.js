import React from "react";
import "./Logo.css";

const Logo = (props) => {
    return(
            <div style={{transform: "translateY(-10px)"}}>
            <a href="index.html" className={`logo ${props.wrap==="wrap" ? "wrap" : ""}`}>{props.text}</a>
            </div>
    );
}

export default Logo;