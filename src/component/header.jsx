import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/letes.png';

export default function AppHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#why-choose-us">Why Choose Us</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#faqs">FAQs</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    )
}