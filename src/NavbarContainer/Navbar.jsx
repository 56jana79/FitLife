import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Dumbbell } from "lucide-react"; 
import './Nav.css';

const navElements = [
  { label: "Home", to: "/home" },
  { label: "Workouts", to: "/workouts" },
  { label: "BMI Calculator", to: "/bmi" },
  { label: "Food Checker", to: "/food" },
  { label: "AI", to: "/ai" },
  { label: "About Us", to: "/about" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="icon-link">
          <Dumbbell size={32} color="white" />
          <span className="brand">FitLife</span>
        </Link>
      </div>

      <ul className={`nav-menu ${toggleIcon ? "active" : ""}`}>
        {navElements.map((item, index) => (
          <li key={index}>
            <Link 
              className="nav-item" 
              to={item.to} 
              onClick={() => setToggleIcon(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-icon" onClick={handleToggle}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
