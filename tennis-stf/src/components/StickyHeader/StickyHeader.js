import React from "react";
import HeaderNav from "./HeaderNav";
import Logo from "../Logo/Logo";
import "./StickyHeader.css";
import Stack from "react-bootstrap/Stack"

const StickyHeader = (props) => {


    return(
        <Stack as="header" direction="horizontal" className="header" >
            <div >
                <Logo text="Skänninge Tennisförening" wrap="wrap" />
            </div>
            <div className="ms-auto">
                <HeaderNav  />
            </div>
        </Stack>      
    )
};

export default StickyHeader;