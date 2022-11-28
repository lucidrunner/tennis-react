import React from "react";
import "./HeaderNav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const HeaderNav = () => {
  return (
    <Nav id="nav-list" class="header-nav" defaultActiveKey="/index">
      <Nav.Item class="hover-underline-animation">
        <Nav.Link href="/index" id="nav-index">
          {" "}
          Om STF
        </Nav.Link>
      </Nav.Item>
      <div className="vr" />
      <Nav.Item class="hover-underline-animation">
        <Nav.Link href="banor.html" id="nav-banor">
          Banor
        </Nav.Link>
      </Nav.Item>
      <div className="vr" />
      <Nav.Item class="hover-underline-animation">
        <Nav.Link href="omkl.html" id="nav-omkl">
          Omklädningsrum
        </Nav.Link>
      </Nav.Item>
      <div className="vr" />
      <Nav.Item class="hover-underline-animation">
        <Nav.Link href="bastu.html" id="nav-bastu">
          Bastu
        </Nav.Link>
      </Nav.Item>
      <div className="vr" />
      <Nav.Item class="hover-underline-animation">
        <i class="fa-solid fa-bars fa-lg hamburger"></i>
      </Nav.Item>
    </Nav>
  );
};

export default HeaderNav;
