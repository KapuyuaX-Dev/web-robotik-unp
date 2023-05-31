import React, { useEffect } from "react";
import "../style/TeamsComponent.css";
import { Container, Row } from "react-bootstrap";
import Aos from "aos";

export function Intro({ imageSrc }) {
  return (
    <>
      <div className="banner mt-5">
        <img
          className="mt-3"
          src={process.env.PUBLIC_URL + imageSrc}
          alt="Banner"
        />
      </div>
    </>
  );
}

export function About({ team, description, logo }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="aboutSection">
      <Container className="fluid d-md-flex justify-content-center">
        <div className="aboutTeam">
          <h3>About {team}</h3>
          <Row className="about-description">
            <div className="kiri">
              <img src={process.env.PUBLIC_URL + logo} alt="logo"></img>
            </div>
            <div className="kanan">
              <p>{description}</p>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export function Video({ videoId }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const uri = `https://www.youtube.com/embed/${videoId}`;
  return (
    <Container className="video-perkembangan">
      <h2 data-aos="fade-right">Video Perkenalan</h2>
      <div className="d-flex justify-content-center mt-5">
        <iframe
          data-aos="fade-left"
          width="560"
          height="315"
          src={uri}
          title="Video Perkenalan"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export function NameCard({ person }) {
  console.log(person);
  return (
    <div className="card">
      <img src="" />
    </div>
  );
}

export function Teams({ member }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <h2 data-aos="fade-right">Our Teamate</h2>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div>
          <h3>Advisor</h3>
        </div>
        <div>
          <h3>Leader</h3>
          <NameCard person={member.Leader} />
        </div>
      </div>
    </Container>
  );
}
