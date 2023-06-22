import React, { useContext, useEffect, useState } from "react";
import Construction from "../components/Construction";
import { NavigationBar } from "../components/PageNavbar";
import { Ring } from "react-awesome-spinners";
import Footer from "../components/Footer";
import { NewsPageComponent } from "../components/NewsComponent";
import { NewsContext } from "../Context";

function News() {
  document.title = "Robotik UNP";
  const { news } = useContext(NewsContext);

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
      <NavigationBar color={true} />
      <section className="m-lg--5 bg-secondary bg-gradient">
        <NewsPageComponent news={news} />
      </section>
      <Footer />
    </div>
  );
}

export default News;
