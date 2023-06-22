import React, { useEffect } from "react";
import "../style/TeamsComponent.css";
import { Container, Row } from "react-bootstrap";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function Intro({ imageSrc }) {
  return (
    <>
      <div className="banner">
        <img src={process.env.PUBLIC_URL + imageSrc} alt="Banner" />
      </div>
    </>
  );
}

export function About({ team, description, logo }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutSection">
      <Container className="fluid d-md-flex justify-content-center">
        <div data-aos="fade-up" className="aboutTeam">
          <h3>About {team}</h3>
          <Row className="about-description">
            <div className="kiri">
              <img src={process.env.PUBLIC_URL + logo} alt="logo"></img>
            </div>
            <div className="kanan">
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
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
      <h2 data-aos="fade-right">Introductory Video</h2>
      <div data-aos="zoom-in" className="d-flex justify-content-center mt-5">
        <iframe
          data-aos="zoom-in"
          width="560"
          height="315"
          src={uri}
          title="Video Perkenalan"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export function NameCard({ person }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="team-card">
      <div className="kiri">
        <img
          data-aos="fade-left"
          src={process.env.PUBLIC_URL + person.image}
          height={300}
          alt="photo"
        />
      </div>
      <div data-aos="fade-right" className="d-flex align-items-end kanan">
        <div className="d-flex justify-content-center flex-column gap">
          <h4>{person.name}</h4>
          <h5>{person.department}</h5>
          <div className="d-flex m-3 gap-3">
            {person.hasOwnProperty("social") && (
              <>
                {person.social.map((social, i) => (
                  <a key={i} href={social.username} target="_blank">
                    {social.type === "instagram" && (
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    )}
                    {social.type === "linkedIn" && (
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    )}
                    {social.type === "github" && (
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    )}
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
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
        {member.Advisor.length > 0 && (
          <>
            <h3 data-aos="fade-up">Advisor</h3>
            <div>
              {member.Advisor.map((advisor, i) => (
                <NameCard key={i} person={advisor} />
              ))}
            </div>
          </>
        )}
        <h3 data-aos="fade-up">Leader</h3>
        <NameCard person={member.Leader} />
        {member.Member.map((member, i) => (
          <>
            <h3 data-aos="fade-up" key={i}>
              {member.role}
            </h3>
            <div className="d-flex justify-content-evenly flex-wrap">
              {member.member.map((person, i) => (
                <NameCard key={i} person={person} />
              ))}
            </div>
          </>
        ))}
      </div>
    </Container>
  );
}
