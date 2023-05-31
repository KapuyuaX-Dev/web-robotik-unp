import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../style/Home.css";
import NewsSection from "./NewsSection";
import Intro from "./Intro";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import FloatingButton from "./FloatingButton";
import { AboutContext } from "../Context";

const Home = () => {
  document.title = "Robotik UNP";

  const { about } = useContext(AboutContext);

  const [floatingBtn, setFloatinBtn] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [texts, setTexts] = useState([
    "--Welcome to Robotics UNP Website--",
    "--Let's Get Creative with Technology--",
    new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour12: false,
    }),
    "H-0 Kontes Robot Indonesia Wilayah I 2023",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const countDownDate = new Date("May 28, 2023 00:00:00").getTime();
      const newTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
        hour12: false,
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const daysLeft = Math.ceil(distance / (1000 * 60 * 60 * 24));
      setTexts((prevTexts) => [
        prevTexts[0],
        prevTexts[1],
        newTime,
        `H-${daysLeft} Kontes Robot Indonesia Wilayah I 2023`,
      ]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
    }, 15000);
    return () => clearInterval(intervalId);
  }, [currentIndex, texts.length]);

  return (
    <div className="home">
      {floatingBtn ? <FloatingButton isShow={floatingBtn} /> : <></>}
      <Intro />
      {/* <marquee style={{background:'#FCA311',color:'whitesmoke'}}>--Welcome to Robotics UNP Website--</marquee> */}
      <div className="marquee">
        {texts.map((text, index) => (
          <span
            key={index}
            className={index === currentIndex ? "visible" : "hidden"}
          >
            {text}
          </span>
        ))}
      </div>
      <div data-aos="fade-up">
        <NewsSection />
      </div>
      <div data-aos="fade-up" className="aboutSection">
        <Container className="fluid d-md-flex justify-content-center">
          <div className="about">
            <h2>About us</h2>
            <Row className="about-description">
              <div className="kiri">
                <img
                  src={process.env.PUBLIC_URL + about.image}
                  alt="logo"
                ></img>
              </div>
              <div className="kanan">
                <div dangerouslySetInnerHTML={{ __html: about.about }} />
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
              <center>
                <h5>
                  "Becoming one of the student activity club that accommodates
                  the entire academic community of Universitas Negeri Padang in
                  the field of robotics engineering technology research that is
                  advanced, accomplished, superior and dignified in Asia"
                </h5>
              </center>
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
                <li>
                  Develop students' creativity in the field of robotics
                  engineering
                </li>
                <li>
                  Improve the quality and quantity of human resources through
                  the development of soft skills and hard skills
                </li>
                <li>
                  Motivate students to take an active role in developing
                  robotics engineering
                </li>
                <li>
                  Help realize Universitas Negeri Padang's vision and mission in
                  becoming a leading and dignified university in Asia through
                  robotics engineering
                </li>
                <li>
                  Become a technological pioneer in the field of robotics
                  engineering in Sumatera
                </li>
                <li>
                  Collaborate with other student activities and parties that are
                  involved in the development of robotics
                  engineering in Indonesia
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </div>

      <div data-aos="fade-up" className="pengurus">
        <Container className="pb-2">
          <h2>ORGANIZATION STRUCTURE</h2>
          <Container className="d-md-flex justify-content-center align-items-center flex-wrap mt-5 m-3 gap-3">
            <div data-aos="fade-up" className="card">
              <Image
                roundedCircle="true"
                src={process.env.PUBLIC_URL + "/image/ketum.png"}
              />
              <div className="profileCard-description">
                <h2>Willy Hardi Vernando</h2>
                <h3>President</h3>
                <h3>Mechanical Eng.</h3>
              </div>
            </div>
          </Container>
          <Container className="d-md-flex justify-content-center align-items-center flex-wrap m-3 gap-3">
            <div data-aos="fade-up" className="card">
              <Image
                roundedCircle="true"
                src={process.env.PUBLIC_URL + "/image/wkt.png"}
                alt="wkt"
              />
              <div className="profileCard-description">
                <h2>Relif Hagler Sentosa M.</h2>
                <h3>Vice President of Technical Teams</h3>
                <h3>Electrical Eng.</h3>
              </div>
            </div>

            <div data-aos="fade-up" className="card">
              <Image
                roundedCircle="true"
                src={process.env.PUBLIC_URL + "/image/wkm.png"}
              />
              <div className="profileCard-description">
                <h2>Dadang Suriana Fahreza</h2>
                <h3>Vice President of Management Teams</h3>
                <h3>Electrical Eng.</h3>
              </div>
            </div>

            <div data-aos="fade-up" className="card">
              <Image
                roundedCircle="true"
                src={process.env.PUBLIC_URL + "/image/bendumI.png"}
              />
              <div className="profileCard-description">
                <h2>Kurnia Illahi</h2>
                <h3>Treasurer I</h3>
                <h3>Physics</h3>
              </div>
            </div>

            <div data-aos="fade-up" className="card">
              <Image
                roundedCircle="true"
                src={process.env.PUBLIC_URL + "/image/bendum-II.png"}
              />
              <div className="profileCard-description">
                <h2>Auliya Einsrizkianne Edray</h2>
                <h3>Treasurer II</h3>
                <h3>Elementary School Teacher Education</h3>
              </div>
            </div>

            <div data-aos="fade-up" className="card">
              <Image
                roundedCircle="true"
                src={process.env.PUBLIC_URL + "/image/sekre-I.png"}
              />
              <div className="profileCard-description">
                <h2>Gusvito Habiby</h2>
                <h3>Secretary I</h3>
                <h3>Electrical Eng.</h3>
              </div>
            </div>

            <div data-aos="fade-up" className="card">
              <Image
                roundedCircle="true"
                src={process.env.PUBLIC_URL + "/image/sekum-II.png"}
              />
              <div className="profileCard-description">
                <h2>Delila Agustin T.</h2>
                <h3>Secretary II</h3>
                <h3>Electrical Eng.</h3>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Home;
