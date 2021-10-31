import React from "react";
import { withRouter } from "react-router-dom";

const PlayerSearchItem = ({ player, history }) => {
  return (
    <div
      className="search-item"
      onClick={() => {
        history.push("/player/" + player.id);
      }}
    >
      <p className="name">
        {player.Name}, <span>{player.Nationality}</span>
      </p>
      <p className="club">
        {player.Club} (age {player.Age}){" "}
      </p>
    </div>
  );
};

export default withRouter(PlayerSearchItem);
