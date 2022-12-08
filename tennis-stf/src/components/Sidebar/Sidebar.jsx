import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import tennisLogo from "./tennis-player-with-racket.png";

const Sidebar = () => {
  const [showState, setShowState] = useState(true);
  const [openState, setOpenState] = useState(false);

  const handleOpen = () => {
    if (openState === false) {
      open();
      setOpenState(true);
    } else {
      close();
      setOpenState(false);
    }
  };

  function open() {
    document.getElementById("sidenav").style.width = "min(200px, 70%)";
    let button = document.getElementById("sidenav-button");
    button.style.right = "min(200px, 70%)";
    button.style.transform = "scaleX(-1)";
  }

  function close() {
    document.getElementById("sidenav").style.width = "0";
    let button = document.getElementById("sidenav-button");
    button.style.right = "3px";
    button.style.transform = "scaleX(1)";
  }

  const mqMobile = window.matchMedia("(max-width: 830px)");
  mqMobile.addEventListener("change", mqHandler);

  function mqHandler(e) {
    if (!e.matches) {
      setShowState(true);
      document.getElementById("sidenav").classList.add("sidenavborder");
    } else {
      setShowState(false);
      if (openState) {
        setOpenState(false);
        close();
      }
      document.getElementById("sidenav").classList.remove("sidenavborder");
    }
  }

  useEffect(() => {
    mqHandler(mqMobile);
  });

  return (
    <>
      <span
        onClick={handleOpen}
        className={`sidenav-button ${showState ? "" : "hidden"}`}
        id="sidenav-button"
      >
        ◄
      </span>
      <div className="sidenav slide-sidenav" id="sidenav">
        <img src={tennisLogo} alt="Match icons created by Freepik - Flaticon" />
        <section className="sidenavlistwrapper">
          <h2>Bokning</h2>
          <ul className="sidenavlist">
            <li>
              <Link to="/banor/booking" onClick={handleOpen}>
                Banor
              </Link>
            </li>
            <li className="sidebartitle">Omklädningsrum</li>
            <li className="inlineitem">
              <Link to="/omkl/booking/herr" onClick={handleOpen}>
                Herr
              </Link>
            </li>
            <li className="inlineitem">
              <Link to="/omkl/booking/dam" onClick={handleOpen}>
                Dam
              </Link>
            </li>
            <li className="afterinline">
              <Link to="/bastu/booking" onClick={handleOpen}>
                Bastu
              </Link>
            </li>
            <li>
              <Link to="/bokningar" onClick={handleOpen}>
                Bokningar
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
