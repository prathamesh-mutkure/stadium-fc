import React, { useState } from "react";
import { getAllPlayers, searchPlayer } from "../data/datahelper";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div class="wrapper">
      <div class="search-input">
        <a href="" target="_blank" hidden></a>
        <input
          type="text"
          placeholder="Type to search.."
          name="query"
          value={query}
          onChange={(q) => setQuery(q.target.value)}
        />
        <div class="autocom-box">
          {searchPlayer(query).map((player) => {
            return <i>{player.Name + " " + player.Club}</i>;
          })}
        </div>
        <div class="icon"></div>
      </div>
    </div>
  );
};

export default SearchBar;
