import React from "react";
import "./compocss/Story.css";
import storyimage from "../img/food9.jpeg";

export default function Story() {
  return (
    <>
      <section className="story section container" id="story">
        <div className="story__container grid">
          <div className="story__data">
            <h2 className="section__title story__section-title">Our Story</h2>
            <h1 className="story__title">
              Inspirational Agro Start-up of the year
            </h1>

            <blockquote className="story__description">
              Small beginnings with passion, can birth great things
              <br /> From a small concept in University of Bonn
              <br /> To creating a new Ecosystem
              <br /> Agricultural Commerce
            </blockquote>
            <a href="#" className="button button--small">
              Discover new food possibilities
            </a>
          </div>

          <div className="story__images">
            <img src={storyimage} alt="" className="story__img" />
            <div className="story__square"></div>
          </div>
        </div>
      </section>
    </>
  );
}
