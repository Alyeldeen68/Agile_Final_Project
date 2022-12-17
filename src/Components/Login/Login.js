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
import { setCredintials } from "../../Redux/loginReducer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    axios
      .post("https://dawi.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        console.log("");
        setRes(response);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // const handleResponse = () => {
  //   res.data == "Invalid user credentials!"
  //     ? alert("Wrong email or passoword")
  //     : dispatch(setCredintials(res.data));
  // };
  return (
    <div className="main-login">
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
  );
};
export default Login;
