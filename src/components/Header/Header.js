import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href as={Link} to="/home">
            Medicor
          </Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link href as={Link} to="/products">
                Products
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href as={Link} to="/blog">
                Blog
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link href as={Link} to="/myitems">
                    My Items
                  </Nav.Link>
                  <Button onClick={logout}>Log out</Button>
                </>
              ) : (
                <Nav.Link href as={Link} to="/login">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
