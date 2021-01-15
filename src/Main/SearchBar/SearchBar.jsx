import React from "react";
import "./SearchBar.css";
import search_icon from "../../assets/magnify.png";

function SearchBar({ setQuery, query, showArchived, setShowArchived }) {
  return (
    <div className="bg-white raised">
      <div className="container pad-default pad-h flex-center justify-between">
        <div className="input-container">
          <input
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="icon">
            <img src={search_icon} alt="search icon" style={{ width: 20 }} />
          </span>
        </div>

        <label className="check-container">
          Show archived{" "}
          <input
            type="checkbox"
            onChange={(e) => setShowArchived(e.target.checked)}
            checked={showArchived}
          />
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
