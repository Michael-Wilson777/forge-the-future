import { Card, CardImg, CardBody, CardText, CardTitle, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/slices/cartSlice";//src\state\slices\cartSlice.js

const ShopItem = ({item}) => {
    const dispatch = useDispatch();
    const addItem = (item) => {
        console.log("dispatching addToCart", item)
        dispatch(addToCart(item));
    };



    return (
        <>
        <Card style={{maxHeight: '50rem', width: '20rem'}} className='pt-3 mt-3'>
            <CardImg src={item.image} alt={item.name} style={{ height: '20rem'}} className='mb-2' />
            <CardBody style={{height: '20rem'}}>
                <CardTitle className='text-center'>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardText>${item.price}</CardText>
                <Button onClick={() => addItem(item)}>Add to Cart</Button>
            </CardBody>
        </Card>
        </>
    );
};

export default ShopItem;