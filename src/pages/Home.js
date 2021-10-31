import React from "react";
import "../styles/Home.css";
import SearchBar from "../components/home/SearchBar";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home d-flex align-items-center">
      <Container>
        <Row xs={1} lg={2}>
          <Col xs={{ order: "last" }} lg={{ order: "first" }}>
            <img src="./assets/images/football-bg.png" alt="football" />
          </Col>
          <Col
            xs={{ order: "first" }}
            lg={{ order: "last" }}
            className="wrapper my-auto"
          >
            <h1 className="text-center">
              FIFA<span>21</span>
            </h1>
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
