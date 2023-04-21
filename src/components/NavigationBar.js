import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-scroll";
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";

const NavigationBar = () => {
    const navigate = useNavigate()
    const [color,setColor] = useState(false)

    const changeColor = () =>{
        if(window.scrollY >=90){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)
    return(
        <div className="header">
                    <Navbar collapseOnSelect variant='dark' fixed="top" expand='md' className={color ? 'colorNav':'transparentNav'}>
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
                            <Nav className="mx-5 my-1 w-32">
                                <Nav.Link className="nav-links" ><Link to="home" activeClass="active" spy={true} smooth={true} offset={-50} duration={100}>Home</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="teams" activeClass="active" spy={true} smooth={true} offset={-50} duration={100}>Teams</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="achievement" activeClass="active" spy={true} smooth={true} offset={-50} duration={100}>Achievement</Link></Nav.Link>
                                <Nav.Link className="nav-links"><Link to="galery" activeClass="active" spy={true} smooth={true} offset={-50} duration={100}>Gallery</Link></Nav.Link>
                                <Nav.Link className="nav-links" onClick={()=>navigate("/sponsors")}>Sponsors</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
        </div>
    )
};

export default NavigationBar;