import React, { useState } from "react";
import PlayerSearchItem from "./PlayerSearchItem";
import { getAllPlayers, searchPlayer } from "../data/datahelper";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleQuery = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchResult(searchPlayer(newQuery.trim().toLowerCase()));
  };

  return (
    <div className="wrapper">
      <div className={"search-input " + (query && "active")}>
        <a href="" target="_blank" hidden></a>

        <input
          type="text"
          placeholder="Search Player"
          name="query"
          value={query}
          onChange={handleQuery}
        />

        <div className="autocom-box">
          {searchResult.map((player, index) => (
            <PlayerSearchItem key={index} player={player} index={index} />
          ))}
        </div>

        {/* <div className="icon"></div> */}
      </div>
    </div>
  );
};

export default SearchBar;
