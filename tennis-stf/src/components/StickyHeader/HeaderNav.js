import React, { useState } from "react";
import "./HeaderNav.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = (props) => {
  let classes = "menu nav-link " + props.additionalClass;
  const handleClick = (destination) => {
        props.NavigateClicked(destination);
  }
  console.log(classes);
  return (
    <div className={classes}>
      <li className="hover-underline-animation">
        <a onClick={() => handleClick("index")} id="nav-index">
          Om STF
        </a>
      </li>
      <li className="hover-underline-animation">
        <a href="banor.html" id="nav-banor">
          Banor
        </a>
      </li>
      <li className="hover-underline-animation">
        <a onClick={() => handleClick("omkl")} id="nav-omkl">
          Omklädningsrum
        </a>
      </li>
      <li className="hover-underline-animation">
        <a href="bastu.html" id="nav-bastu">
          Bastu
        </a>
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
        <Menu NavigateClicked={props.NavigationClicked} additionalClass="collapse" />
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
