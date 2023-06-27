import { Navbar, Container, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/Header.css";

export function NavigationBar({ color, page }) {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        variant="dark"
        fixed="top"
        expand="md"
        className={color ? "colorNav" : "transparentNav"}
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
              <Nav.Link
                href="/news/all"
                className={page === "news" ? "active active-nav" : ""}
              >
                News
              </Nav.Link>
              <NavDropdown
                title="Teams"
                id="responsive-navbar-nav"
                className={page === "teams" ? "active  active-nav" : ""}
              >
                <NavDropdown.Item
                  className={page === "krai" ? "active active-nav" : ""}
                  href="/Teams/krai"
                >
                  KRAI
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Teams/krsbi-b"
                  className={page === "krsbi-b" ? "active active-nav" : ""}
                >
                  KRSBI
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Teams/krsti"
                  className={page === "krsti" ? "active active-nav" : ""}
                >
                  KRSTI
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Teams/krsri"
                  className={page === "krsri" ? "active active-nav" : ""}
                >
                  KRSRI
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Teams/krtmi"
                  className={page === "krtmi" ? "active active-nav" : ""}
                >
                  KRTMI
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Teams/rp"
                  className={page === "rp" ? "active active-nav" : ""}
                >
                  Racing Plane
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Teams/vtol"
                  className={page === "vtol" ? "active active-nav" : ""}
                >
                  VTOL
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className={page === "gallery" ? "active active-nav" : ""}
                href="/gallery"
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                className={page === "publication" ? "active active-nav" : ""}
                href="/publication"
              >
                Publication
              </Nav.Link>
              <Nav.Link
                href="/sponsors"
                className={page === "sponsors" ? "active active-nav" : ""}
              >
                Sponsors
              </Nav.Link>
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
