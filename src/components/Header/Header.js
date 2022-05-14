import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
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
          <Navbar.Brand href="/home">Medicor</Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/blog">Blog</Nav.Link>
              {user ? (
                <>
                  <Nav.Link href="/manageproducts">Manage Items</Nav.Link>
                  <Nav.Link href="/additem">Add Item</Nav.Link>
                  <Nav.Link href="/myitems">My Items</Nav.Link>
                  <Button onClick={logout}>Log out</Button>
                </>
              ) : (
                <Nav.Link href="/login">Log in</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
