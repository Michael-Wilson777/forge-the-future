import { useDispatch } from "react-redux";
import { incrementQty } from "../state/slices/cartSlice";
import { Card, CardBody, CardTitle, CardText, Image, Row, Col, Button } from "react-bootstrap";

const CartItemCard = ({cartItem}) => {
    console.log('cartItem: ', cartItem);
    const dispatch = useDispatch();

    const {image, name, description, qty, price} = cartItem;

    const increment = (cartItem) => {
        dispatch(incrementQty(cartItem));
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
                        <CardText>QTY: <Button onClick={() => increment(cartItem)}>+</Button> {qty} <Button>-</Button></CardText>
                    </CardBody>
                    
                </Col>
                <Col>
                    <CardBody>
                        <CardText>Price: ${price.toFixed(2)}</CardText>
                    </CardBody>
                    <Button>Remove</Button>
                </Col>
            </Row>
        </Card>
    )
};

export default CartItemCard;