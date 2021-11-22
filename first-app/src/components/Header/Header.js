import React from "react";
import "../Header/Header.scss";
function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img className="logo-img" src="./Amazon-logo.png" />
      </div>
      <input className="header-searchBar" type="text" />
    </div>
  );
}

export default Header;
