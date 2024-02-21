
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Subscriptions() {
  const halfScreenPosterStyle = {
    marginBottom: '20px',
    marginLeft: '10px',
    marginTop: '20px',
    height: '100%',
    width: '200%', 
  };

  const posterStyle = {
    marginBottom: '20px',
    marginLeft: '10px',
    marginTop: '20px',
    height: '250px',
    width: '100%', 
  };

  return (
    <Container fluid>
      <h1><b>Subscriptions Bag</b></h1>
      <Row>
        <Col xs={12} md={6}>
          <Link to='/Subscriptons'>
            <img src='https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt34prodlp/banners/introductory_banner_d_interflora_illustration_20230523.jpg' alt='img' style={halfScreenPosterStyle} />
          </Link>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
          <Link to='/Subscriptons'>
            <img src='https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt34prodlp/banners/about_flowers_d_interflora_illustration_20230522.png' alt='img' style={halfScreenPosterStyle} />
          </Link>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Subscriptions;

