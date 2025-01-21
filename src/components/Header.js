import { useSelector } from "react-redux";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Container,
  NavbarToggle,
  NavbarCollapse,
  NavLink,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../images/nav-logo.png";

const Header = () => {


  const cartItems = useSelector((state) => state.cart.totalItems);
  const cartTotal = useSelector((state) => state.cart.totalPrice)
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
            <NavLink className="text-warning" href="education">
              Education
            </NavLink>
            <NavLink className="text-warning" href="shop">
              Shop
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
      <Container>
        <Row>
          <Col>
            <Nav>
              <NavLink className="text-warning" href="cart">
                Cart
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <span className="text-warning">Items:{cartItems}</span>
          </Col>
          <Col>
            <span className="text-warning">Total:{cartTotal}</span>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
