import React from "react";
import "./Main.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import doctorImg from "../../Imgs/doctor2.png";
import pharmacistImg from "../../Imgs/pharmacist2.png";
import masrAlKhir from "../../Imgs/Misr-Elkheir-Foundation-Egypt-7932-1489657887-og.jpg";
import resala from "../../Imgs/Resala-Charity-Organization-Egypt-6495-og.jpeg";
import bahya from "../../Imgs/53821554113089.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/signUpReducer";
import { RouterLink } from "../../upYouGo/Styling.js";
import GoToTop from "../../upYouGo/GoToTop.js";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-container">
        <div className="card-container">
          <Card style={{ width: "18rem", borderRadius: "1rem" }}>
            <Card.Img className="card-img" variant="top" src={doctorImg} />
            <Card.Body>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <Card.Title style={{ textAlign: "center" }}>
                    Doctor
                  </Card.Title>
                </div>
                <div>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </div>
                <div>
                  <div className="card-button">
                    <RouterLink to="/doctor-form">
                      <Button
                        onClick={() => {
                          dispatch(signUp("Doctor"));
                        }}
                        variant="primary"
                      >
                        Register
                      </Button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card style={{ width: "18rem", borderRadius: "1rem" }}>
            <Card.Img className="card-img" variant="top" src={pharmacistImg} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Pharmacist
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="card-button">
                <RouterLink to="/doctor-form">
                  <Button
                    onClick={() => {
                      dispatch(signUp("Pharmacist"));
                    }}
                    variant="primary"
                  >
                    Register
                  </Button>
                </RouterLink>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="heading-container">
        <h2>Featured Sponsers</h2>
      </div>
      <div>
        <div className="sponser-card-container">
          <div className="sponsor-card">
            <div className="logo">
              <img src={masrAlKhir} />
            </div>
            <div className="main-text">
              <h3>Masr Al Khair</h3>
              <p className="main-text-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sponser-card-container">
          <div className="sponsor-card">
            <div className="logo">
              <img src={resala} />
            </div>
            <div className="main-text">
              <h3>Resala</h3>
              <p className="main-text-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sponser-card-container">
          <div className="sponsor-card">
            <div className="logo">
              <img src={bahya} />
            </div>
            <div className="main-text">
              <h3>Bahya</h3>
              <p className="main-text-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Main;
