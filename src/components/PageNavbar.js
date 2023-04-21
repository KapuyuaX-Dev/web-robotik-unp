import { Navbar, Container, Nav } from "react-bootstrap"
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/Header.css'
import { useNavigate } from "react-router-dom";

export function NavigationBar(){
    const navigate = useNavigate()
    return(
        <div className="header">
        <Navbar collapseOnSelect variant='dark' fixed="top" expand='md' className="colorNav">
                <Container fluid>
                <Navbar.Brand href="/"><img 
                        src={process.env.PUBLIC_URL+'/image/robotik.png'} 
                        alt="logo"
                        height="40"
                        width="auto"
                        className="d-inline-block align-top"
                        /> Robotic UNP
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-5 me-auto">
                                <Nav.Link className="nav-links" onClick={()=>navigate("/")}>Home</Nav.Link>
                                <Nav.Link className="nav-links" onClick={()=>navigate("/news/all")}>News</Nav.Link>
                                <NavDropdown className="nav-links" title="Teams" id="responsive-navbar-nav">
                                    <NavDropdown.Item onClick={()=>navigate("/krai")}>KRAI</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=>navigate("/krsbi")}>KRSBI</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=>navigate("/krsti")}>KRSTI</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=>navigate("/krsri")}>KRSRI</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=>navigate("/krtmi")}>KRTMI</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=>navigate("/krti")}>KRTI</NavDropdown.Item>

                                </NavDropdown>
                                <Nav.Link className="nav-links" onClick={()=>navigate("/gallery")}>Gallery</Nav.Link>
                                <Nav.Link className="nav-links" onClick={()=>navigate("/sponsors")}>Sponsors</Nav.Link>

                            </Nav>
                            <Nav className='mx-5 me-1'>
                                <Nav.Link className="nav-links">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}