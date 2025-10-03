import React, { useState } from "react";
import axios from "axios";
import "./AI.css"; // import the CSS

const AI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPlan("");

    try {
      const response = await axios.post("http://localhost:8080/api/diet-plan", {
        weight,
        height,
      });

      setPlan(response.data.plan);
    } catch (err) {
      console.error(err);
      setError("Failed to generate diet plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-container">
      <h1> AI Diet Assistant</h1>
      <p className="subtitle">
        Enter your weight and height to get a personalized meal plan.
      </p>

      <form onSubmit={handleSubmit} className="ai-form">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Get Diet Plan"}
        </button>
      </form>

      {error && <p className="ai-error">{error}</p>}

      {plan && (
        <div className="ai-plan">
          <h2>Your Diet Plan</h2>
          {/* <li className="ai-p">{plan}</li> */}
          <p className="p1">
    {plan.split("\n").slice(0,7).map((item, index) => (
  <h3 key={index}>{item}</h3>
))}
</p>
  <p className="p2">
    {plan.split("\n").slice(8,13).map((item, index) => (
  <h3 key={index}>{item}</h3>
))}
</p>
  <p className="p3">
    {plan.split("\n").slice(10,20).map((item, index) => (
  <h3 key={index}>{item}</h3>
))}
</p>
  <p className="p3">
    {plan.split("\n").slice(20,30).map((item, index) => (
  <h3 key={index}>{item}</h3>
))}
</p>
  
   
        </div>
      )}
    </div>
  );
};

export default AI;
