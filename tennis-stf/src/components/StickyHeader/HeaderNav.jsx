import React, { useState } from "react";
import "./HeaderNav.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {  Link } from "react-router-dom";
import { useEffect } from "react";

const Menu = (props) => {
  let classes = "menu nav-link " + props.additionalClass;

  //The html in here is really messed up due to converting between the old tennis
  //page and the new one, combined with some oddities regarding links etc. This probably
  //doesn't need to be in an ul anymore but a lot of the css is based on it being in there
  //so this stays right now

  return (
    <div className={classes}>
      <Link
        to="/"
        className="hover-underline-animation nav-item"
        id="nav-index"
      >
        <li>Om STF</li>
      </Link>
      <Link
        to="/banor"
        className="hover-underline-animation nav-item"
        id="nav-banor"
      >
        <li>Banor</li>
      </Link>
      <Link
        className="nav-item hover-underline-animation"
        to="/omkl"
        id="nav-omkl"
      >
        <li>Omklädningsrum</li>
      </Link>
      <Link
        to="/bastu"
        className="hover-underline-animation nav-item"
        id="nav-bastu"
      >
        <li>Bastu</li>
      </Link>
    </div>
  );
};

const BookingMenu = () => {
  return (
    <div className="menu nav-link">
      <div className="divider-horizontal" />
      <Link
        to="/banor/booking"
        className="hover-underline-animation nav-item"
        id="nav-banor"
      >
        <li>Boka Bana</li>
      </Link>
      <Link
        to="/omkl/booking"
        className="hover-underline-animation nav-item"
        id="nav-banor"
      >
        <li>Boka Omklädningsrum</li>
      </Link>
      <Link
        to="/omkl/booking"
        className="hover-underline-animation nav-item"
        id="nav-banor"
      >
        <li>Boka Bastu</li>
      </Link>
      <Link
        to="/omkl/booking"
        className="hover-underline-animation nav-item"
        id="nav-banor"
      >
        <li>Aktuella Bokningar</li>
      </Link>
    </div>
  );
};

const HeaderNav = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const mqMobile = window.matchMedia("(max-width: 830px)");
  mqMobile.addEventListener("change", mqHandler);
  function mqHandler(e) {
    if (e.matches) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
      setToggleMenu(false);
    }
  }

  useEffect(() => {
    mqHandler(mqMobile);
  });

  //Rather than props.navigate upwards, set state and send that upwards
  //much easier to keep track of

  return (
    <nav>
      <ul id="nav-list" className="header-nav">
        <Menu additionalClass="collapse" />
        {showMenu ? (
          toggleMenu ? (
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
          )
        ) : (
          ""
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-tr">
            <Menu additionalClass="small-only" />
            <BookingMenu />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default HeaderNav;
