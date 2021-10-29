import React from "react";
import "../styles/index.css";
import "../styles/App.css";
import SearchBar from "../components/SearchBar";
import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home d-flex align-items-center">
      <div className="container">
        <Row xs={1} lg={2}>
          <Col xs={{ order: "last" }} lg={{ order: "first" }}>
            <img src="./assets/images/football-bg.png" />
          </Col>
          <Col xs={{ order: "first" }} lg={{ order: "last" }}>
            <h1 className="text-center">FIFA 2021</h1>
            <SearchBar />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
