import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="breadcrumb">Home &gt; Dashboard V2</span>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Searching anything..."
          className="search-bar"
        />
        <button className="navbar-button">Profile</button>
        <button className="navbar-button">Notifications</button>
      </div>
    </nav>
  );
};

export default Navbar;
