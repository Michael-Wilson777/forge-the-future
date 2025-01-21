import { Card, CardBody, CardTitle, CardText, Image, Row, Col } from "react-bootstrap";

const CartItemCard = ({cartItem}) => {
    console.log(cartItem);

    return (
        <Card>
            <Row>
                <Col md='3'>
                    <Image src={cartItem.image} style={{width: '50rem'}} />
                </Col>
                <Col md='4'>
                    <CardBody>
                        <CardTitle>{cartItem.name}</CardTitle>
                        <CardText>{cartItem.description}</CardText>
                    </CardBody>
                </Col>
                <Col md='2'>
                    <CardBody>
                        <CardText>QTY:</CardText>
                    </CardBody>
                </Col>
                <Col md='3'>
                    <CardBody>
                        <CardText>${cartItem.price}</CardText>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
};

export default CartItemCard;