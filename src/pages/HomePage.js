import {
  Container,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
} from "react-bootstrap";


const HomePage = () => {
  return (
    <>
      <Container fluid className="home-page">
        <Card className="intro-card" style={{ width: "30rem" }}>
          <CardHeader style={{ border: "none" }} className="text-center">
            <CardTitle>Forge the Future</CardTitle>
            <CardText>
              Your Hub for Welding/Metal Fabrication Education & Equipment
            </CardText>
          </CardHeader>
          <CardBody className="text-center">
            <CardText>
              Whether you're a newcomer to welding and metal fabrication or
              simply in need of the right tools to get the job done, you've
              found the perfect place!
            </CardText>
          </CardBody>
        </Card>
      </Container>
      
    </>
  );
};

export default HomePage;
