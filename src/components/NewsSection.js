import React, { useContext, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "../style/News.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../Context";

function NewsSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const { news } = useContext(NewsContext);
  const displayedNews = news.slice(-5).reverse();
  return (
    <div className="news">
      <Container>
        <h2>NEWS</h2>
        <div className="d-flex justify-items-center news-item align-items-center flex-wrap gap-2">
          {displayedNews.map((news, i) => (
            <Card key={i}>
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <p className="mt-2 text-muted fs-6 fw-light">{news.date}</p>
                <Card.Text>{news.text}</Card.Text>
                <Button
                  className="float-end"
                  onClick={() => navigate(`/news/${news.id}`)}
                >
                  Read more
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      <Container className="d-flex align-items-center justify-content-end">
        <div className="more" onClick={() => navigate("/news/all")}>
          More News→
        </div>
      </Container>
    </div>
  );
}

export default NewsSection;
