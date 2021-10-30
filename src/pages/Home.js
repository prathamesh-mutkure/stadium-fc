import React from "react";
import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home d-flex align-items-center">
      <div className="container">
        <Row xs={1} lg={2}>
          <Col xs={{ order: "last" }} lg={{ order: "first" }}>
            <img src="./assets/images/football-bg.png" alt="football" />
          </Col>
          <Col
            xs={{ order: "first" }}
            lg={{ order: "last" }}
            className="wrapper my-auto"
          >
            <h1 className="text-center mb-5">FIFA 2021</h1>
            <SearchBar />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
