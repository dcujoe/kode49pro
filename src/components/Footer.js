import React from "react";
import "./compocss/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <h3 className="footer__title">Our information</h3>

            <ul className="footer__list">
              <li>50234 Bonn Germany</li>
              <li>Straße Straße 6023</li>
              <li>9283-9273-20101</li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">About Us</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" classNameName="footer__link">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  All rights reserved
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Product</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Red pullovers
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Green pullovers
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Summer style
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Best collection
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Social</h3>

            <ul className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-facebook"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                classNameName="footer__social-link">
                <i classNameName="bx bxl-instagram"></i>
              </a>
            </ul>
          </div>
        </div>

        <span className="footer__copy">&#169; Kode49 all rights reserved</span>
      </footer>
    </>
  );
}
