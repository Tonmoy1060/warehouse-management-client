import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.PNG";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="250"
              height="40"
              className="d-inline-block text-white align-top rounded img-fluid"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="ms-3" as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link className="ms-3" as={Link} to="blog">
                Blog
              </Nav.Link>
              <Nav.Link className="ms-3" as={Link} to="addItems">
                Add Items
              </Nav.Link>

              {user ? (
                //  <Button onClick={handleSignOut}>SignOut</Button>
                <div className="d-flex">
                  <Nav.Link className="ms-3" as={Link} to="manageItems">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link className="ms-3" as={Link} to="myItems">
                    My Items
                  </Nav.Link>
                  <Nav.Link
                    onClick={handleSignOut}
                    className="ms-4"
                    as={Link}
                    to="login"
                  >
                    SignOut
                  </Nav.Link>
                </div>
              ) : (
                <Nav.Link className="ms-4" as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
