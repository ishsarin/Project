import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="container_wrapper">
          <Navbar.Brand
            to="#home"
            className="navbar-nav"
            id="#navbarNavAltMarkup"
          >
            <Link class="navbar-brand" to="/">
              MILESTONE 2.2
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              to="#home"
              className="navbar-nav"
              id="#navbarNavAltMarkup"
            >
              <Link class="nav-link" to="/">
                Introduction
              </Link>
            </Nav.Link>
            <Nav.Link
              to="#features"
              className="navbar-nav"
              id="#navbarNavAltMarkup"
            >
              <Link class="nav-link" to="/prod_info">
                Product Info
              </Link>
            </Nav.Link>
            <Nav.Link
              to="#pricing"
              className="navbar-nav"
              id="#navbarNavAltMarkup"
            >
              <Link class="nav-link" to="/team_info">
                Team Info
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
