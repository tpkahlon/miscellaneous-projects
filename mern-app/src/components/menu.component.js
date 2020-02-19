import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Exercise Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="primaryMenu" />
      <Navbar.Collapse id="primaryMenu">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Exercises
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
            Create Exercise Log
          </Nav.Link>
          <Nav.Link as={Link} to="/user">
            Create User
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
