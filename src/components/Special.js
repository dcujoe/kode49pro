import React from "react";
import homeimage from "../assets/img/feature2.png";

export default function Special() {
  return (
    <>
      <section class="featured section container" id="featured">
        <h2 class="section__title">Specials</h2>

        <div class="featured__container grid">
          <article class="featured__card">
            <span class="featured__tag">Sale</span>

            <img src={homeimage} alt="" class="featured__img" />

            <div class="featured__data">
              <h3 class="featured__title">Jazzmaster</h3>
              <span class="featured__price">$1050</span>
            </div>

            <button class="button featured__button">ADD TO CART</button>
          </article>

          <article class="featured__card">
            <span class="featured__tag">Sale</span>

            <img src={homeimage} alt="" class="featured__img" />

            <div class="featured__data">
              <h3 class="featured__title">Ingersoll</h3>
              <span class="featured__price">$250</span>
            </div>

            <button class="button featured__button">ADD TO CART</button>
          </article>

          <article class="featured__card">
            <span class="featured__tag">Sale</span>

            <img src={homeimage} alt="" class="featured__img" />

            <div class="featured__data">
              <h3 class="featured__title">Rose gold</h3>
              <span class="featured__price">$890</span>
            </div>

            <button class="button featured__button">ADD TO CART</button>
          </article>
        </div>
      </section>
    </>
  );
}
