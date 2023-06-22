import React, { useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { About, Intro, Teams, Video } from "../components/TeamComponen";
import { Container } from "react-bootstrap";
import { Ring } from "react-awesome-spinners";
import axios from "axios";
import ScrollToTop from "../components/ScrolltoTop";
import Footer from "../components/Footer";

const baseUrl = "http://robotik.pkm.unp.ac.id/api/data/teams.php?team=krsbi-b";

function KRSBI() {
  const [content, setContent] = useState({
    about: {
      banner: "",
      team: "",
      logo: "",
      description: "",
    },
    video: { id: "" },
    teams: {
      Advisor: [],
      Leader: {},
      Member: [],
    },
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      //console.log(response.data);
      setContent(response.data);
    });

    setLoading(false);
  }, []);

  document.title = content.about.team;

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <Ring />
        <h3>Loading</h3>
      </div>
    );
  }
  return (
    <div>
      <ScrollToTop />
      <NavigationBar color={color} />
      <section>
        <Intro imageSrc={content.about.banner} />
        <About
          team={content.about.team}
          logo={content.about.logo}
          description={content.about.description}
        />
      </section>
      {content.video.id.length > 0 && (
        <section id="video-perkembangan">
          <Video videoId={content.video.id} />
        </section>
      )}
      <section id="teams">
        <Teams member={content.teams} />
      </section>
      <Footer />
    </div>
  );
}

export default KRSBI;
