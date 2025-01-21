import { Card, CardBody, CardTitle, CardText, Image, Row, Col } from "react-bootstrap";

const CartItemCard = ({cartItem}) => {
    console.log('cartItem: ', cartItem);

    return (
        <Card>
            <Row>
                <Col>
                    <Image src={cartItem.image} style={{width: '15rem'}} />
                </Col>
                <Col>
                    <CardBody>
                        <CardTitle>{cartItem.name}</CardTitle>
                        <CardText>{cartItem.description}</CardText>
                    </CardBody>
                </Col>
                <Col>
                    <CardBody>
                        <CardText>QTY: {cartItem.qty}</CardText>
                    </CardBody>
                </Col>
                <Col>
                    <CardBody>
                        <CardText>${cartItem.price}</CardText>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
};

export default CartItemCard;