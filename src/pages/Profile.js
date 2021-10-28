import React from "react";
import "../styles/index.css";
import "../styles/App.css";
import "../styles/Player.css";
import { getPlayerByIndex } from "../data/datahelper";
import RadarChart from "../components/RadarChart";
import StarRating from "../components/StarRating";
import { Row, Col, Container, Button } from "react-bootstrap";

const Profile = ({ match, history }) => {
  const player = getPlayerByIndex(match.params.index);

  const goHomeTapped = () => {
    history.goBack();
    // history.push("/");
  };

  const helpTapped = () => {};

  return (
    <Container>
      <Row className="header">
        <div className="position-absolute text-start">
          <p className="me-5 d-inline" onClick={goHomeTapped}>
            <i className="fas fa-arrow-left me-2"></i> Home
          </p>
          <p className="d-inline" onClick={helpTapped}>
            <i className="fas fa-question me-2"></i>Help
          </p>
        </div>
        <h1>{player.Name}</h1>
      </Row>

      <Row>
        <Col className="chart border-right">
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
