import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Teams from "../components/Teams";
import Galery from "../components/Galery";
import Achievement from "../components/Achievement";
import { Ring } from "react-awesome-spinners";
import axios from "axios";
import { AboutContext } from "../Context";

const baseUrl = "http://robotik.pkm.unp.ac.id/api/data/homepage.php";
function HomePage() {
  const [loading, setLoading] = useState(true);
  const { setAbout } = useContext(AboutContext);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      //console.log(response.data);
      setAbout(response.data);
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
*/
  if (loading) {
    return <div />;
  }

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
      <div>
        <Header />
      </div>
      <div>
        <Home />
        <Teams />
        <Achievement />
        <Galery />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
