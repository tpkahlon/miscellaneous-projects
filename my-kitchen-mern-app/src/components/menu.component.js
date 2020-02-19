import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My Kitchen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="primaryMenu" />
      <Navbar.Collapse id="primaryMenu">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Cooks
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
            Add Cook
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
