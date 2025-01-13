import {
  Nav,
  Navbar,
  NavbarBrand,
  Container,
  NavbarToggle,
  NavbarCollapse,
  NavLink,
} from "react-bootstrap";
import logo from "../images/nav-logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-dark">
      <Container>
        <NavbarBrand href="/">
          <img
            src={logo}
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </NavbarBrand>
        <NavbarToggle
          className="bg-secondary"
          aria-controls="responsive-navbar-nav"
        />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='text-warning' href="education">Education</NavLink>
            <NavLink className='text-warning' href="#">Shop</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
