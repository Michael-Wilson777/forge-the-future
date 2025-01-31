import { useDispatch, useSelector } from "react-redux";
import { clearCart, submitPayment as submitPaymentAction } from "../state/slices/cartSlice";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Button,
  CloseButton,
} from "react-bootstrap";

const PaymentContainer = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCost = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubmitPayment = () => {
    dispatch(submitPaymentAction());
  };

  return (
    <Card as="div" className="mt-3">
      <CardHeader>
        <Row>
          <Col className="col-3">
            <CardTitle>Total</CardTitle>
          </Col>
          <Col className="col-3 text-end offset-5">
            <CardTitle>${totalCost.toFixed(2)}</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter>
        <Row>
          <Col className="col-2">
            <Button onClick={handleSubmitPayment}>Pay</Button>
          </Col>
          <Col className="col-4">
            <Button onClick={handleClearCart}>Clear Cart</Button>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default PaymentContainer;