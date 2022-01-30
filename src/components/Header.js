import React from "react";
import Search from "./Search";

function Header({onListingSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onListingSearch={onListingSearch}/>
    </header>
  );
}

export default Header;
