import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import examPortalImage from "../assets/mindsparkLogo2.png";
import { RiEyeLine } from "react-icons/ri";
import "./HomePage.css";

function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    standard: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const localJwt = (j) => {
    localStorage.setItem("jwt", j);
  };

  const handleStartTest = async () => {
    console.log(formData);

    if (
      !formData.name ||
      !formData.school ||
      !formData.standard ||
      !formData.email ||
      !formData.password
    ) {
      setErrorMessage(
        "Please fill in all the fields before starting the test."
      );
    } else {
      try {
        const response = await axios.post(
          `${serverUrl}/users/check`,
          formData
        );

        if (response.status === 200) {
          console.log(response.data);
          localJwt(response.data.token);
          navigate("/test", { state: formData });
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <img
            src={examPortalImage}
            alt="Exam Portal"
            className="img-fluid mb-4"
            style={{ maxWidth: "300px" }}
          />
          <h1 className="card-title">Welcome to the Exam Portal</h1>
          <p className="card-text">Prepare yourself for the upcoming test!</p>
          <div className="mt-4">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="school"
                value={formData.school}
                placeholder="School/College Name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="standard"
                value={formData.standard}
                placeholder="Standard/Year"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Password"
                className="form-control"
                onChange={handleChange}
              />
              <span
                className={`password-toggle-icon ${
                  showPassword ? "visible" : ""
                }`}
                onClick={() => setShowPassword(!showPassword)}
              >
                <RiEyeLine />
              </span>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleStartTest}>
            Start Test
          </button>
          {errorMessage && <p className="alert-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;