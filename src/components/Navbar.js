import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const updateExpanded = (value) => {
    setExpanded(value);
  };

  return (
    <Navbar expanded={expanded} expand="md" className="sticky-top">
      <Navbar.Brand as={Link} to="/">
     
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => updateExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
              Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;