import React from "react";
import "./compocss/newsletter.css";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter section container">
        <div className="newsletter__bg grid">
          <div>
            <h2>Subscribe to our Newsletter</h2>
            <p className="newsletter__description">
              Don't miss out on our updates on food deals. Subscribe to our
              newsletter to get the latest updates, gifts and coupons.
            </p>
          </div>

          <form action="" className="newsletter__subscribe">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="newsletter__input"
            />
            <button type="submit" className="button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
