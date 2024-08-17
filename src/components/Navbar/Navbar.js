// src/components/Navbar.js

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">YourLogo</a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li className="dropdown">
          <a href="#categories">Categories</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#category1">Category 1</a>
            </li>
            <li>
              <a href="#category2">Category 2</a>
            </li>
            <li>
              <a href="#category3">Category 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <button className="create-event-button">Create an Event</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
