import react, { useState } from "react";
import "./DoctorForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../Imgs/charity.png";
import { Link, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { back } from "../../Redux/signUpReducer";
import Modal from "react-bootstrap/Modal";
import { RouterLink } from "../../upYouGo/Styling.js";
import { success } from "../../Redux/signUpReducer";
import GoToTop from "../../upYouGo/GoToTop.js";
const DoctorForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [service, setService] = useState("");
  const [photo, setPhoto] = useState("");
  const [base64, setBase64] = useState("");
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const koko = 8;
  const dispatch = useDispatch();
  const type = useSelector((state) => state.signUp.isDoctor);
  const navigate = useNavigate();

  const role = type == true ? "Doctor" : "Pharmacist";
  // const handlePhoto = async (e) => {
  //   const file = e.target.files[0];
  //   var base = await convertBase64(file);
  //   base = base.split(",")[1];
  //   console.log(base);
  //   setBase64(base);
  // };
  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     if (file) {
  //       fileReader.readAsDataURL(file);
  //     }
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };
  const handleSubmit = async (event) => {
    setIsLoading(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    await axios
      .post("https://dawi.onrender.com/registration", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phone,
        password: password,
        role: role,
        image: base64,
      })
      .then((response) => {
        console.log(response);
        dispatch(success());
        console.log(response);
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };
  return (
    <div id="form" className="main-form">
      <RouterLink to="/" onClick={() => dispatch(back())}>
        <img src={logo} />
      </RouterLink>
      {type == true ? <h2>Hello, Doctor </h2> : <h2>Hello, Pharmacist </h2>}

      <div className="form-container">
        <Form validated={true} noValidate>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          {isLoading ? (
            <Button onClick={handleSubmit} variant="primary" disabled>
              Loading...
            </Button>
          ) : (
            <Button onClick={handleSubmit} variant="primary">
              Submit
            </Button>
          )}
        </Form>
      </div>

      <GoToTop />
    </div>
  );
};

export default DoctorForm;
