import React from "react";
import "CardContainer.css";
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
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardContainer;
