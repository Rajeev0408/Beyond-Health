import React from 'react';
import logo from '../Images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="grid-item">
          <div className="footer-logo">
            <img src={logo} width="310px" alt="logo" />
          </div>
          <p className="footer-text">
            Lorem ipsum dolor sit, amet consectetur adipiscing elit, nam rhoncus.
            In parturient scelerisque curabitur vivamus metus, justo inceptos proin
            fermentum ornare, eros condimentum tortor mus.
          </p>
        </div>

        <ul className="grid-item">
          <h4 className="item-heading">Our Links</h4>
          <li className="list-item">
            <a href="#home">Home</a>
          </li>

          <li className="list-item">
            <a href="#about">About Us</a>
          </li>

          <li className="list-item">
            <a href="#course">Support</a>
          </li>

          <li className="list-item">
            <a href="#blog">Blog</a>
          </li>

          <li className="list-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <ul className="grid-item">
          <h4 className="item-heading">Other Links</h4>
          <li className="list-item">
            <a href="#">Doctors</a>
          </li>

          <li className="list-item">
            <a href="#">FAQs</a>
          </li>

          <li className="list-item">
            <a href="#">Event</a>
          </li>

          <li className="list-item">
            <a href="#">Chat Support</a>
          </li>

          <li className="list-item">
            <a href="#">Term &amp; Condition</a>
          </li>
        </ul>

        <div className="grid-item">
          <h4 className="item-heading">Contact Now</h4>
          <div className="wrapper">
            <input type="text" name="subscribe" placeholder="Email Address" />
            <button className="send-btn">
              <ion-icon name="paper-plane" role="img" aria-label="paper plane"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2024-25 Beyond Health . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;