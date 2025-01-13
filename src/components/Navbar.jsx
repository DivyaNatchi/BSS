import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Collapse } from "reactstrap"; // Import Collapse
import { Link } from "react-scroll";
import logo from "../assets/img/BSS/BSS_Logo.jpg";

import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // This controls the collapse state

  // Handle mobile nav toggle (collapse state and icon change)
  const toggle = () => setIsOpen(!isOpen);

  // Mobile nav toggle for 'bi-list' and 'bi-x' class toggle
  const mobileNavToogle = () => {
    document.body.classList.toggle("mobile-nav-active");
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  };

  // UseEffect to manage event listeners
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const navLinks = document.querySelectorAll("#navmenu a");

    // Add event listener for mobile nav toggle
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

    // Hide mobile nav on same-page hash links
    navLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      mobileNavToggleBtn.removeEventListener("click", mobileNavToogle);
      navLinks.forEach((navmenu) => {
        navmenu.removeEventListener("click", () => {
          if (document.querySelector(".mobile-nav-active")) {
            mobileNavToogle();
          }
        });
      });
    };
  }, []);

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
          {/* Wrap NavItems in Collapse to make them collapse on mobile */}
          <Collapse navbar isOpen={isOpen}>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
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
                  About
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
                  Portfolio
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="team"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
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
          </Collapse>
          {/* Mobile Navigation Toggle */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
            onClick={toggle} // Use toggle state for collapsing menu
          ></i>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
