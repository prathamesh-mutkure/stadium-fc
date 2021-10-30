import React from "react";
import "../styles/Profile.css";
import { getPlayerByIndex } from "../data/datahelper";
import RadarChart from "../components/RadarChart";
import StarRating from "../components/StarRating";
import { Row, Col, Container } from "react-bootstrap";

const Profile = ({ match, history }) => {
  const player = getPlayerByIndex(match.params.index);

  const goHomeTapped = () => {
    history.goBack();
  };

  const helpTapped = () => {};

  return (
    <div className="profile">
      <Container className="text-center text-lg-start">
        <Row className="header">
          <div className="position-absolute">
            <p className="me-5" onClick={goHomeTapped}>
              <i className="fas fa-arrow-left me-2"></i> Home
            </p>
            <p onClick={helpTapped}>
              <i className="fas fa-question me-2"></i> Help
            </p>
          </div>

          <h1 className="">{player.Name}</h1>
        </Row>

        <Row xs={1} lg={2}>
          <Col
            xs={{ order: "last" }}
            lg={{ order: "first" }}
            className="chart d-flex"
          >
            <RadarChart player={player} className="my-auto" />
          </Col>

          <Col
            xs={{ order: "first" }}
            lg={{ order: "last" }}
            className="player-info"
          >
            <div>
              <p>
                Overall <span>{player["Overall"]}</span>
              </p>
              <p>
                Overall <span>{player["Overall"] + 4}</span>
              </p>
            </div>

            <div className="player-details">
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
