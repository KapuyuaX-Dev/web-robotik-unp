import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import ketuaUmum from '../assets/image/ketum.png'
import wkm from '../assets/image/wkm.png'
import bendumI from '../assets/image/bendumI.png'
import bendumII from '../assets/image/bendum-II.png'
import sekretarisI from '../assets/image/sekre-I.png'
import sekretarisII from '../assets/image/sekum-II.png'
import '../style/Home.css'
import robotLogo from '../assets/image/robotik.png'
import NewsSection from "./NewsSection";
import Intro from "./Intro";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Home = () =>{
    document.title = "Robotik UNP";
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    
 return(
    <div className="home">
        <Intro/>
        <marquee style={{background:'#FCA311',color:'whitesmoke'}}>--Welcome to Robotics UNP Website--</marquee>
        <div data-aos="fade-up" ><NewsSection/></div>
        <div data-aos="fade-up" className="aboutSection">
        <Container className="fluid d-md-flex justify-content-center">
            <div className="about">
                <h2>About us</h2>
                        <Row className="about-description">
                            <div className="kiri"><img src={robotLogo} alt='logo'></img></div>
                            <div className="kanan"><p>Universitas Negeri Padang's Robotics Club, or often known as <b>ROBOTIK UNP</b> is a student activity club that accommodates students who have a strong passion for robotics engineering. ROBOTIK UNP was established on September 10th, 2008 under the name <b>Gaza Robotics Team</b>. The name <b>'Gaza'</b> was taken from the fighting spirit of Gaza, who never gives up easily. The Gaza Robotics Team was under the auspices of the Universitas Negeri Padang's Faculty of Engineering, which in 2018 became an official student activity club. As time went by, we decided to change the name from Gaza Robotics Team to the ROBOTIK UNP.</p>
                            </div>
                        </Row> 
            </div>       
        </Container>
        </div>
        
        {/* <Container className="d-flex justify-content-center">
                    <div className="ratio ratio-16x9 videoProfil">
                        <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/AeYDPMnbTHQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" ></iframe>
                    </div>
        </Container> */}

        <div data-aos="fade-up" className="visionSection">
        <Container className="fluid d-flex justify-content-center">
            <div className="vision">
                <h2>Vision</h2>
                    <div className="vision-description d-flex">
                    <center><h5>"Becoming one of the student activity club that accommodates the entire academic community of Universitas Negeri Padang in the field of robotics engineering technology research that is advanced, accomplished, superior and dignified in Asia"</h5></center>
 
                    </div>
            </div>       
        </Container>
        </div>
        
        <div data-aos="fade-up" className="missionSection">
        <Container className="fluid d-flex justify-content-center">
            <div className="mission">
                <h2>Mission</h2>
                    <div className="vision-description d-flex">
                        <ol type="1">
                        <li>Develop students' creativity in the field of robotics engineering</li>
                        <li>Improve the quality and quantity of human resources through the development of soft skills and hard skills</li>
                        <li>Motivate students to take an active role in developing robotics engineering</li>
                        <li>Help realize Universitas Negeri Padang's vision and mission in becoming a leading and dignified university in Asia through robotics engineering</li>
                        <li>Become a technological pioneer in the field of robotics engineering in Sumatera</li>
                        <li>Collaborate with other student activities and parties that are involved in the development of robotics engineering in Indonesia</li>
                         </ol>
                    </div>
            </div>       
        </Container>
        </div>

        <div data-aos="fade-up" className="pengurus">
            <Container className="d-md-block">
                <h2>ORGANIZATION STRUCTURE</h2>
                <Row data-aos="fade-up">
                <Col className="president">
                    <div className="text-center">
                    <div className="card">
                        <div className="d-flex">
                            <Image roundedCircle="true" src={ketuaUmum}/>
                            <div className="profileCard-description">
                                <h2>Willy Hardi Vernando</h2>
                                <h3>President</h3>
                                <h3>Mechanical Eng.</h3>
                            </div>                         
                        </div>
                    </div>
                    </div>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col>
                    <div className="text-center">
                    <div className="card">
                        <div className="d-flex">
                            <Image roundedCircle="true" src='' alt="wkt"/>
                            <div className="profileCard-description">
                                <h2>Relif Hagler Sentosa M.</h2>
                                <h3>Vice President of Technical Teams</h3>
                                <h3>Electrical Eng.</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    </Col>

                    <Col>
                    <div className="card">
                        <div className="d-flex">
                            <Image roundedCircle="true" src={wkm}/>
                            <div className="profileCard-description">
                                <h2>Dadang Suriana Fahreza</h2>
                                <h3>Vice President of Management Teams</h3>
                                <h3>Electrical Eng.</h3>
                            </div>
                        </div>
                    </div>
                    </Col>

                    <Col>
                    <div className="card">
                        <div className="d-flex">
                            <Image roundedCircle="true" src={bendumI}/>
                            <div className="profileCard-description">
                                <h2>Kurnia Illahi</h2>
                                <h3>Treasurer I</h3>
                                <h3>Physics</h3>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col>
                    <div className="text-center">
                    <div className="card">
                        <div className="d-flex">
                            <Image roundedCircle="true" src={bendumII}/>
                            <div className="profileCard-description">
                                <h2>Auliya Einsrizkianne Edray</h2>
                                <h3>Treasurer II</h3>
                                <h3>Elementary School Teacher Education</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    </Col>

                    <Col>
                    <div className="card">
                        <div className="d-flex">
                            <Image roundedCircle="true" src={sekretarisI}/>
                            <div className="profileCard-description">
                                <h2>Gusvito Habiby</h2>
                                <h3>Secretary I</h3>
                                <h3>Electrical Eng.</h3>
                            </div>
                        </div>
                    </div>
                    </Col>

                    <Col>
                    <div className="card">
                        <div className="d-flex">
                            <Image roundedCircle="true" src={sekretarisII}/>
                            <div className="profileCard-description">
                                <h2>Delila Agustin T.</h2>
                                <h3>Secretary II</h3>
                                <h3>Electrical Eng.</h3>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
 )
}

export default Home;