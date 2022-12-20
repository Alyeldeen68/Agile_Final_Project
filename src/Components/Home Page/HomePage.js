import React, { useEffect, useState } from "react";
import "./HomePage.css";
import * as FaIcons from "react-icons/fa";
import BuildIcon from "@mui/icons-material/Build";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Item from "../Home Page/Item.js";
import { motion } from "framer-motion";
import { Dashboard } from "@mui/icons-material";
import { RouterLink } from "../../upYouGo/Styling";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import axios from "axios";
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
  };
  const [showModal, setShowModal] = useState(true);
  const isDoctor = useSelector((state) => state.login.isDoctor);
  const isLogged = useSelector((state) => state.login.isLoggedIn);
  const accessToken = useSelector((state) => state.login.userName.accessToken);
  const role = isDoctor ? "Doctor" : "Pharmacist";

  useEffect(() => {
    accessToken;
    axios
      .get("https://dawi.onrender.com/get-medicines", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);
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
                    className="side-bar-header-logo"
                    src="https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg?w=2000"
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
                  <Item icon={<Dashboard />} name="Dashboard" />
                  <Item icon={<Dashboard />} name="Dashboard" />
                  <Item icon={<Dashboard />} name="Dashboard" />
                  <div className="group-main">
                    <h4></h4>
                  </div>
                </div>
                <div className="group">
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
                  <Item icon={<Dashboard />} name="Dashboard" />
                  <Item icon={<Dashboard />} name="Dashboard" />
                  <Item icon={<Dashboard />} name="Dashboard" />
                  <Item icon={<Dashboard />} name="Dashboard" />
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
              <Card className="main-card" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="main-card" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="main-card" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="main-card" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="main-card" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="main-card" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="main-card" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default HomePage;
