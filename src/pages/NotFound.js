import React from "react";
import "../styles/NotFound.css";
import { Row, Col, Container } from "react-bootstrap";

const NotFount = ({ message = "Page does not exist" }) => {
  return (
    <div className="not-found">
      <Container>
        <h1>Opps, 404 Not Found</h1>
        <p>{message}</p>
      </Container>
    </div>
  );
};

export default NotFount;
