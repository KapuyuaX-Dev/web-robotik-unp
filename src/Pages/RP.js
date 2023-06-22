import React, { useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { About, Intro, Teams, Video } from "../components/TeamComponen";
import { Ring } from "react-awesome-spinners";
import Footer from "../components/Footer";
import axios from "axios";
import ScrollToTop from "../components/ScrolltoTop";

const baseUrl = "http://robotik.pkm.unp.ac.id/api/data/teams.php?team=rp";

function Rp() {
  const [content, setContent] = useState({
    about: {
      team: "Kuau King Racing Plane",
      logo: "/image/krti.png",
      description:
        "<p>Kuau King berdiri pada tahun 2018 bertujuan untuk melakukan penelitian serta pengembangan dibidang aero Khususnya <b>Unmanned Aerial Vehicle </b> (UAV) atau pesawat tanpa awak di lingkungan Universitas Negeri Padang. Kegiatan lain dari tim ini adalah mengikuti perlombaan <b> Kontes Robot Terbang Indonesia </b> (KRTI).<br> Adapun pendiri tim ini terdiri dari 5 orang anggota Unit Kegiatan Robotika UNP. Tim ini memulai kiprahnya di perlombaan <b>Kontes Robot Terbang Indonesia</b> (KRTI) dari tahun 2019. Namun pada tahun tersebut, tim <b>Kuau King</b> masih belum berhasil di tahap seleksi video.  Dari ketidakberhasilan tersebut, tim mengasah kemampuan di bidang robot terbang hingga pada tahun 2020 untuk pertama kalinya, Kuau King membawa nama <b>Universitas Negeri Padang</b> berlaga di ajang KRTI 2020 divisi Racing Plane. Sampai sekarang, tim ini masih terus mengembangkan kemampuannya. Dengan harapan dapat mengharumkan nama kampus baik di tingkat nasional maupun internasional.</p>",
      banner: "/image/bg/RP.png",
    },
    video: {
      id: "nfnMc-JT6ng",
    },
    teams: {
      Advisor: [
        {
          name: "Dr. Ir. Remon Lapisa, S.T.,M.T.,M.se",
          department: "Mechanical Eng.",
          image: "",
        },
      ],
      Leader: {
        name: "Muhammad Farhan",
        department: "Mechanical Eng.",
        image: "/image/rp/My project (2).png",
        social: [
          {
            type: "instagram",
            username: "https://www.instagram.com/frhan_id",
          },
        ],
      },
      Member: [
        {
          role: "Pilot",
          member: [
            {
              name: "Muhammad Farhan",
              department: "Mechanical Eng.",
              image: "/image/rp/My project (2).png",
              social: [
                {
                  type: "instagram",
                  username: "https://www.instagram.com/frhan_id",
                },
              ],
            },
            {
              name: "Carlen Muhammad H.",
              department: "Mechanical Eng.",
              image: "/image/rp/My project (1).png",
              social: [
                {
                  type: "instagram",
                  username: "https://www.instagram.com/carlen_m_hendra",
                },
              ],
            },
          ],
        },
        {
          role: "Manufacturing",
          member: [
            {
              name: "Muhammad Farhan",
              department: "Mechanical Eng.",
              image: "/image/rp/My project (2).png",
              social: [
                {
                  type: "instagram",
                  username: "https://www.instagram.com/frhan_id",
                },
              ],
            },
            {
              name: "Carlen Muhammad H.",
              department: "Mechanical Eng.",
              image: "/image/rp/My project (1).png",
              social: [
                {
                  type: "instagram",
                  username: "https://www.instagram.com/carlen_m_hendra",
                },
              ],
            },
          ],
        },
        {
          role: "System",
          member: [
            {
              name: "Delila Agustin T.",
              department: "Electrical Eng.",
              image: "/image/rp/My project (3).png",
              social: [],
            },
            {
              name: "Rahma Chalid Pergia",
              department: "Electrical Eng.",
              image: "/image/rp/My project.png",
              social: [],
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
      <NavigationBar color={color} />
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

export default Rp;
