import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Seedling</Navbar.Brand>
        <Navbar.Collapse >
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/whoarewe">Who Are We?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Footer;
