import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState([]);
  const [formdata, setFormData] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/get")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("❌ Fetch error:", error);
        alert("Failed to fetch user data.");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = () => {
    const user = data.find((u) => u.name === formdata.name);

    if (!user) {
      alert("Invalid username");
      return;
    }

    if (formdata.password.trim() !== user.password.trim()) {
      alert("Invalid password");
      return;
    }

    alert("Login successful ✅");
    navigate("/home");
  };

  return (
  <div className="login-page">
    <div className="login-container">
      <h2>Login</h2>
      <p className="subtitle">Welcome back! Please login to continue.</p>

      <label htmlFor="username">Username:</label>
         <input
        type="text"
        id="username"
        name="name"
        placeholder="Enter your username"
        value={formdata.name}
        onChange={handleChange}
      />

        <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={formdata.password}
        onChange={handleChange}
      />

         <button className="login-button" onClick={login}>
        Login
      </button>

         <div className="register-redirect">
        <p>
          Not registered yet?
          <Link to="/register" className="register-link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  </div>
);
};

export default Login;
