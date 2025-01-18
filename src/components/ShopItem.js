import { Card, CardImg, CardBody, CardText, CardTitle, Button } from "react-bootstrap";

const ShopItem = ({item}) => {
    return (
        <>
        <Card style={{maxHeight: '50rem', width: '20rem'}} className='pt-3 mt-3'>
            <CardImg src={item.image} alt={item.name} style={{ height: '20rem'}} className='mb-2' />
            <CardBody style={{height: '20rem'}}>
                <CardTitle className='text-center'>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardText>${item.price}</CardText>
                <Button>Add to Cart</Button>
            </CardBody>
        </Card>
        </>
    );
};

export default ShopItem;