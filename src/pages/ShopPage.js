import ShopItem from "../components/ShopItem";
import { INVENTORY } from "../data/INVENTORY";
import { Container, Row, Col } from "react-bootstrap";

const ShopPage = () => {
  return (
    <Container fluid style={{backgroundColor: 'blue'}}>
      <Row className="row-cols-1 row-cols-md-3 g-2">
        {INVENTORY.map((item) => {
          return (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <ShopItem item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ShopPage;
