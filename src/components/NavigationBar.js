import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-scroll";
import logoRobotik from "../assets/image/robotik.png"

const NavigationBar = () => {
    return(
        <div className="header">
            <nav>
                <Container>
                    <Navbar collapseOnSelect variant="dark" fixed="top" expand='md'>
                    <Container fluid>
                    <Navbar.Brand><img 
                        src={logoRobotik} 
                        alt="logo"
                        height="auto"
                        width="30"
                        className="d-inline-block align-top"
                        /> Robotic UNP
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-5 my-1 w-32">
                                <Nav.Link className="nav-links" ><Link to="home" smooth={true} duration={100}>Home</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="teams"smooth={true} duration={100}>Teams</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="achievement" smooth={true} duration={100}>Achievement</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="galery" smooth={true} duration={100}>Galery</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="sponsors" smooth={true} duration={100}>Sponsors</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </Container>
            </nav>
        </div>
    )
};

export default NavigationBar;