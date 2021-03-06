import React, { useState } from "react";
import PlayerSearchItem from "./PlayerSearchItem";
import { searchPlayer } from "../../data/datahelper";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleQuery = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchResult(searchPlayer(newQuery.trim().toLowerCase()));
  };

  return (
    <div className={"search-input " + (query && "active")}>
      <input
        type="text"
        placeholder="Search player name, country, club or age"
        name="query"
        value={query}
        onChange={handleQuery}
        autoComplete="off"
      />

      <div className="autocom-box">
        {searchResult.map((player) => (
          <PlayerSearchItem key={player.id} player={player} />
        ))}
      </div>

      {/* <div className="icon"></div> */}
    </div>
  );
};

export default SearchBar;
