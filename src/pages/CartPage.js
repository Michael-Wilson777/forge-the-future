import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../state/slices/cartSlice";
import { Col, Container, Row, Button } from "react-bootstrap";
import CartItemCard from "../components/CartItemCard";
import PaymentContainer from "../components/PaymentContainer";
//import CartDisplay from "../components/CartDisplay";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  console.log(cartItems);

  const emptyCart = (cartItems) => {
    dispatch(clearCart(cartItems));
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="col-8">
            {cartItems.map((cartItem) => {
              return (
                <Row key={cartItem.name}>
                  <Col>
                    <CartItemCard cartItem={cartItem} />
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col>
            <PaymentContainer />
          </Col>
        </Row>
      </Container>
 
    </>
  );
};
export default CartPage;
