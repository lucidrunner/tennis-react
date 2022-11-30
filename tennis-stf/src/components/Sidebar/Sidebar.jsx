import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./sidebar.css";
import tennisLogo from "./tennis-player-with-racket.png";

const Sidebar = () => {
    const [openState, setOpenState] = useState(false);

    const handleOpen = () => {
        if (openState === false) {
            document.getElementById("sidenav").style.width = "min(200px, 70%)";
            let button = document.getElementById("sidenav-button");
            button.style.right = "min(200px, 70%)";
            button.style.transform = "scaleX(-1)";
            setOpenState(true);
        }
        else {
            document.getElementById("sidenav").style.width = "0";
            let button = document.getElementById("sidenav-button");
            button.style.right = "3px";
            button.style.transform = "scaleX(1)";
            setOpenState(false);
        }
    }

    return (
        <>
            <span onClick={handleOpen} className="sidenav-button" id="sidenav-button"
            >◄</span
            >
            <div className="sidenav slide-sidenav" id="sidenav">
                <img
                    src={tennisLogo}
                    alt="Match icons created by Freepik - Flaticon"
                />
                <section className="sidenavlistwrapper">
                    <h2>Bokning</h2>
                    <ul className="sidenavlist">
                        <li><Link to="/banor#booking">Banor</Link></li>
                        <li className="sidebartitle">Omklädningsrum</li>
                        <li className="inlineitem">
                            <Link to="/omkl?room=herr#booking">Herr</Link>
                        </li>
                        <li className="inlineitem">
                            <Link to="/omkl?room=dam#booking">Dam</Link>
                        </li>
                        <li className="afterinline"><Link to="/bastu#booking">Bastu</Link></li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Sidebar;