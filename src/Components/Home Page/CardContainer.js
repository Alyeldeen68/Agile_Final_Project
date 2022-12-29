import React from "react";
import "./CardContainer.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { userData } from "../../Redux/userReducer";
import { useEffect, useState } from "react";
import axios from "axios";
const CardContainer = ({ img, title, id, date }) => {
  const isDoctor = useSelector((state) => state.login.isDoctor);
  const isPharmacist = useSelector((state) => state.login.isPharmacist);
  const userID = useSelector((state) => state.login.userID);
  const [editName, setEditName] = useState("");
  const [showDataModal, setShowDataModal] = useState(false);
  const dispatch = useDispatch();
  var accessToken = useSelector((state) => state.login.userName.accessToken);
  const header = {
    authorization: accessToken,
    "content-type": "text/json",
  };
  const itemId = id;
  const handleEdit = () => {
    axios
      .post("https://dawi.onrender.com/edit-medicine", {
        name: editName,
        id: itemId,
        expiryDate: "2000-5-7",
        pharmacistID: userID,
      })
      .then((response) => dispatch(userData(response.data)))
      .catch((err) => console.log(err));
    setShowDataModal(false);
  };
  return (
    <div>
      <Card className="main-card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
        />
        <Card.Body>
          <div className="card-body">
            <Card.Body>
              <div>
                <i> {title} </i>
              </div>
              <div>
                <i> {date} </i>
              </div>
            </Card.Body>
          </div>
          <hr />
          <div className="btn-container">
            <Button
              style={{ textAlign: "center" }}
              onClick={() => setShowDataModal(true)}
              variant="primary"
            >
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal backdrop="static" show={showDataModal}>
        <Modal.Header closeButton onClick={() => setShowDataModal(false)}>
          {isPharmacist && <Modal.Title>Edit item</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {isPharmacist && <Form.Label>Item name</Form.Label>}
              <Form.Control
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Item name"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDataModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardContainer;
