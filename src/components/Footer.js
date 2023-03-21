import { Container, Row, Col } from "react-bootstrap";

const Footer = () =>{
    return(<div className="footer">
        <Container>
            <Row className="pt-4">
                <Col>
                        <h4>Unit Kegiatan Robotika</h4>
                        <h4>Universitas Negeri Padang</h4>
                        <h6>Gedung Pusat Kegiatan Kemahasiswaan Lt. 2</h6>
                        <h6>Jalan Prof. Dr. Hamka, Air Tawar Padang, Sumatera Barat</h6>
                </Col>
                <Col>
                    <h5>Contact Us</h5>
                    <a href="https://www.instagram.com/robotic_unp/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <a href="https://www.youtube.com/@robotic_unp3859" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                    <a href="https://goo.gl/maps/YHUeq4KTyJ3uuAvs5" target="_blank"><ion-icon name="location-sharp"></ion-icon></a>
                    <a href="https://wa.me/+6285364987224" target="_blank"><ion-icon name="call-sharp"></ion-icon></a>
                    <a href="mailto:gazarobotikunp@gmail.com"><ion-icon name="mail-open-sharp"></ion-icon></a>
                </Col>
            </Row>
        </Container>
        <div className="copyright">
            <p>&copy; 2023 Unit Kegiatan Robotika UNP &#9900; KapuyuaX-Dev &#9900;</p>
        </div>
    </div>
    )
};

export default Footer;