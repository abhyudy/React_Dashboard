import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchQuery}`);
  };

  const handleUsernameClick = () => {
    alert("Username button clicked!");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyApp</a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <button className="navbar-alert-btn" onClick={handleUsernameClick}>
        Username
      </button>
    </nav>
  );
};

export default Navbar;
