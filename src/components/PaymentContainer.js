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
  CardText,
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
    <Card as="div" className="mt-3 float-end" style={{width: '20rem'}}>
      <CardHeader>
        
          <Col>
            <CardTitle>Total</CardTitle>
          </Col>
          <Col>
            <CardTitle>${totalCost.toFixed(2)}</CardTitle>
          </Col>
       
      </CardHeader>
      <CardBody>
        {cartItems.map((item) => {
          return (
            <Row>
              <Col>
                <CardText>{item.name}</CardText>
              </Col>
              <Col>
                <CardText>${item.price.toFixed(2)}</CardText>
              </Col>
            </Row>
          )
        })}
      </CardBody>
      <CardFooter>
        <Row>
          <Col className="col-2">
            <Button size='sm' onClick={handleSubmitPayment}>Pay</Button>
          </Col>
          <Col className="col-4 offset-5">
            <Button size='sm' onClick={handleClearCart}>Clear Cart</Button>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default PaymentContainer;