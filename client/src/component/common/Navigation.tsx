
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <nav className="navbar fixed-top navbar-light bg-light">
        <Container fluid>
          <Navbar.Brand href="/Home">🌾</Navbar.Brand>
          <Nav.Link href="/plants">Plants</Nav.Link>
          <Nav.Link href="/Home">Home</Nav.Link>
          <Navbar.Brand href="/Home">🌾</Navbar.Brand>
        </Container>
      </nav>
    </Navbar>
  );
};

export default Navigation;
