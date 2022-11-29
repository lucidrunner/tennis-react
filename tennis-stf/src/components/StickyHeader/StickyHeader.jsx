import React from "react";
import HeaderNav from "./HeaderNav";
import Logo from "../Logo/Logo";
import "./StickyHeader.css";

const StickyHeader = (props) => {
    
  return (
    <header className="header flex-as-row">
      <Logo text="Skänninge Tennisförening" wrap="wrap" />
      <HeaderNav />
    </header>
  );
};

export default StickyHeader;
