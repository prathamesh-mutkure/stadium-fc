import React from "react";
import "../styles/index.css";
import "../styles/App.css";
import SearchBar from "../components/SearchBar";
import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className=" home">
      <div className="container">
        <Row>
          <Col>
            <Image src="./assets/images/football-bg.png" />
          </Col>
          <Col>
            <SearchBar />
          </Col>
        </Row>

        {/* <h1>Home</h1>

        <SearchBar /> */}
      </div>
    </div>
  );
};

export default Home;
