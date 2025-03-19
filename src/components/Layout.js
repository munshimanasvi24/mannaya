import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white">
            🎂 Birthday Surprise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/product" className="nav-link-custom">
                Gifts
              </Nav.Link>
              <Nav.Link as={Link} to="/feedback" className="nav-link-custom">
                Wishes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}

      <footer className="footer-custom">
        <Container>
          <div className="text-center">
            <p>Made with ❤️ for Mannnaya • Birthday: March 14th</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
