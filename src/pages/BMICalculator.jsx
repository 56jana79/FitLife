import React, { useState } from "react";
import axios from "axios";
import "../pages/Bmi.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [bmiResult, setBmiResult] = useState(null);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const heightInMeters = formData.height / 100;
    const bmi = (formData.weight / (heightInMeters * heightInMeters)).toFixed(2);

    const dataset = {
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      height: formData.height,
      weight: formData.weight,
      bmi: bmi,
    };

    try {
      await axios.post("http://localhost:8080/bmi/postbmi", dataset);
    } catch (error) {
      console.error("Error saving BMI:", error);
    }

    setBmiResult({
      name: formData.name,
      bmi,
      height: formData.height,
      weight: formData.weight,
    });

    setFormData({
      name: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
    });
  };

  // Chart Data
  const chartData = bmiResult
    ? {
        labels: ["Height (cm)", "Weight (kg)", "BMI"],
        datasets: [
          {
            label: `${bmiResult.name}'s Data`,
            data: [bmiResult.height, bmiResult.weight, bmiResult.bmi],
            backgroundColor: ["#6a5acd", "#ff7f50", "#20b2aa"],
            borderWidth: 2,
            borderColor: "#333",
            borderRadius: 12,
          },
        ],
      }
    : null;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "BMI Result Chart",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(200,200,200,0.2)" },
      },
      x: {
        grid: { color: "rgba(200,200,200,0.2)" },
      },
    },
  };

  return (
    <div className={`bmi-main-layout ${bmiResult ? "with-result" : ""}`}>
      {/* Left side: Calculator */}
      <div className="bmi-container">
        <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label>Gender:</label>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            placeholder="Enter your height"
            value={formData.height}
            onChange={handleChange}
            required
          />

          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            placeholder="Enter your weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />

          <button type="submit">Calculate BMI</button>
        </form>
      </div>

      {/* Right side: Result + Chart */}
      {bmiResult && (
        <div className="bmi-result-chart">
          <div className="bmi-result">
            <h2>Hello {bmiResult.name},</h2>
            <p>
              Your BMI is: <strong>{bmiResult.bmi}</strong>
            </p>
          </div>

          <div className="chart-box">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
