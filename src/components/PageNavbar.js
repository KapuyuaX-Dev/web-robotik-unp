import { Navbar, Container, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";

export function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        variant="dark"
        fixed="top"
        expand="md"
        className="colorNav"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={process.env.PUBLIC_URL + "/image/robotik.png"}
              alt="logo"
              height="40"
              width="auto"
              className="d-inline-block align-top"
            />{" "}
            Robotic UNP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navPage mx-5 me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/news/all">News</Nav.Link>
              <NavDropdown title="Teams" id="responsive-navbar-nav">
                <NavDropdown.Item href="/Teams/krai">KRAI</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/krsbi">KRSBI</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/krsti">KRSTI</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/krsri">KRSRI</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/krtmi">KRTMI</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/rp">
                  Racing Plane
                </NavDropdown.Item>
                <NavDropdown.Item href="/Teams/vtol">VTOL</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/sponsors">Sponsors</Nav.Link>
            </Nav>
            <Nav className="mx-5 me-1">
              <Nav.Link href="/admin">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
