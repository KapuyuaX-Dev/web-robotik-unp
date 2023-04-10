import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
    return(
        <div className="header">
            <nav>
                <Container>
                    <Navbar collapseOnSelect variant="dark" fixed="top" expand='md' className="colorNav">
                    <Container fluid>
                    <Navbar.Brand href="/#"><img 
                        src={process.env.PUBLIC_URL+'/image/robotik.png'} 
                        alt="logo"
                        height="auto"
                        width="30"
                        className="d-inline-block align-top"
                        /> Robotic UNP
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-5 my-1 w-32">
                                <Nav.Link className="nav-links" ><Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>Home</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="teams" activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>Teams</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="achievement" activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>Achievement</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="galery" activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>Galery</Link></Nav.Link>
                                <Nav.Link className="nav-links"><NavLink style={{textDecoration: 'none',color:"#83939c"}} to="/sponsors" >Sponsors</NavLink></Nav.Link>
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