import { useState } from "react";
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";
import IntroCard from "../components/IntroCard";
import Videos from "../components/Videos";
import SupportAndInfoCard from "../components/SupportAndInfoCard";
import '../components-css/homePage.css';

const HomePage = () => {


  return (
    <Container fluid className="home-page text-center">
      <Row className="h-50">
        <Col lg={12}>
          <IntroCard className='intro-card-comp' />
        </Col>
        <Col lg={4} className='p-3'>
          <SupportAndInfoCard />
        </Col>
        
      </Row>
    </Container>
  );
};

export default HomePage;