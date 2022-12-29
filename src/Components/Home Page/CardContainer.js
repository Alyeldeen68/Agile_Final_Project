import React from "react";
import "./CardContainer.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardContainer = ({ img, title }) => {
  return (
    <div>
      <Card className="main-card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardContainer;
