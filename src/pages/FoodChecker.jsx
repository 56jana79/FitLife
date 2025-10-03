import React, { useState } from "react";
import '../pages/FoodCheck.css';

const FoodChecker = () => {
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const handleInput = (e) => setInput(e.target.value);

  const get = async () => {
    if (!input) return alert("Please enter a food name!");
    setLoad(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${input}&app_id=155a5345&app_key=485ea0358c8efe6de70541560fe0f44e`
      );
      const result = await response.json();

      if (response.ok && result.hints) {
        setTimeout(() => {
          setData(result.hints.slice(0, 5)); // Limit to 5 results
          setLoad(false);
        }, 500);
      } else {
        throw new Error("No data found for this food");
      }
    } catch (err) {
      setError(err.message);
      setLoad(false);
    }
  };

  return (
    <div className="food-main">
      <div className="food-header">
        <h1>Food Nutrition Checker</h1>
        <p>Enter a food name to see nutritional details like calories, protein, fat, and fiber.</p>
      </div>

      <div className="food-input-section">
        <input
          type="text"
          value={input}
          placeholder="Enter food name..."
          onChange={handleInput}
        />
        <button onClick={get}>Search</button>
      </div>

      <div className="result-container">
        {load && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {data.length > 0 &&
          data.map((item, index) => (
            <div className="food-card" key={index}>
              <h2>{item.food.label}</h2>
              <p>Calories: {Math.floor(item.food.nutrients.ENERC_KCAL) || 0} kcal</p>
              <p>Protein: {Math.floor(item.food.nutrients.PROCNT) || 0} g</p>
              <p>Fat: {Math.floor(item.food.nutrients.FAT) || 0} g</p>
              <p>Fiber: {Math.floor(item.food.nutrients.FIBTG )|| 0} g</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodChecker;
