import React from "react";
import "./compocss/Story.css";
import homeimage from "../assets/img/feature2.png";

export default function Story() {
  return (
    <>
      <section className="story section container">
        <div className="story__container grid">
          <div className="story__data">
            <h2 className="section__title story__section-title">Our Story</h2>

            <h1 className="story__title">
              Inspirational Watch of <br /> this year
            </h1>

            <p className="story__description">
              The latest and modern watches of this year, is available in
              various presentations in this store, discover them now.
            </p>

            <a href="#" className="button button--small">
              Discover
            </a>
          </div>

          <div className="story__images">
            <img src={homeimage} alt="" className="story__img" />
            <div className="story__square"></div>
          </div>
        </div>
      </section>
    </>
  );
}
