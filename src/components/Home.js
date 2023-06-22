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
  const { about, setAbout } = useContext(AboutContext);
  const [floatingBtn, setFloatinBtn] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [texts, setTexts] = useState([
    "--Welcome to Robotics UNP Website--",
    "--Let's Get Creative with Technology--",
    new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour12: false,
    }),
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

      setTexts((prevState) => {
        const updatedTexts = [...prevState];
        updatedTexts[2] = newTime;
        return updatedTexts;
      });
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
      <Intro img={about.about.banner} />
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
      <div>
        <NewsSection />
      </div>
      <div className="aboutSection">
        <Container className="fluid d-md-flex justify-content-center">
          <div className="about">
            <h2>About us</h2>
            <Row className="about-description">
              <div className="kiri">
                <img
                  src={process.env.PUBLIC_URL + about.about.logo}
                  alt="logo"
                ></img>
              </div>
              <div className="kanan">
                <div
                  dangerouslySetInnerHTML={{ __html: about.about.description }}
                />
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
                <h5>{about.visi}</h5>
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
                {about.misi.map((misi, i) => (
                  <li key={i}>{misi}</li>
                ))}
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
                src={process.env.PUBLIC_URL + about.pengurus[0].foto}
              />
              <div className="profileCard-description">
                <h2>{about.pengurus[0].nama}</h2>
                <h3>{about.pengurus[0].jabatan}</h3>
                <h3>{about.pengurus[0].jurusan}</h3>
              </div>
            </div>
          </Container>
          <Container className="d-md-flex justify-content-center align-items-center flex-wrap m-3 gap-3">
            {about.pengurus
              .filter((_, index) => index != 0)
              .map((pengurus, i) => (
                <div data-aos="fade-up" className="card">
                  <Image
                    roundedCircle="true"
                    src={process.env.PUBLIC_URL + pengurus.foto}
                    alt={`foto ${pengurus.jabatan}`}
                  />
                  <div className="profileCard-description">
                    <h2>{pengurus.nama}</h2>
                    <h3>{pengurus.jabatan}</h3>
                    <h3>{pengurus.jurusan}</h3>
                  </div>
                </div>
              ))}
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Home;
