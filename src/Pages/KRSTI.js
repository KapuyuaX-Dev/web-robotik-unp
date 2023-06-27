import React, { useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { About, Intro } from "../components/TeamComponen";
import { Ring } from "react-awesome-spinners";
import axios from "axios";

const baseUrl = "http://robotik.pkm.unp.ac.id/api/data/teams.php?team=krsti";

function KRSTI() {
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
      <NavigationBar color={color} page={"krsti"} />
      <Intro imageSrc={content.about.banner} />
      <section>
        <About
          team={content.about.team}
          logo={content.about.logo}
          description={content.about.description}
        />
        <Construction />
      </section>
    </div>
  );
}

export default KRSTI;
