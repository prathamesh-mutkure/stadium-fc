import React from "react";

const PlayerSearchItem = ({ player }) => {
  return (
    <div className="search-item">
      <p className="name">
        {player.Name}, <span>{player.Nationality}</span>
      </p>
      <p className="club">{player.Club}</p>
    </div>
  );
};

export default PlayerSearchItem;
