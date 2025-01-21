import { useState } from "react";
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
import logo from "../images/nav-logo.png";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = useSelector((state) => state.cart.totalItems);
  const cartTotal = useSelector((state) => state.cart.totalPrice);


  return (
<Navbar className="bg-dark" dark sticky="top" expand="md">
<NavbarBrand href="/">
<img
            src={logo}
            className="d-inline-block align-top logo"
            alt="logo"
          />
  <h1>Forge the Future</h1>
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
        Videos and More
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="text-light nav-link" to="shop">
        Shop
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="text-light nav-link" to="cart">
        Cart
      </NavLink>
    </NavItem>
    <p className="text-light mt-2 me-4 bg-warning">
      Items: {cartCount} Cart Total: {cartTotal}
    </p>

  </Nav>
</Collapse>
</Navbar> 
  );
};

export default Header;


