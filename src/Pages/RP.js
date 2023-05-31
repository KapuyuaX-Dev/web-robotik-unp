import React, { useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { About, Intro, Video } from "../components/TeamComponen";
import { Ring } from "react-awesome-spinners";
import Footer from "../components/Footer";

function Rp() {
  const [content, setContent] = useState({
    about: {
      team: "Kuau King Racing Plane",
      logo: "/image/krti.png",
      description:
        "Kuau King berdiri pada tahun 2018 bertujuan untuk melakukan penelitian serta pengembangan dibidang aero Khususnya Unmanned Aerial Vehicle (UAV) atau pesawat tanpa awak di lingkungan Universitas Negeri Padang. Kegiatan lain dari tim ini adalah mengikuti perlombaan Kontes Robot Terbang Indonesia(KRTI).",
    },
    video: {
      id: "nfnMc-JT6ng",
    },
    teams: {
      advisor: [
        {
          name: "Dr. Ir. Remon Lapisa, S.T.,M.T.,M.se",
          department: "Mechanical Eng.",
        },
      ],
      leader: {
        name: "Muhammad Farhan",
        department: "Mechanical Eng.",
      },
      member: [
        {
          role: "Pilot",
          member: [
            {
              name: "Muhammad Farhan",
              department: "Mechanical Eng.",
            },
            {
              name: "Carlen Muhammad Hendra",
              department: "Mechanical Eng.",
            },
          ],
        },
        {
          role: "Manufacturing",
          member: [
            {
              name: "Muhammad Farhan",
              department: "Mechanical Eng.",
            },
            {
              name: "Carlen Muhammad Hendra",
              department: "Mechanical Eng.",
            },
          ],
        },
        {
          role: "System",
          member: [
            {
              name: "Delila Agustin Tinambunan",
              department: "Electrical Eng.",
            },
            {
              name: "Rahma Chalid Pergia",
              department: "Electrical Eng.",
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
      <Footer />
    </div>
  );
}

export default Rp;
