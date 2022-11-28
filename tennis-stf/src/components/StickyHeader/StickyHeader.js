import React from "react";
import HeaderNav from "./HeaderNav";
import Logo from "../Logo/Logo";
import "./StickyHeader.css";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const StickyHeader = (props) => {
  return (
    <Navbar className="header" sticky="top" expand="lg">
      <Navbar.Brand className="logo" href="#home">
        Skänninge Tennisförening
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav me-auto">
          <Nav.Link
            className="hover-underline-animation"
            href="#home"
            id="nav-index"
          >
            Om STF
          </Nav.Link>
          <Nav.Link
            className="hover-underline-animation"
            href="#banor"
            id="nav-banor"
          >
            Banor
          </Nav.Link>
          <Nav.Link
            className="hover-underline-animation"
            href="#omkl"
            id="nav-omkl"
          >
            Omklädningsrum
          </Nav.Link>
          <Nav.Link
            className="hover-underline-animation"
            href="#bastu"
            id="nav-bastu"
          >
            Bastu
          </Nav.Link>
          <NavDropdown drop="start" title="Boka">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <Stack as="header" direction="horizontal" className="header">
    //   <div>
    //     <Logo text="Skänninge Tennisförening" wrap="wrap" />
    //   </div>
    //   <div className="ms-auto">
    //     <HeaderNav />
    //   </div>
    // </Stack>
  );
};

export default StickyHeader;
