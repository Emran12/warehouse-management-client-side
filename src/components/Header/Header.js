import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import banner from "../Header/landing_slide-bg.jpg";
const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img src={banner} className="w-100" alt="" />
    </div>
  );
};

export default Header;
