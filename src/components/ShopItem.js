import { Card, CardImg, CardHeader, CardBody, CardText, CardTitle, CardFooter, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/slices/cartSlice";//src\state\slices\cartSlice.js
import '../components-css/shopItem.css';
const ShopItem = ({item}) => {
    const dispatch = useDispatch();
    const addItem = (item) => {
        
        dispatch(addToCart(item));
    };



    return (
       
        <Card className='shop-item-card'>
            <CardImg src={item.image} alt={item.name} className='shop-item-image' />
            <CardHeader className='pt-3'>
                <CardTitle className='text-center'>{item.name}</CardTitle>

            </CardHeader>
            <CardBody className='shop-item-body'>
                <CardText className="fs-6">{item.description}</CardText>
            </CardBody>
            <CardFooter>
                <Row>

                <Col>
                <Button onClick={() => addItem(item)}>Add to Cart</Button>
                </Col>
                <Col>
                <CardText>${item.price}</CardText>
                </Col>
                </Row>

            </CardFooter>
        </Card>
       
    );
};

export default ShopItem;