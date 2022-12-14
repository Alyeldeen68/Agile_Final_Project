import React, { useEffect, useState } from "react";
import "./HomePage.css";
import * as FaIcons from "react-icons/fa";
import BuildIcon from "@mui/icons-material/Build";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Item from "../Home Page/Item.js";
import { motion } from "framer-motion";
import { Dashboard } from "@mui/icons-material";
import Form from "react-bootstrap/Form";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { RouterLink } from "../../upYouGo/Styling";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { signOut, userData } from "../../Redux/userReducer";
import Modal from "react-bootstrap/Modal";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CardContainer from "./CardContainer";
const HomePage = () => {
  const [open, setOpen] = useState(window.innerWidth > 600 ? true : false);
  const sideContainerVariable = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };
  const sideBarVariable = {
    true: {},
    false: {
      width: "4rem",
      transition: {
        delay: 0.4,
      },
      flex: "0.2",
    },
  };
  const profileVariables = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "4rem",
    },
  };
  const imgVariable = {
    true: {
      width: "100px",
    },
    false: {
      width: "50px",
    },
  };
  const sideBarData = {
    true: {},
    false: {
      display: "none",
    },
  };
  const menuVariable = {
    true: {},
    false: {
      justifyContent: "center",
      marginLeft: "0.75rem",
    },
  };
  const mainVariable = {
    true: {},
    false: {
      flex: "15",
      transition: {
        delay: 0.5,
      },
    },
  };
  const handleToggle = () => {
    setOpen(!open);
    dispatch(signOut);
  };
  const [showModal, setShowModal] = useState(true);
  const isDoctor = useSelector((state) => state.login.isDoctor);
  const isLogged = useSelector((state) => state.login.isLoggedIn);
  var accessToken = useSelector((state) => state.login.userName.accessToken);
  const header = {
    authorization: accessToken,
    "content-type": "text/json",
  };
  const role = isDoctor ? "Doctor" : "Pharmacist";
  const [doctorServices, setDoctorServices] = useState(isDoctor ? true : false);
  const [showDataModal, setShowDataModal] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [additemName, setAddItemName] = useState("");
  const [addItemDate, setAddItemDate] = useState("");
  const [addReservation, setAddReservation] = useState("");
  const [addReservationDate, setAddReservationDate] = useState("");
  const userdata = useSelector((state) => state.user.data);
  const userID = useSelector((state) => state.login.userID);
  const userPhone = useSelector((state) => state.login.userPhone);
  const userEmail = useSelector((state) => state.login.userEmail);
  const userFirstName = useSelector((state) => state.login.userFirstName);
  const dispatch = useDispatch();
  const isPharmacist = useSelector((state) => state.login.isPharmacist);
  useEffect(() => {
    // fetch("/get-medicines", {
    //   method: "POST",
    //   body: JSON.stringify(header),
    // })
    //   .then((res) => res.json())
    //   .then((d) => {
    //     console.log(d);
    //     dispatch(userData(d.data));
    //   })
    //   .catch((err) => console.log(err));

    isPharmacist
      ? axios
          .post(
            "https://dawi.onrender.com/get-medicines",
            {},
            {
              headers: header,
            }
          )
          .then((response) => {
            console.log(response.data);
            dispatch(userData(response.data));
          })
          .catch((err) => console.log(err))
      : axios
          .post(
            "https://dawi.onrender.com/get-reservations",
            {},
            {
              headers: header,
            }
          )
          .then((response) => {
            console.log(response.data);
            dispatch(userData(response.data));
          })
          .catch((err) => console.log(err));
  }, []);

  const sideBarImg = isPharmacist
    ? "https://static.vecteezy.com/system/resources/previews/006/174/506/original/female-pharmacist-doing-her-job-dispensing-medicine-free-vector.jpg"
    : "https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg?w=2000";

  const reservationData = {
    specialty: "Aly",
    dateAndTime: "2000-12-24",
  };
  const handleAddItem = () => {
    setShowDataModal(true);
    setAddItem(true);
    axios
      .post("https://dawi.onrender.com/add-medicine-2", {
        id: userID,
        expiryDate: addItemDate,
        name: additemName,
      })
      .then((response) => {
        console.log("Hello");
        dispatch(userData(response.data));
      })
      .catch((err) => console.log(err));
    setShowDataModal(false);
    setShowAddItemModal(true);
    // ******************************  Add Reservation shaghalaa *****************************
    // axios
    //   .post("https://dawi.onrender.com/add-reservation", {
    //     specialty: "Aly",
    //     dateAndTime: "2000-12-24",
    //     doctorID: userID,
    //     doctorName: userFirstName,
    //   })
    //   .then((response) => {
    //     console.log("Hello");
    //     console.log(response.data);
    //   });
    //   .catch((err) => console.log(err));
    // *************************Fetch***************************************
    // fetch("/add-reservation", {
    //   method: "POST",
    //   headers: {
    //     authorization: accessToken,
    //     "content,-type": "text/json",
    //   },
    //   body: JSON.stringify(reservationData),
    // })
    //   .then((response) => response.json())
    //   .then((d) => console.log(d))
    //   .catch((err) => console.log(err));
    // *********************************** Axios method 2 **************************************
    // axios("https://dawi.onrender.com/add-reservation", {
    //   method: "post",
    //   timeout: 5000,
    //   headers: {
    //     authorization: accessToken,
    //     "content-type": "text/json",
    //   },
    //   data: {
    //     specialty: "Aly",
    //     dateAndTime: "2000-12-24",
    //   },
    // })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };

  const handleAddReservation = () => {
    setShowDataModal(true);
    axios
      .post("https://dawi.onrender.com/add-reservation", {
        specialty: "Aly",
        dateAndTime: "2000-12-24",
        doctorID: userID,
        doctorName: userFirstName,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(userData(response.data));
      })
      .catch((err) => console.log(err));
    setShowDataModal(false);
  };
  // const handleEditItem = () => {
  //   setShowDataModal(true);
  //   setEditItem(true);
  //   axios
  //     .post("https://dawi.onrender.com/edit-medicine", {
  //       name: "New name",
  //       id: userID,
  //       expiryDate: "2000-5-7",
  //     })
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // };
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#008000" }}>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Logged in sucessfuly </Modal.Body>
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

      <Modal show={showAddItemModal} onHide={() => setShowAddItemModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#008000" }}>
            Successfully added item
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#008000" }}
            onClick={() => setShowAddItemModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {isLogged && (
        <div className="main-dashboard">
          <motion.div
            variants={sideContainerVariable}
            initial={`${open}`}
            animate={`${open}`}
            className="side-bar-container"
          >
            <motion.div
              initial={`${open}`}
              animate={`${open}`}
              variants={sideBarVariable}
              className="side-bar"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "30%",
                  backdropFilter: "blur(3.5px)",
                  webkitBackdropFilter: "blur(3.5px)",
                  border: "1px solid rgba(255,255,255,0.18)",

                  transition: {
                    delay: 0.2,
                    duration: 0.4,
                  },
                }}
                variants={menuVariable}
                onClick={handleToggle}
                className="side-bar-header-icon"
              >
                <MenuSharpIcon />
              </motion.div>
              <motion.div
                layout
                initial={`${open}`}
                animate={`${open}`}
                variables={profileVariables}
                className="side-bar-header"
                transition={{ duration: 0.4 }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0px 8px 32px rgba(31, 38, 135, 0.37)",
                  borderRadius: "1rem 1rem 1rem 1rem",
                  backdroFilter: "blur(5.5px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  webkitBackdropFilter: "blur(5.5px)",
                  cursor: "pointer",
                }}
              >
                <RouterLink to="/">
                  <motion.img
                    variants={imgVariable}
                    onClick={() => dispatch(signOut())}
                    className="side-bar-header-logo"
                    src={sideBarImg}
                  />
                </RouterLink>
              </motion.div>
              <div className="groups">
                <div className="group">
                  <h3 className="group-heading">
                    <motion.div
                      animate={{
                        opacity: open ? 1 : 0,
                        height: open ? "auto" : 0,
                      }}
                    >
                      <BuildIcon /> Services
                    </motion.div>
                  </h3>
                  <Item icon={<Dashboard />} name="Dashboard" />

                  {doctorServices ? (
                    <button onClick={handleAddReservation}>
                      <Item
                        icon={<LocalHospitalIcon />}
                        name="Add reservation"
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setShowDataModal(true);
                        setAddItem(true);
                      }}
                    >
                      <Item icon={<AddIcon />} name="Add item" />
                    </button>
                  )}
                  <div className="group-main">
                    <h4></h4>
                  </div>
                </div>
                <div className="group perosonal">
                  <h3 className="group-heading">
                    <motion.div
                      animate={{
                        opacity: open ? 1 : 0,
                        height: open ? "auto" : 0,
                      }}
                    >
                      <ContactPageIcon className="group-heading-icon" />{" "}
                      Personal Data
                    </motion.div>
                  </h3>
                  <motion.div
                    animate={{
                      display: open ? "block" : "hidden",
                    }}
                  >
                    <div className="personal-data">
                      <p>Name : {userFirstName}</p>
                      <p>Email : {userEmail} </p>
                      <p>Phone Number : {userPhone}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={mainVariable}
            initial={`${open}`}
            animate={`${open}`}
            className="main"
          >
            <h2>Hello, {role} </h2>
            <div className="card-container">
              {isPharmacist
                ? userdata.map((item) =>
                    item.map((i) => (
                      <CardContainer
                        img={i.img}
                        title={i.name}
                        id={i._id}
                        date={i.expiryDate}
                      />
                    ))
                  )
                : userdata.map((item) =>
                    item.map((i) => (
                      <CardContainer
                        img={i.img}
                        title={i.specialty}
                        id={i._id}
                        date={i.dateAndTime}
                      />
                    ))
                  )}
            </div>
          </motion.div>
        </div>
      )}
      {/*
       **************************************************** MODALS ******************************* */}
      <Modal backdrop="static" show={showDataModal}>
        <Modal.Header closeButton onClick={() => setShowDataModal(false)}>
          {isPharmacist && <Modal.Title>Add item</Modal.Title>}
          {isDoctor && <Modal.Title>Add reservation</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {isPharmacist ? (
                <>
                  <Form.Label>Medicine name</Form.Label>
                  <Form.Control
                    placeholder="Name"
                    autoFocus
                    onChange={(e) => setAddItemName(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <Form.Label>Reservation Type</Form.Label>
                  <Form.Control
                    placeholder="Reservation"
                    autoFocus
                    onChange={(e) => setAddReservation(e.target.value)}
                  />
                </>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {isPharmacist ? (
                <>
                  {" "}
                  <Form.Label>Expiry date</Form.Label>
                  <br />
                  <small>Format : yy-mm-dd</small>
                  <Form.Control
                    placeholder="Date"
                    autoFocus
                    onChange={(e) => setAddItemDate(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <Form.Label>Date of reservation</Form.Label>
                  <br />
                  <small>Format : yy-mm-dd</small>
                  <Form.Control
                    placeholder="Date"
                    autoFocus
                    onChange={(e) => setAddReservationDate(e.target.value)}
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
            <Button variant="primary" onClick={handleAddItem}>
              Save Changes
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAddReservation}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomePage;
