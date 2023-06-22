import React, { useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { About, Intro, Teams, Video } from "../components/TeamComponen";
import { Ring } from "react-awesome-spinners";
import ScrollToTop from "../components/ScrolltoTop";
import Footer from "../components/Footer";
import axios from "axios";

const baseUrl = "http://robotik.pkm.unp.ac.id/api/data/teams.php?team=krai";

function KRAI() {
  const [content, setContent] = useState({
    about: {
      banner: "/image/bg/KRAI.png",
      team: "Do'a Mande",
      logo: "/image/krai.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel varius ipsum. In id libero nulla. Maecenas enim lacus, consectetur ac rutrum sit amet, venenatis nec leo. Nullam tincidunt tempor lectus eget rhoncus. Mauris semper dignissim nulla ut varius. Nulla facilisi. Nunc eget lacus dapibus, ornare orci sit amet, consectetur dui. Curabitur cursus ante enim. Integer vitae bibendum dui. Praesent in tincidunt arcu. Cras mollis vel velit id luctus. Donec malesuada sem sed neque tincidunt, ut commodo elit pulvinar. Cras libero ante, dignissim at gravida sed, imperdiet quis elit. Sed scelerisque arcu non neque rhoncus, vitae ornare metus consectetur. Duis.",
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
      <Intro imageSrc={content.about.banner} />
      <section>
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

export default KRAI;
