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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4%" }}
              >
                <div>
                  <Card.Title style={{ textAlign: "center" }}>
                    Doctor
                  </Card.Title>
                </div>
                <div>
                  <Card.Text>
                    If you're a doctor and willing to help people in need, don't
                    hesitate and join us right now. It is our pleasure to have
                    you on board!
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4%" }}
              >
                <div>
                  <Card.Title style={{ textAlign: "center" }}>
                    Pharmacist
                  </Card.Title>
                </div>
                <div>
                  <Card.Text>
                    To all pharmacists out there, share your spare and unneeded
                    medicines, supplies and help people who really need them,
                    join us and register us now!
                  </Card.Text>
                </div>
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
                The first neutral Egyptian charitable organization specialized
                in combating hunger and funded by zakat funds, alms and
                donations that are professionally transferred into services and
                programs to provide healthy food and a safe life opportunity for
                the beneficiaries, whose impact on their lives is measured in a
                scientific way. Through 15 years of professional work, we have
                become experts in the Arab region in the issue of combating
                hunger, which is the most important issue concerned with human
                development throughout the entire world.
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
                Now Resala has more than 60 branches spread throughout Egypt,
                and more than 200,000 volunteers volunteer every year, serving
                millions of Egyptians in about 30 volunteer activities,
                including caring for orphans, serving the elderly, sheltering
                street children, serving the blind, deaf, and people with
                special needs, and lessons Free education, illiteracy
                eradication, used clothing exhibitions, blood donation, computer
                and language education, human development, the Holy Qur'an, aid
                for the needy, charity convoys for poor villages, medical
                convoys, addiction treatment, feeding the poor, creating
                productive projects for the poor, and building mosques and
                schools. And fulfilling the aspirations of cancer children,
                raising moral awareness for young people, cleaning streets and
                parks, spreading happiness among people, and caring for animals.
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
                Baheya's story has started when Mrs. Baheya Wahby, a lady from a
                prominent Egyptian family, was diagnosed with cancer back in
                1990s. Because she went through the same experience she felt for
                the fighters and especially the less privileged women, being
                unable to afford the treatment, she wished to help fight the
                disease and poverty. After losing her life in the battle, her
                family then decided to convert her house into a charity hospital
                supporting women, specialized in early detection and treatment
                for breast cancer free of charge. Baheya foundation was
                established in 2015
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
