import React from "react";
import { withRouter } from "react-router-dom";

const PlayerSearchItem = ({ player, index, history }) => {
  return (
    <div
      className="search-item"
      onClick={() => {
        history.push("/player/" + index);
      }}
    >
      <p className="name">
        {player.Name}, <span>{player.Nationality}</span>
      </p>
      <p className="club">{player.Club}</p>
    </div>
  );
};

export default withRouter(PlayerSearchItem);
