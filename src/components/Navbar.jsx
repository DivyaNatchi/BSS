import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleDeepDropdown = () => setDeepDropdownOpen(!deepDropdownOpen);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo Section */}
        <NavbarBrand
          tag={Link}
          to="hero"
          className="logo d-flex align-items-center me-auto"
        >
          <h1 className="sitename">Byte Size IT Solutions</h1>
        </NavbarBrand>

        {/* Navigation Menu */}
        <Navbar expand="lg" id="navmenu" className="navmenu">
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
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </Navbar>

        {/* Get Started Button */}
        <Button className="btn-getstarted" href="#about">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
