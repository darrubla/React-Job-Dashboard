import React, { Component } from "react";

import SearchFilterTag from "./SearchFilterTag";
import "../assets/styles/components/Navbar.scss";

class SearchFilter extends Component {
  render() {
    return (
      <nav className="header__navbar">
        <ul>
          <div className="navbar__tagFilter">
            <li>
              <SearchFilterTag title="Fronted" />
            </li>
            <li>
              <SearchFilterTag title="CSS" />
            </li>
            <li>
              <SearchFilterTag title="JavaScript" />
            </li>
          </div>
          <li className="header__navbar-clearButton">Clear</li>
        </ul>
      </nav>
    );
  }
}

export default SearchFilter;
