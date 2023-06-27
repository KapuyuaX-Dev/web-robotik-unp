import React, { useContext, useEffect, useState } from "react";
import Construction from "../components/Construction";
import { useParams } from "react-router-dom";
import { NavigationBar } from "../components/PageNavbar";
import { Container } from "react-bootstrap";
import { Ring } from "react-awesome-spinners";
import { NewsContext } from "../Context";
import { NewsContent } from "../components/NewsComponent";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrolltoTop";

function NewsArticle() {
  const { id } = useParams();
  const { news } = useContext(NewsContext);
  const article = news.find((article) => article.id === parseInt(id));
  document.title = "Robotik UNP";

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
      <NavigationBar color={true} page={"news"} />
      <section className="m-lg--5 bg-secondary bg-gradient">
        <Container>
          <ScrollToTop />
          <NewsContent
            id={article.id}
            description={article.text}
            title={article.title}
            date={article.date}
            article={article.article}
            imagePath={article.image}
            news={news}
            captions={article.captions}
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default NewsArticle;
