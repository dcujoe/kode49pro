import React from "react";
import "./compocss/variety.css";
import homeimage from "../assets/img/food7.jpeg";

export default function Variety() {
  return (
    <div>
      <section className="testimonial section container grid" id="testimonial">
        <div className="testimonial__container grid">
          <div className="swiper testimonial-swiper">
            <div className="swiper-wrapper">
              <div className="testimonial__card swiper-slide">
                <div className="testimonial__quote">
                  <i className="bx bxs-quote-alt-left"></i>
                </div>
                <p className="testimonial__description">
                  Best food varieties from all over the world. Order in bulk or
                  in small. We deliver!
                </p>
                <h3 className="testimonial__date">March 27. 2021</h3>

                <div className="testimonial__perfil">
                  <img
                    src={homeimage}
                    alt=""
                    className="testimonial__perfil-img"
                  />

                  <div className="testimonial__perfil-data">
                    <span className="testimonial__perfil-name">Lee Doe</span>
                    <span className="testimonial__perfil-detail">
                      Director of a company
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial__card swiper-slide">
                <div className="testimonial__quote">
                  <i className="bx bxs-quote-alt-left"></i>
                </div>
                <p className="testimonial__description">
                  Best pullovers in Germany for ladies. Can be used at all times
                  of the year. We have different collections you can choose from
                  Summer, Winter, Sprint and Autumn. Get your orders done now.
                </p>
                <h3 className="testimonial__date">March 27. 2021</h3>

                <div className="testimonial__perfil">
                  <img
                    src="assets/img/testimonial2.jpg"
                    alt=""
                    className="testimonial__perfil-img"
                  />

                  <div className="testimonial__perfil-data">
                    <span className="testimonial__perfil-name">
                      Samantha Mey
                    </span>
                    <span className="testimonial__perfil-detail">
                      Director of a company
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial__card swiper-slide">
                <div className="testimonial__quote">
                  <i className="bx bxs-quote-alt-left"></i>
                </div>
                <p className="testimonial__description">
                  They are the best watches that one acquires, also they are
                  always with the latest news and trends, with a very
                  comfortable price and especially with the attention you
                  receive, they are always attentive to your questions.
                </p>
                <h3 className="testimonial__date">March 27. 2021</h3>

                <div className="testimonial__perfil">
                  <img
                    src="assets/img/testimonial3.jpg"
                    alt=""
                    className="testimonial__perfil-img"
                  />

                  <div className="testimonial__perfil-data">
                    <span className="testimonial__perfil-name">Raul Zaman</span>
                    <span className="testimonial__perfil-detail">
                      Director of a company
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-button-next">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="bx bx-left-arrow-alt"></i>
            </div>
          </div>

          <div className="testimonial__images">
            <div className="testimonial__square"></div>
            <img src={homeimage} alt="" className="testimonial__img" />
          </div>
        </div>
      </section>
    </div>
  );
}
