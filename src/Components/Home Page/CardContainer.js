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
  const [editDate, setEditDate] = useState("");
  const [editReservation, setEditReservation] = useState("");
  const [editReservationDate, setEditReservationDate] = useState("");
  const [showDataModal, setShowDataModal] = useState(false);
  const dispatch = useDispatch();
  var accessToken = useSelector((state) => state.login.userName.accessToken);
  const Date = date.slice(0, 10);
  const itemId = id;
  const [showModal, setShowModal] = useState(false);
  const handleEditItem = () => {
    axios
      .post("https://dawi.onrender.com/edit-medicine", {
        name: editName,
        id: itemId,
        expiryDate: editDate,
        pharmacistID: userID,
      })
      .then((response) => dispatch(userData(response.data)))
      .catch((err) => console.log(err));
    setShowDataModal(false);
  };

  const handleEditReservation = () => {
    axios
      .post("https://dawi.onrender.com/edit-reservation", {
        specialty: editReservation,
        id: itemId,
        dateAndTime: editReservationDate,
        doctorID: userID,
      })
      .then((response) => dispatch(userData(response.data)))
      .catch((err) => console.log(err));
    setShowDataModal(false);
  };

  const handleItemDelete = () => {
    axios
      .post("https://dawi.onrender.com/delete-medicine", {
        id: itemId,
        pharmacistID: userID,
      })
      .then((response) => dispatch(userData(response.data)))
      .catch((err) => console.log(err));
    setShowModal(true);
  };

  const handleReservationDelete = () => {
    axios
      .post("https://dawi.onrender.com/delete-reservation", {
        id: itemId,
        doctorID: userID,
      })
      .then((response) => dispatch(userData(response.data)))
      .catch((err) => console.log(err));

    setShowModal(true);
  };

  return (
    <div>
      <Card className="main-card" style={{ width: "18rem" }}>
        {isPharmacist ? (
          <Card.Img
            variant="top"
            src="https://static.vecteezy.com/system/resources/previews/004/892/155/original/cute-pharmacist-carrying-drug-logo-vector.jpg"
          />
        ) : (
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
          />
        )}
        <Card.Body>
          <div className="card-body">
            <div>
              <i> {title} </i>
            </div>
            <div>
              <i> {Date} </i>
            </div>
          </div>
        </Card.Body>

        <div className="btn-container">
          <Button
            style={{ textAlign: "center" }}
            onClick={() => setShowDataModal(true)}
            variant="primary"
          >
            Edit
          </Button>
          {isPharmacist ? (
            <Button onClick={handleItemDelete} variant="primary">
              Delete
            </Button>
          ) : (
            <Button onClick={handleReservationDelete} variant="primary">
              Delete
            </Button>
          )}
        </div>
      </Card>

      <Modal backdrop="static" show={showDataModal}>
        <Modal.Header closeButton onClick={() => setShowDataModal(false)}>
          {isPharmacist && <Modal.Title>Edit item</Modal.Title>}
          {isDoctor && <Modal.Title>Edit Reservation</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            {isPharmacist ? (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Item name</Form.Label>
                <Form.Control
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Item name"
                  autoFocus
                />
              </Form.Group>
            ) : (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Reservation type</Form.Label>
                <Form.Control
                  onChange={(e) => setEditReservation(e.target.value)}
                  placeholder="Reservation type"
                  autoFocus
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {isPharmacist ? (
                <>
                  <Form.Label>Expiry date</Form.Label>
                  <br />
                  <small>Format : yy-mm-dd</small>

                  <Form.Control
                    onChange={(e) => setEditDate(e.target.value)}
                    placeholder="Date"
                    autoFocus
                  />
                </>
              ) : (
                <>
                  <Form.Label>Date of reservation</Form.Label>
                  <br />
                  <small>Format : yy-mm-dd</small>

                  <Form.Control
                    onChange={(e) => setEditReservationDate(e.target.value)}
                    placeholder="Date"
                    autoFocus
                  />
                </>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDataModal(false)}>
            Close
          </Button>

          {isPharmacist ? (
            <Button variant="primary" onClick={handleEditItem}>
              Save Changes
            </Button>
          ) : (
            <Button variant="primary" onClick={handleEditReservation}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#008000" }}>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Successfully deleted</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#008000" }}
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardContainer;
