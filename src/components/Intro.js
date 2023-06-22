import React from "react";
import "../style/Intro.css";

function Intro({ img }) {
  return (
    <div className="banner">
      <img src={process.env.PUBLIC_URL + img} />
    </div>
  );
}

export default Intro;
