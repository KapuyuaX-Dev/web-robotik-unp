import { Container, Row, Col } from "react-bootstrap";
import "../style/Footer.css";

const Footer = () => {
  let watext =
    "Halo Selamat pagi/siang/malam\n" +
    "Perkenalkan saya ...... dari ......\n" +
    "Tujuan saya menghubungi pada saat ini yaitu untuk .....";
  return (
    <div className="footer">
      <Container>
        <Row className="pt-4 pb-4">
          <Col className="pt-4 pb-1">
            <h4>Unit Kegiatan Robotika</h4>
            <h4>Universitas Negeri Padang</h4>
            <br></br>
            <h6>Gedung Pusat Kegiatan Kemahasiswaan Lt. 2</h6>
            <h6>Jalan Prof. Dr. Hamka, Air Tawar Padang, Sumatera Barat</h6>
          </Col>
          <Col className="pt-4 pb-1">
            <h5>Contact Us</h5>
            <a href="https://www.instagram.com/robotic_unp/" target="_blank">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <ion-icon name="logo-linkedin"></ion-icon>
            <a href="https://www.youtube.com/@robotic_unp3859" target="_blank">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a href="https://goo.gl/maps/DjHcsz9oG3a6bsSg6" target="_blank">
              <ion-icon name="location-sharp"></ion-icon>
            </a>
            <a
              href={encodeURI(
                `https://api.whatsapp.com/send?phone=6282294455403&text=${watext}`
              )}
              target="_blank"
            >
              <ion-icon name="call-sharp"></ion-icon>
            </a>
            <a
              href={encodeURI(
                "mailto:gazarobotikunp@gmail.com?subject=Permohonan Kerja Sama"
              )}
            >
              <ion-icon name="mail-open-sharp"></ion-icon>
            </a>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <p>
          &copy; 2023 Unit Kegiatan Robotika UNP &#9900;&nbsp;
          <a href="https://linktr.ee/kapuyuax" target="_blank">
            KapuyuaX-Dev
          </a>
          &nbsp;&#9900;
        </p>
      </div>
    </div>
  );
};

export default Footer;
