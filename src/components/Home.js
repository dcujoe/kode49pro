import React from "react";
import "./compocss/Home.css";
import homeimage from "../assets/img/feature2.png";

export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container container grid">
          <div class="home__img-bg">
            <img src={homeimage} alt="" class="home__img" />
          </div>
          

          <div className="home__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="home__social-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="home__social-link"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="home__social-link"
            >
              Instagram
            </a>
          </div>

          <div className="home__data">
            
            <div className="home__btns">
              <a href="#" className="button button--gray button--small">
                Discover
              </a>

              <button className="button home__button">ADD TO CART</button>
            </div>
            <h1 className="home__title">
              WELCOME TO THE FUTURE
              <br /> OF AGRICULTURE
            </h1>
            <p className="home__description">
             Buy food in large quantities from all over the world directly from farmers
            </p>
            <button className="home__price">
              <a>Best food deals</a>
            </button>

          </div>
        </div>
      </section>
    </>
  );
}
