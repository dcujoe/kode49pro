import React from "react";
import "./compocss/Story.css";
import homeimage from "../assets/img/food4.jpeg";

export default function Story() {
  return (
    <>
      <section className="story section container" id="story">
        <div className="story__container grid">
          <div className="story__data">
            <h2 className="section__title story__section-title">Our Story</h2>
            <h1 className="story__title">
              Inspirational Agro Start up of the year
            </h1>

            <p className="story__description">
              Get the best farm produce from anywhere in the world with just a click of a button
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
