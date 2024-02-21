import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Carouselimage from './Carouselimage';
import { Carousel } from 'bootstrap';
import CardsImage from './CardsImage';
import CardExample from './CardExample';
import SearchBar from './SearchBar';
import Footer from './Footer';



function Home() {
  return (
         <div>
    <Navbar expand="lg" className="BLOSSOMS">
      <Container>
        <Navbar.Brand href="#home">FLORA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
          
            <Link to ='login'>    
           <Nav.Link href="#Login">Login</Nav.Link></Link>
           <Link to ='contact'>
            <Nav.Link href="Contact">Contact</Nav.Link></Link>
            <Link to='register'>
            <Nav.Link href="#Register">Register</Nav.Link></Link>
            <Link to='news'>
            <Nav.Link href="#News">News</Nav.Link></Link>
            <Link to='aboutus'>
            <Nav.Link href="#About">Aboutus</Nav.Link></Link>
            <Link to='admin'>
            <Nav.Link href="#Admin">Admin</Nav.Link></Link>
            <Link to='products'>
            <Nav.Link href="#Products">Products</Nav.Link></Link>
          
           

           
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <Carouselimage/>
  <CardsImage/>
  <SearchBar/>
  













<Footer/>


  </div>
  );
}

export default Home;