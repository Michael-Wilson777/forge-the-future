import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";

import '../components-css/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = useSelector((state) => state.cart.totalItems);
  const cartTotal = useSelector((state) => state.cart.totalPrice);

  return (
    <Navbar className="bg-dark" dark sticky="top" expand="md">
      <NavbarBrand href="/" className="d-flex align-items-center flex-column flex-md-row">
        <img src="/images/nav-logo.png" className="d-inline-block align-top logo" alt="logo" />
        <div className="ms-2 text-center text-md-start">
          <h1 className="mb-0">Forge the Future</h1>
          <p className="description-text mb-0">Your Hub for Welding/Metal Fabrication Education & Equipment</p>
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav navbar className="ms-auto">
          <NavItem>
            <NavLink className="text-light nav-link" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-light" to="education">
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-light nav-link" to="shop">
              Shop
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-light nav-link" to="cart">
            Cart ({cartCount})  ${cartTotal.toFixed(2)}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;