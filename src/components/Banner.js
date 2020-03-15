import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Banner.scss";

const Banner = () => {
  return (
    <Navbar className="navigation-bar" sticky="top">
      <Navbar.Brand className="home">
        <Link className="banner-logo" to="/">
          <h2>FIND YOUR FIT</h2>
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto"></Nav>
    </Navbar>
  );
};

export default Banner;
