import "./App.css";
import { Route, Routes } from "react-router-dom";
import Carousel from "./Components/Landing Page/Carousel";
import NavBar from "./Components/Landing Page/NavBar";
import Main from "./Components/Landing Page/Main";
import Footer from "./Components/Landing Page/Footer";
import DoctorForm from "./Components/Forms/DoctorForm";
import Login from "./Components/Login/Login";
import HomePage from "./Components/Home Page/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar /> <Carousel /> <Main /> <Footer />
            </div>
          }
        />
        <Route path="/doctor-form" element={<DoctorForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
