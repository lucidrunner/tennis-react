import React from "react";
import "./HeaderNav.css";

const HeaderNav = () => {

    return(
        <nav>
            <ul id="nav-list" class="header-nav">
            <li class="hover-underline-animation">
                <a href="index.html" id="nav-index"> Om STF</a>
            </li>
            <li class="hover-underline-animation">
                <a href="banor.html" id="nav-banor">Banor</a>
            </li>
            <li class="hover-underline-animation">
                <a href="omkl.html" id="nav-omkl">Omklädningsrum</a>
            </li>
            <li class="hover-underline-animation">
                <a href="bastu.html" id="nav-bastu">Bastu</a>
            </li>
            <li class="hover-underline-animation">
                <i class ="fa-solid fa-bars fa-lg hamburger"></i>
            </li>
            </ul>
        </nav>
    )
};

export default HeaderNav;