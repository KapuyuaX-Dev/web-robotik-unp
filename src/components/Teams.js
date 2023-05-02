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
              <Link to="/KRAI">
                <img src={process.env.PUBLIC_URL + "/image/krai.png"}></img>
              </Link>
              <h3 className="mt-3">Do'a Mande</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <Link to="/KRSBI">
                <img src={process.env.PUBLIC_URL + "/image/krsbi.png"}></img>
              </Link>
              <h3 className="mt-3">Al-Fath</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <Link to="/KRSTI">
                <img src={process.env.PUBLIC_URL + "/image/krsti.png"}></img>
              </Link>
              <h3 className="mt-3">Al-A'raf</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <Link to="/KRSRI">
                <img src={process.env.PUBLIC_URL + "/image/krsri.png"}></img>
              </Link>
              <h3 className="mt-3">Al-Ankabut</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <Link data-aos="fade-up" to="/KRTMI">
                <img src={process.env.PUBLIC_URL + "/image/krtmi.png"}></img>
              </Link>
              <h3 className="mt-3">Artscitech</h3>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="team-image d-flex flex-column">
              <Link data-aos="fade-up" to="/KRTI">
                <img src={process.env.PUBLIC_URL + "/image/krti.png"}></img>
              </Link>
              <h3 className="mt-3">Kuau King</h3>
            </div>
          </div>
        </Container>
      </Container>
      <br></br>
    </div>
  );
}

export default Teams;
