import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../style/newsComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import Calendar from "react-calendar";
import "../style/Calendar.css";
import { Link, useNavigate } from "react-router-dom";
import { TypingAnimation } from "./TypingAnimation";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactPaginate from "react-paginate";

function NewsBanner({ imagePath, captions }) {
  return (
    <div className="newsBanner d-flex">
      <figure>
        <img
          className="mt-3"
          src={process.env.PUBLIC_URL + imagePath}
          alt="image"
        />
        <figcaption>{"sumber:" + captions}</figcaption>
      </figure>
    </div>
  );
}

function ShareButton({ description, title, id }) {
  return (
    <div className="d-flex flex-wrap mt-4 justify-content-end gap-2 align-items-center">
      <div className="fw-bold">SHARE :</div>
      <FacebookShareButton
        url={"http://robotik.pkm.unp.ac.id/news/" + id}
        quote={description}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={"http://robotik.pkm.unp.ac.id/news/" + id}
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton
        url={"http://robotik.pkm.unp.ac.id/news/" + id}
        title={title}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TelegramShareButton
        url={"http://robotik.pkm.unp.ac.id/news/" + id}
        title={title}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <LineShareButton
        url={"http://robotik.pkm.unp.ac.id/news/" + id}
        title={title}
      >
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
}

export function NewsContent({
  id,
  title,
  description,
  date,
  imagePath,
  captions,
  article,
  news,
}) {
  const displayedNews = news.slice(-5).reverse();
  const navigate = useNavigate();
  console.log(news.length - 1);

  return (
    <div>
      <Container className="newsContent mt-5">
        <div className="LeftSide mb-4 ">
          <h2 id="top">{title}</h2>
          <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faClock} style={{ color: "#808080" }} />
            <h6>{date}</h6>
          </div>
          <NewsBanner imagePath={imagePath} captions={captions} />
          <div
            className="news-article mt-3"
            dangerouslySetInnerHTML={{ __html: article }}
          />
          <div className="navigation d-flex justify-content-between mt-3">
            <a
              className="prev"
              href={id - 1 < 0 ? `/news/${id}` : `/news/${id - 1}`}
            >
              <div className="mx-3 mt-1 fs-6 fw-bold">Previous</div>
              <div className="navTitle mx-3">
                {id - 1 < 0 ? "" : news[id - 1].title}
              </div>
            </a>
            <a
              className="next"
              href={
                id + 1 > news.length - 1 ? `/news/${id}` : `/news/${id + 1}`
              }
            >
              <div className="mx-3 mt-1 fs-6 fw-bold">Next</div>
              <div className="navTitle mx-3">
                {id + 1 > news.length - 1 ? "" : news[id + 1].title}
              </div>
            </a>
          </div>
          <ShareButton id={id} description={description} title={title} />
        </div>
        <div className="RightSide mt-5">
          <h5 className="mt-3">Recent Post</h5>
          <div className="recent-post my-3">
            {displayedNews.map((news, i) => (
              <div key={i} className="d-flex flex-column mb-3">
                <a href={`/news/${news.id}`} style={{ textDecoration: "none" }}>
                  {news.title}
                </a>
                <div>{news.date}</div>
              </div>
            ))}
          </div>
          <Calendar className="my-5" />
        </div>
      </Container>
    </div>
  );
}

function NewsCard({ item }) {
  return (
    <>
      {item.map((item, i) => (
        <div className="newsCard border-top border-bottom d-flex justify-content-start align-items-center gap-3">
          <img src={process.env.PUBLIC_URL + item.image}></img>
          <div className="d-flex flex-column">
            <div className="title mt-3">
              <Link
                to={`/news/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {item.title}
              </Link>
            </div>
            <div className="date text-muted">{item.date}</div>
            <div className="desc d-inline-block mb-3">{item.text}</div>
          </div>
        </div>
      ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <NewsCard item={currentItems} />
      <div className="d-flex justify-content-center mt-3">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export function NewsPageComponent({ news }) {
  const navigate = useNavigate();
  const newsReversed = news
    .slice(0)
    .reverse()
    .map((element) => {
      return element;
    });
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNews = newsReversed.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const titles = news
    .slice(-3)
    .reverse()
    .map((item) => {
      return item.title;
    });

  const carouselItems = news
    .slice(-3)
    .reverse()
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: item.image,
      };
    });
  return (
    <div>
      <Container className="mt-5 pt-3">
        <div className="head ">
          <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            autoplay={true}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
          >
            {carouselItems.map((item, i) => (
              <div key={i} className="d-flex carousel-items">
                <img key={i} src={process.env.PUBLIC_URL + item.image} />
                <div
                  className="title"
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <TypingAnimation texts={titles} />
        <Container className="newsContent">
          <div className="LeftSide mb-4">
            <div className="d-md-flex justify-content-between align-items-start">
              <h5>Recent Post</h5>
              <Form>
                <Form.Group className="mb-3" controlId="seacrch bar">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchInputChanges}
                  />
                </Form.Group>
              </Form>
            </div>
            <PaginatedItems itemsPerPage={10} items={filteredNews} />
          </div>
          <div className="RightSide mt-5">
            <Calendar className="mb-5" />
          </div>
        </Container>
      </Container>
    </div>
  );
}
