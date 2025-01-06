import { Container, Card, CardBody, CardHeader, CardTitle, CardText } from "react-bootstrap";


const HomePage = () => {
    return (
        
        <>
        <Container className="home-page">
        <Card style={{width: '30rem'}}>
            <CardHeader style={{border: 'none'}} className="text-center">
                <CardTitle><h1>Forge the Future</h1></CardTitle>
                <CardText><h4>Your Hub for Welding/Metal Fabrication Education & Equipment</h4></CardText>
            </CardHeader>
            <CardBody className="text-center">
                <CardText>
                Whether you're a newcomer to welding and metal fabrication or simply in need of the right tools to get the job done, you've found the perfect place!
                </CardText>
            </CardBody>
        </Card>
        </Container>
        </>
    );
}

export default HomePage;