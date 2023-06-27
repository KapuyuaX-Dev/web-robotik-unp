import React, { useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { About, Intro, Teams, Video } from "../components/TeamComponen";
import { Ring } from "react-awesome-spinners";
import Footer from "../components/Footer";
import axios, { Axios } from "axios";
import ScrollToTop from "../components/ScrolltoTop";

const baseUrl = "http://robotik.pkm.unp.ac.id/api/data/teams.php?team=vtol";

function Vtol() {
  const [content, setContent] = useState({
    about: {
      team: "Kuau King VTOL",
      logo: "/image/krti.png",
      description:
        "Kuau King berdiri pada tahun 2018 bertujuan untuk melakukan penelitian serta pengembangan dibidang aero Khususnya Unmanned Aerial Vehicle (UAV) atau pesawat tanpa awak di lingkungan Universitas Negeri Padang. Kegiatan lain dari tim ini adalah mengikuti perlombaan Kontes Robot Terbang Indonesia(KRTI).",
      banner: "/image/bg/VTOL.png",
    },
    video: {
      id: "BoBDYisSaQk",
    },
    teams: {
      Advisor: [
        {
          name: "Dr. Yasdinul Huda, S.Pd, M.T",
          department: "Electronics Eng.",
        },
      ],

      Leader: {
        name: "Nadillah Lovella",
        department: "Electrical Eng.",
        image: "/image/vtol/3.png",
      },
      Member: [
        {
          role: "Programer",
          member: [
            {
              name: "Widya Afriza",
              department: "Electronics Eng.",
              image: "/image/vtol/1.png",
              social: [
                {
                  type: "instagram",
                  username: "https://www.instagram.com/wdyfrz__",
                },
              ],
            },
          ],
        },
        {
          role: "Navigation",
          member: [
            {
              name: "Nadillah Lovella",
              department: "Electrical Eng.",
              image: "/image/vtol/3.png",
            },
          ],
        },
        {
          role: "Mechanics",
          member: [
            {
              name: "Ikhwan Gufra",
              department: "Electronics Eng.",
              image: "/image/vtol/2.png",
            },
          ],
        },
      ],
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
      <div className="d-flex flex-column align-items-center justify-content-center my-5 vh-100">
        <Ring />
        <h3>Loading</h3>
      </div>
    );
  }
  return (
    <div>
      <ScrollToTop />
      <NavigationBar color={color} page={"vtol"} />
      <Intro imageSrc={content.about.banner} />
      <section id="about">
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

export default Vtol;
