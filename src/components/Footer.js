import React from "react";
import "./compocss/Footer.css";

export default function Footer() {
  return (
    <>
      <footer class="footer section">
        <div class="footer__container container grid">
          <div class="footer__content">
            <h3 class="footer__title">Our information</h3>

            <ul class="footer__list">
              <li>50234 Bonn Germany</li>
              <li>Straße Straße 6023</li>
              <li>9283-9273-20101</li>
            </ul>
          </div>
          <div class="footer__content">
            <h3 class="footer__title">About Us</h3>

            <ul class="footer__links">
              <li>
                <a href="#" class="footer__link">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  All rights reserved
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Product</h3>

            <ul class="footer__links">
              <li>
                <a href="#" class="footer__link">
                  Red pullovers
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Green pullovers
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Summer style
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Best collection
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Social</h3>

            <ul class="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="bx bxl-facebook"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="bx bxl-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="bx bxl-instagram"></i>
              </a>
            </ul>
          </div>
        </div>

        <span class="footer__copy">&#169; Kode49 all rights</span>
      </footer>
    </>
  );
}
