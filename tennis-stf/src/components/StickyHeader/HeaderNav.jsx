import React, { useState } from "react";
import "./HeaderNav.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Menu = (props) => {
  let classes = "menu nav-link " + props.additionalClass;
  
  
  console.log(classes);
  return (
    <div className={classes}>
      <li className="hover-underline-animation">
        <Link to="/" id="nav-index">
          Om STF
        </Link>
      </li>
      <li className="hover-underline-animation">
        <Link to="/banor" id="nav-banor">
          Banor
        </Link>
      </li>
      <li className="hover-underline-animation">
        <Link  to="/omkl" id="nav-omkl">
          Omklädningsrum
        </Link>
      </li>
      <li className="hover-underline-animation">
        <Link to="/bastu" id="nav-bastu">
          Bastu
        </Link>
      </li>
    </div>
  );
};

const BookingMenu = () => {
  return (
    <>
      <span className="nav-link">Boka Omklädningsrum</span>
      <span className="nav-link">Boka Andra Rum</span>
    </>
  );
};

const HeaderNav = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  //Rather than props.navigate upwards, set state and send that upwards
  //much easier to keep track of

  return (
    <nav>
      <ul id="nav-list" className="header-nav">
        <Menu additionalClass="collapse" />
        {toggleMenu ? (
          <li>
            <RiCloseLine
              className="hamburger"
              onClick={() => setToggleMenu(false)}
            />
          </li>
        ) : (
          <li>
            <RiMenu3Line
              className="hamburger"
              onClick={() => setToggleMenu(true)}
            />
          </li>
        )}
        {toggleMenu && (
          <div className="navbar_menu_container scale-up-tr">
            <Menu additionalClass="small-only" />
            <BookingMenu />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default HeaderNav;
