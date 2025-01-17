import { Card, CardImg, CardBody, CardText, CardTitle, Button } from "react-bootstrap";

const ShopItem = ({item}) => {
    return (
        <>
        <Card style={{width: '18rem'}}>
            <CardImg src={item.image} alt={item.name} style={{width: '10rem', height: 'auto'}} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardText>${item.price}</CardText>
                <Button>Add to Cart</Button>
                </CardBody>
        </Card>
        </>
    );
};

export default ShopItem;