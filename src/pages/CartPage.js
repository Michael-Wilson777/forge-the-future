import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../state/slices/cartSlice";
import { Col, Container, Row, Button } from "react-bootstrap";
import CartItemCard from "../components/CartItemCard";
import PaymentContainer from "../components/PaymentContainer";
import "../components-css/cartPage.css";
//import CartDisplay from "../components/CartDisplay";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Container className="cart-page-container">
      <Row>
        <Col lg={8} md={12}>
          {cartItems.map((cartItem) => {
            return (
              <Row key={cartItem.id} className="mb-3">
                <Col lg={9}>
                  <CartItemCard cartItem={cartItem} style={{ width: "50vh" }} />
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col lg={4} md={12} className='payment-container'>
          <PaymentContainer />
        </Col>
      </Row>
    </Container>
  );
};
export default CartPage;
