import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";

const SupportAndInfoCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support and Information</CardTitle>
        <CardSubtitle>Everywhere you need to go for information</CardSubtitle>
      </CardHeader>
      <CardBody>
        <Row className='py-2 border-bottom'>
          <Col lg={3}>
            <Image src="/images/AWS.png" thumbnail />
          </Col>
          <Col className="text-center">
            <CardText>
              A site where you can find regulations, code, and many other useful
              resources. You will be asked to purchase a membership. You can do this or look around to see what is free or buy resources.
            </CardText>
            <a href="https://www.aws.org" target="_blank" rel="noopener noreferrer"><CardText>aws.org</CardText></a>
          </Col>
        </Row>
        <Row className='py-2 border-bottom'>
          <Col lg={3}>
            <Image src="/images/millerwelds.jpg" thumbnail />
          </Col>
          <Col className="text-center">
            <CardText>
              There are a lot of resources on this site such as instructional videos, equipment information and manuals, and articles about the welding world.
            </CardText>
          </Col>
        </Row>
        <Row className='py-2 border-bottom'>
          <Col lg={3}>
            <Image src="/images/lincoln.jpg" thumbnail />
          </Col>
          <Col className="text-center">
            <CardText>
              There are a lot of resources on this site such as instructional videos, equipment information and manuals, and articles about the welding world.
            </CardText>
          </Col>
        </Row>
        <Row className='py-2 border-bottom'>
          <Col lg={3}>
            <Image src="/images/Weldmonger.jpg" thumbnail />
          </Col>
          <Col className="text-center">
            <CardText>
              Jody Collier is and expert welder and his Welding Tips and Tricks collection of coninually updated videos is very informative and easy to follow. There is also a full store with discounted equipment and accessories.
            </CardText>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col lg={3}>
            <CardTitle>Weld.com</CardTitle>
          </Col>
          <Col className="text-center">
            <CardText>
              This group of gentleman is dedicated to teaching the next generation of welders as well as the hobbiest.
            </CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SupportAndInfoCard;
