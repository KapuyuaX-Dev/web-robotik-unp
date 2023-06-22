import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Teams.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Teams() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="teams" className="teams">
      <Container>
        <h2 data-aos="fade-up">TEAMS</h2>
        <Container className="d-md-flex justify-content-center align-items-center flex-wrap text-center logo">
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <a href="/Teams/KRAI">
                <img src={process.env.PUBLIC_URL + "/image/krai.png"}></img>
              </a>
              <h3 className="mt-3">Do'a Mande</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <a href="/Teams/KRSBI-B">
                <img src={process.env.PUBLIC_URL + "/image/krsbi.png"}></img>
              </a>
              <h3 className="mt-3">Al-Fath</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <a href="/Teams/KRSTI">
                <img src={process.env.PUBLIC_URL + "/image/krsti.png"}></img>
              </a>
              <h3 className="mt-3">Al-A'raf</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <a href="/Teams/KRSRI">
                <img src={process.env.PUBLIC_URL + "/image/krsri.png"}></img>
              </a>
              <h3 className="mt-3">Al-Ankabut</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <a data-aos="fade-up" href="/Teams/KRTMI">
                <img src={process.env.PUBLIC_URL + "/image/krtmi.png"}></img>
              </a>
              <h3 className="mt-3">Artscitech</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <a data-aos="fade-up" href="/Teams/RP">
                <img src={process.env.PUBLIC_URL + "/image/krti.png"}></img>
              </a>
              <h3 className="mt-3">Kuau King RP</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <a data-aos="fade-up" href="/Teams/VTOL">
                <img src={process.env.PUBLIC_URL + "/image/krti.png"}></img>
              </a>
              <h3 className="mt-3">Kuau King VTOL</h3>
            </div>
          </div>
        </Container>
      </Container>
      <br></br>
    </div>
  );
}

export default Teams;
