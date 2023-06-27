import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/notfound.css";
import { NavigationBar } from "../components/PageNavbar";
import Footer from "../components/Footer";
function NotFound() {
  return (
    <>
      <NavigationBar />
      <div className="not-found">
        <div className="central-body">
          <img
            className="image-404"
            src="http://devanswer.com/codes/files/404.svg"
            width="300px"
          ></img>
          <a href="/" className="btn-go-home">
            GO BACK HOME
          </a>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="http://devanswer.com/codes/files/rocket.svg"
            width="40px"
          />
          <div className="earth-moon" />
          <img
            className="object_earth"
            src="http://devanswer.com/codes/files/earth.svg"
            width="100px"
          />
          <img
            className="object_moon"
            src="http://devanswer.com/codes/files/moon.svg"
            width="80px"
          />
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="http://devanswer.com/codes/files/astronaut.svg"
              width="140px"
            />
          </div>
        </div>
        <div>
          <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
