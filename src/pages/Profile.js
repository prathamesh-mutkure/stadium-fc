import React from "react";
import "../styles/App.css";
import { getPlayerByIndex } from "../data/datahelper";
import RadarChart from "../components/RadarChart";
import StarRating from "../components/StarRating";
import { Row, Col, Container, Button } from "react-bootstrap";

const Profile = ({ match }) => {
  const player = getPlayerByIndex(match.params.index);

  return (
    <Container>
      <Row className="text-center header">
        <h1>{player.Name}</h1>
      </Row>

      <Row>
        <Col className="chart">
          <RadarChart player={player} />
        </Col>

        <Col className="player-info">
          <Row>
            <div className="m-0 p-0">
              <p>
                Overall <span>{player["Overall"]}</span>
              </p>
              <p>
                Overall <span>{player["Overall"] + 4}</span>
              </p>
            </div>
          </Row>

          <Row className="player-details">
            <li>
              Age <span>{player["Age"]}</span>
            </li>
            <li>
              Height <span>{player["Height"]}</span>
            </li>
            <li>
              Weight <span>{player["Weight"]}</span>
            </li>
            <li>
              Preffered Foot <span>{player["Preferred Foot"]}</span>
            </li>
            <li>
              Position <span>{player["Position"]}</span>
            </li>
            <li>
              Jersey Number <span>{player["Jersey Number"]}</span>
            </li>
            <li>
              Weak Foot <StarRating count={5} />
            </li>
            <li>
              Skill Moves <StarRating count={4} />
            </li>
            <li>
              Work Rate (Attack - Defense) <span>{player["Work Rate"]}</span>
            </li>
            <li>
              International Reputation <StarRating count={5} />
            </li>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
