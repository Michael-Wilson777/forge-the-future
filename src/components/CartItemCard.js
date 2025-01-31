import { useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../state/slices/cartSlice";
import {
  Image,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
  Button,
  CloseButton,
} from "react-bootstrap";

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
    dispatch(removeFromCart(cartItem))
  }

  return (
   
    <Card as='div' className="mt-3">
      <Row>
        <Col className='col-3'>
          <CardImg src={image} style={{ width: "15rem" }} />
        </Col>
        <Col className='col-3 offset-2'>
            <Row>
              <CardTitle className='mt-2'>{name}</CardTitle>
              <CardText>{description}</CardText>
            </Row>
            <Row className="mt-4">
              <h5 className="">QTY:</h5>
              <Col className="col-2">
                <Button
                  style={{ backgroundColor: "transparent" }}
                  className="text-dark"
                  onClick={() => increment(cartItem)}
                >
                  <span className="">+</span>
                </Button>
              </Col>
              <Col className="col-1 pt-2">
                <p>{qty}</p>
              </Col>
              <Col className="col-2">
                <Button
                  style={{ backgroundColor: "transparent" }}
                  className="margin-auto text-dark"
                  onClick={() => decrement(cartItem)}
                >
                  -
                </Button>
              </Col>
            </Row>
          </Col>
              <Col className="text-end col-4">
                <Row>
                  <Col>
                    <CloseButton onClick={() => deleteItem(cartItem)} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span>Price: ${price.toFixed(2)}</span>
                  </Col>
                </Row>
              </Col>
      </Row>
    </Card>
   
  
  );
};

export default CartItemCard;
