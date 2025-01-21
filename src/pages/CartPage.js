import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CartItemCard from "../components/CartItemCard";
//import CartDisplay from "../components/CartDisplay";
const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);

    return (
        <Container>
            {cartItems.map((cartItem) => {
                return (
                    <Row  key={cartItem.name}>
                    <Col>
                        <CartItemCard cartItem={cartItem} />
                    </Col>
                    </Row>
                )
            })}
    </Container>
    );
};
export default CartPage;