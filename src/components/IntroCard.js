import { Card, CardHeader, CardText, CardTitle, CardBody } from "react-bootstrap";

const IntroCard = () => {

    return (
        <Card className="intro-card" style={{backgroundColor:'rgba(255, 72, 0, 0.79)'}}>
          <CardBody className="text-center">
            <CardText className='text-light fs-5 text-shadow'>
              Whether you're a newcomer to welding and metal fabrication or
              simply in need of the right tools to get the job done, you've
              found the perfect place!
            </CardText>
          </CardBody>
        </Card>
    )

};

export default IntroCard;