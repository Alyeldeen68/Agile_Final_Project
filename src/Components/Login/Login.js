import react, { useState } from "react";
import "./Login.css";
import angelImg from "../../Imgs/4321520.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import leftButton from "../../Imgs/turn-left.png";
import { RouterLink } from "../../upYouGo/Styling";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { setCredintials } from "../../Redux/loginReducer";
import Modal from "react-bootstrap/Modal";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios
      .post("https://dawi.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data == "Invalid user credentials!") {
          setShowModal(true);
        } else {
          dispatch(setCredintials(response.data));
          navigate("/home-page");
        }
      })
      .catch((err) => console.log(err));
  };

  // const handleResponse = () => {
  //   res.data == "Invalid user credentials!"
  //     ? alert("Wrong email or passoword")
  //     : dispatch(setCredintials(res.data));
  // };
  return (
    <>
      <div className="main-login">
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "#c43939" }}>Failed</Modal.Title>
          </Modal.Header>
          <Modal.Body>Invalid user name or password</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              style={{ backgroundColor: "#c43939" }}
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="login-container">
          <div className="img-container">
            <RouterLink to="/">
              <img className="left-arrow" src={leftButton} />
            </RouterLink>
            <img className="icon-img" src={angelImg} />
          </div>
          <div className="inputs-container">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
