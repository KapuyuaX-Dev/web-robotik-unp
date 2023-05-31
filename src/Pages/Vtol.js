import React, { useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { About, Intro, Teams, Video } from "../components/TeamComponen";
import { Ring } from "react-awesome-spinners";
import Footer from "../components/Footer";

function Vtol() {
  const [content, setContent] = useState({
    about: {
      team: "Kuau King VTOL",
      logo: "/image/krti.png",
      description:
        "Kuau King berdiri pada tahun 2018 bertujuan untuk melakukan penelitian serta pengembangan dibidang aero Khususnya Unmanned Aerial Vehicle (UAV) atau pesawat tanpa awak di lingkungan Universitas Negeri Padang. Kegiatan lain dari tim ini adalah mengikuti perlombaan Kontes Robot Terbang Indonesia(KRTI).",
    },
    video: {
      id: "BoBDYisSaQk",
    },
    teams: {
      Advisor: [
        {
          name: "Dr. Yasdinul Huda, S.Pd, M.T",
          department: "Electronics Eng.",
        },
      ],
      Leader: {
        name: "Nadillah Lovella",
        department: "Electrical Eng.",
        image: "/image/vtol/My project (1).png",
      },
      Member: [
        {
          role: "Programer",
          member: [
            {
              name: "Widya Afriza",
              department: "Electronics Eng.",
              image: "/image/vtol/My project.png",
            },
          ],
        },
        {
          role: "Navigation",
          member: [
            {
              name: "Nadillah Lovella",
              department: "Electrical Eng.",
              image: "/image/vtol/My project (1).png",
            },
          ],
        },
        {
          role: "Mechanics",
          member: [
            {
              name: "Ikhwan Gufra",
              department: "Electronics Eng.",
              image: "/image/vtol/My project (2).png",
            },
          ],
        },
      ],
    },
  });

  document.title = content.about.team;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

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
      <NavigationBar />
      <Intro />
      <section id="about">
        <About
          team={content.about.team}
          logo={content.about.logo}
          description={content.about.description}
        />
      </section>
      <section id="video-perkembangan">
        <Video videoId={content.video.id} />
      </section>
      <section id="teams">
        <Teams member={content.teams} />
      </section>
      <Footer />
    </div>
  );
}

export default Vtol;
