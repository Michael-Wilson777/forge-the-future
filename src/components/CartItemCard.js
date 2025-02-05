import { useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../state/slices/cartSlice";
import {
  Image,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardFooter,
  Container,
  Row,
  Col,
  Button,
  CloseButton,
} from "react-bootstrap";
import "../components-css/cartItemCard.css";

const CartItemCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { image, name, description, qty, price } = cartItem;
  const increment = (cartItem) => {
    dispatch(incrementQty(cartItem));
  };
  const decrement = (cartItem) => {
    dispatch(decrementQty(cartItem));
  };
  const deleteItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <Card className="cart-item-card mt-3">
      <CloseButton className="close-button" onClick={() => deleteItem(cartItem)} />
      <Row>
        <Col lg={3} md={4} sm={12}>
          <Image src={image} className="cart-item-image" />
        </Col>
        <Col lg={9} md={8} sm={12}>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
            <CardText className="cart-item-price">Price: ${price.toFixed(2)}</CardText>
            <div className="qty-container">
              <h5>QTY:</h5>
              <div className="qty-buttons ps-3 mb-2">
                <Button
                  className="qty-button text-dark"
                  variant='secondary'
                  onClick={() => increment(cartItem)}
                >
                  +
                </Button>
                <p className="qty-amount">{qty}</p>
                <Button
                  className="qty-button text-dark"
                  variant='secondary'
                  onClick={() => decrement(cartItem)}
                >
                  -
                </Button>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItemCard;
