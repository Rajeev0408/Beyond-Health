import React from 'react'
import logo from '../Images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="nav">
  <div className="nav-title">
    <img src={logo} width="200px" height="70px" alt="Alpha97 Logo" /> 
  </div>
  <ul className="nav-head">
    <li className="nav-item">
      <a href="#home">Home</a>
    </li>
    <li className="nav-item">
      <a href="#about">About Us</a>
    </li>
    <li className="nav-item">
      <a href="#course">Help</a>
    </li>
    <li className="nav-item">
      <a href="#blog">Blog</a>
    </li>
    <li className="nav-item">
      <a href="#contact">Contact Us</a>
    </li>
  </ul>
  <button className="btn btn-primary">
    <p className="btn-text">Sign Up</p>
    <span className="square" />
  </button>
  <button className="btn btn-primary">
    <p className="btn-text">Login</p>
    <span className="square" />
  </button>
  <button className="nav-toggle-btn">
    <span className="one" />
    <span className="two" />
    <span className="three" />
  </button>
</nav>

    </>
  )
}

export default Header