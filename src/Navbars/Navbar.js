import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import React from "react";

function NavigationBar() {
  return (
    <div className="topnav">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Seedling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}

export default NavigationBar;
