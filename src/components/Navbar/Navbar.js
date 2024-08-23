import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="breadcrumb">Home &gt; Dashboard V2</span>
      </div>
      <div className="navbar-right">
        <div className="search-bar-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Searching anything..."
            className="search-bar"
          />
        </div>
        <button className="navbar-button">Profile</button>
        <button className="navbar-button">Notifications</button>
      </div>
    </nav>
  );
};

export default Navbar;
