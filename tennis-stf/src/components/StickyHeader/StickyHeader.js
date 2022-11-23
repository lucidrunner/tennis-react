import React from "react";
import HeaderNav from "./HeaderNav";
import "./StickyHeader.css";

const StickyHeader = (props) => {
    return(
        <header className="header flex-as-row side-padded">
            <a href="index.html" class="logo"> Skänninge Tennisförening</a>
            <HeaderNav />
        </header>      
    )
};

export default StickyHeader;