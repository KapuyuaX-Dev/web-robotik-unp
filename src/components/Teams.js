import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Teams.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AboutContext } from "../Context";

function Teams() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { about } = useContext(AboutContext);

  return (
    <div className="teams">
      <Container>
        <h2 data-aos="fade-up">TEAMS</h2>
        <Container className="d-md-flex justify-content-center align-items-center flex-wrap text-center logo">
          {about.teams.map((teams, i) => (
            <div key={i} data-aos="flip-right">
              <div className="team-image d-flex flex-column">
                <a href={teams.uri}>
                  <img src={process.env.PUBLIC_URL + teams.logo}></img>
                </a>
                <h3 className="mt-3">{teams.nama}</h3>
              </div>
            </div>
          ))}
        </Container>
      </Container>
      <br></br>
    </div>
  );
}

export default Teams;
