import React from "react";
import logo from "../../Imgs/charity.png";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { RouterLink } from "../../upYouGo/Styling";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div className="main-navbar">
          <Navbar.Brand href="#home">
            <img className="navbar-logo" src={logo} />
          </Navbar.Brand>
          <div className="navbar-links-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-links" id="basic-navbar-nav">
              <Nav className="me-auto  ">
                <RouterLink to="/login">
                  <p>Login </p>
                </RouterLink>
                <Nav.Link href="#link"></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;

// "devDependencies": {
//   "cors": "^2.8.5",
//   "express": "^4.18.2"
// },
// "devServer": {
//   "allowedHosts": "auto"
// },
// "proxy": "https://e7gezli.herokuapp.com"
