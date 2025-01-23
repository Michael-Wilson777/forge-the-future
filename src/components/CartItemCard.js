import { useDispatch } from "react-redux";
import { incrementQty, decrementQty } from "../state/slices/cartSlice";
import { Card, CardBody, CardTitle, CardText, Image, Row, Col, Button } from "react-bootstrap";

const CartItemCard = ({cartItem}) => {
    
    const dispatch = useDispatch();
    const {image, name, description, qty, price} = cartItem;
    const increment = (cartItem) => {
        dispatch(incrementQty(cartItem));
    };
    const decrement = (cartItem) => {
        dispatch(decrementQty(cartItem));
    };
    

    return (
        <Card>
            <Row>
                <Col>
                    <Image src={image} style={{width: '15rem'}} />
                </Col>
                <Col>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Col>
                <Col>
                    <CardBody>
                        <CardText>
                            QTY: 
                            <Button onClick={() => increment(cartItem)}>+</Button> {qty} <Button onClick={() => decrement(cartItem)}>-</Button>
                        </CardText>
                    </CardBody>
                    
                </Col>
                <Col>
                    <CardBody>
                        <CardText>Price: ${price.toFixed(2)}</CardText>
                    </CardBody>
                    
                </Col>
            </Row>
        </Card>
    );
};

export default CartItemCard;