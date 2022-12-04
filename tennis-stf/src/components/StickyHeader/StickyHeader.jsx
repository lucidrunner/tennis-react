import React from "react";
import HeaderNav from "./HeaderNav";
import Logo from "../Logo/Logo";
import "./StickyHeader.scss";

const StickyHeader = (props) => {
  return (
    <header className="header">
      <Logo to={"/"} text="Skänninge Tennisförening" wrap="wrap" />
      <HeaderNav />
    </header>
  );
};

export default StickyHeader;
