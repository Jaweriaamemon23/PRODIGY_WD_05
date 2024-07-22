import { Link } from 'react-router-dom'
import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
export default function Header() {

  const brandStyle = {
    fontSize: '24px', // Adjust the font size of SKYSYNC
    color: 'white', // Set the color to white
    fontWeight: 'bold', // Add bold font weight
  };
  const dropdownStyle = {
    color: 'white', // Set the text color to black or another color of your choice
  };
  const buttonStyle = {
    borderColor: '#CDA45E',
    color: '#CDA45E',
    borderRadius: '50px',
  };
  return (
    <header id="header" className="fixed-top">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={brandStyle}>SKYSYNC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutus" style={{ color: 'white' }}>About</Nav.Link>
              <Nav.Link as={Link} to="/Search" style={{ color: 'white' }}>Map</Nav.Link>
              <Nav.Link as={Link} to="/Newsandblog" style={{ color: 'white' }}> News & Blogs</Nav.Link>
              <Nav.Link as={Link} to="/Weather" style={{ color: 'white' }}> Weather</Nav.Link>
              <NavDropdown title="Support" id="collapsible-nav-dropdown" style={{ color: 'white' }}>
                <NavDropdown.Item href="#action/3.2"><Nav.Link as={Link} to="/Support" style={{ color: 'black' }}>Help</Nav.Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2"><Nav.Link as={Link} to="/Guide" style={{ color: 'black' }}>Guide</Nav.Link></NavDropdown.Item>
              </NavDropdown>
              
              
            </Nav>
            <Nav.Link >
  <Button variant="outline-warning" style={buttonStyle}>
  <Nav.Link as={Link} to="/Contactus">Contact us</Nav.Link>
  </Button>
</Nav.Link>
 </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
