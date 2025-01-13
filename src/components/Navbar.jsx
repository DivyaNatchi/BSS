import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";
import logo from "../assets/img/BSS/BSS_Logo.jpg";

import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo Section */}
        <NavbarBrand
          tag={Link}
          to="hero"
          className="logo d-flex align-items-center me-auto"
        >
          <img src={logo} alt="Company Logo" className="company-logo me-2" />
          <h1 className="sitename">Byte Size IT Solutions</h1>
        </NavbarBrand>

        {/* Navigation Menu */}
        <Navbar
          expand="lg"
          id="navmenu"
          className={`navmenu ${isOpen ? "show" : ""}`}
        >
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="hero" smooth={true} duration={500} className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                about
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Service
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link to="team" smooth={true} duration={500} className="nav-link">
                Team
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Pricing
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>
            </NavItem>
          </Nav>
          {/* Mobile Navigation Toggle */}
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={toggle} // <-- Added onClick handler for toggle functionality
          ></i>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
