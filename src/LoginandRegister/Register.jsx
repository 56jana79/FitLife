import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    otp: "",
  });

  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    if (!formData.mobile.match(/^\d{10}$/)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/send-otp", {
        mobile: formData.mobile,
      });
      alert(`OTP sent to ${formData.mobile}`);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/verify-otp", {
        mobile: formData.mobile,
        otp: formData.otp,
      });
      if (response.status === 200) {
        alert("OTP verified successfully!");
        setIsVerified(true);
      }
    } catch (error) {
      alert("Invalid OTP or verification failed.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify your mobile number with OTP.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    try {
      const payload = {
        name: formData.name,
        password: formData.password,
        mobile: formData.mobile,
      };
      const response = await axios.post(
        "http://localhost:8080/api/register",
        payload
      );
      console.log("✅ Registered:", response.data);
      alert("User registered successfully!");
      window.location.href = "/";
    } catch (error) {
      console.error("❌ Registration error:", error);
      alert("Failed to register user.");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-row">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
          </div>

          <div className="form-row">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
            />
          </div>

          <button
            type="button"
            className="secondary-btn"
            onClick={handleSendOtp}
          >
            Send OTP
          </button>

          <div className="form-row">
            <label>OTP</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
            />
          </div>

          <button
            type="button"
            className="secondary-btn"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>

          <button type="submit" className="primary-btn" disabled={!isVerified}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
