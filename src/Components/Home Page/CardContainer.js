import React from "react";
import "./CardContainer.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
const CardContainer = ({ img, title, id }) => {
  const isDoctor = useSelector((state) => state.login.isDoctor);
  const [editItem, setEditItem] = useState(false);
  const [editName, setEditName] = useState("");
  const [showDataModal, setShowDataModal] = useState(false);
  const itemId = id;
  const handleEdit = () => {
    setShowDataModal(true);
    isDoctor
      ? axios
          .post("https://dawi.onrender.com/edit-medicine", {
            name: "New name",
            id: itemId,
            expiryDate: "2000-5-7",
          })
          .then((response) => console.log(response))
          .catch((err) => console.log(err))
      : axios
          .post("https://dawi.onrender.com/edit-medicine", {
            name: "New name",
            id: itemId,
            expiryDate: "2000-5-7",
          })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card className="main-card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
          <Button onClick={handleEdit} variant="primary">
            Edit
          </Button>
        </Card.Body>
      </Card>

      <Modal backdrop="static" show={showDataModal}>
        <Modal.Header closeButton onClick={() => setShowDataModal(false)}>
          {editItem && <Modal.Title>Edit item</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardContainer;
