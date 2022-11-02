import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../Imgs/non-profit-organization.png";
import secondImg from "../../Imgs/help.png";
import thirdImg from "../../Imgs/doctor.png";
import fourthImg from "../../Imgs/pharmacist.png";
const CarouselComponent = () => {
  return (
    <div className="main-carousel">
      <Carousel>
        <Carousel.Item>
          <div className="first-container">
            <div className="first-container-main">
              <h3 className="first-container-text-header">Who are we ?</h3>
              <p className="first-container-text-main">
                A non-profit website that helps connect non-profit organizations
                with people in need
              </p>
            </div>
            <div>
              <img className="first-container-img" src={firstImg} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="second-container">
            <div className="first-container-main">
              <h3 className="first-container-text-header">What do we do ?</h3>
              <p className="first-container-text-main">
                Help people in need get free treatment by connecting them to
                oragnizations that do so
              </p>
            </div>
            <div>
              <img className="first-container-img" src={secondImg} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="second-container">
            <div className="first-container-main">
              <h3 className="first-container-text-header">
                How do we do that ?
              </h3>
              <p className="first-container-text-main">
                By collecting doctor's and pharmacist's information and linking
                them to the non profit organizations
              </p>
            </div>
            <div className="third-container-img">
              <img src={thirdImg} />
              <img src={fourthImg} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
