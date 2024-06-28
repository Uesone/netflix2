import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.png';
import './NetflixNav.css'; 

class NetflixNav extends React.Component {
  render() {
    return (
      <Navbar expand="lg" style={{ backgroundColor: '#221F1F' }} variant="dark">
        <Container fluid className='g-0'>
          <Navbar.Brand href="#">
            <img src={logo} style={{ width: '100px', height: '55px' }} alt="Netflix Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" className="active fw-bold">Home</Nav.Link>
              <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
              <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
              <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
              <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">KIDS</div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NetflixNav;
