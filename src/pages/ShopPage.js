import ShopItem from "../components/ShopItem";
import { INVENTORY } from "../data/INVENTORY";
import { Container, Row, Col } from "react-bootstrap";

const ShopPage = () => {
  return (
    <Container>
      <Row>
        {INVENTORY.map((item) => {
          return (
            <Col  key={item.id}>
              <ShopItem item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ShopPage;
