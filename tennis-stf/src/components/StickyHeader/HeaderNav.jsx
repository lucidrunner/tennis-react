import React, { useState } from "react";
import "./HeaderNav.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useEffect } from "react";

const Menu = (props) => {
  let classes = "menu nav-link " + props.additionalClass;
  
  
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
  const [showMenu, setShowMenu] = useState(false);

  const mqMobile = window.matchMedia("(max-width: 830px)");
  mqMobile.addEventListener("change", mqHandler);
  function mqHandler(e){
    if(e.matches){
      setShowMenu(true);
    }
    else{
      setShowMenu(false);
      setToggleMenu(false);
    }
  }

  useEffect(() => {
    mqHandler(mqMobile);
  })

  //Rather than props.navigate upwards, set state and send that upwards
  //much easier to keep track of

  return (
    <nav>
      <ul id="nav-list" className="header-nav">
        <Menu additionalClass="collapse" />
        {showMenu ? (toggleMenu ? (
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
        )) : ""}
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
