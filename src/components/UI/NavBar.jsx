import React from "react";
import SearchInput from "./SearchInput";
import "./Navbar.css";

const NavBar = (props) => {
  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <div className="text">Visual Quest</div>
        <div className="search-box">
          <SearchInput onSearch={props.onSearch}/>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
