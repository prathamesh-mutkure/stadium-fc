import React from "react";
import "../styles/App.css";
import { getPlayerByIndex } from "../data/datahelper";
import RadarChart from "../components/RadarChart";

const Profile = ({ match }) => {
  const player = getPlayerByIndex(match.params.index);

  return (
    <div className="container">
      <h1>{player.Name}</h1>

      <div style={{ height: "400px", width: "600px" }}>
        <RadarChart player={player} />
      </div>
    </div>
  );
};

export default Profile;
