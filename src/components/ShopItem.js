import { Card, CardImg, CardBody, CardText, CardTitle, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/slices/cartSlice";//src\state\slices\cartSlice.js
import '../components-css/shopItem.css';
const ShopItem = ({item}) => {
    const dispatch = useDispatch();
    const addItem = (item) => {
        console.log("dispatching addToCart", item)
        dispatch(addToCart(item));
    };



    return (
       
        <Card className='shop-item-card'>
            <CardImg src={item.image} alt={item.name} className='shop-item-image' />
            <CardBody className='shop-item-body'>
                <CardTitle className='text-center'>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardText>${item.price}</CardText>
                <Button onClick={() => addItem(item)}>Add to Cart</Button>
            </CardBody>
        </Card>
       
    );
};

export default ShopItem;