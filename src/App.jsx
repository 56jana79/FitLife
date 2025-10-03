import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './LoginandRegister/Login';
import Register from './LoginandRegister/Register';
import LayoutWithNavbar from './NavbarContainer/LayoutWithNavbar';
import Pather from './Path/Pather'
// Pages
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import BMICalculator from './pages/BMICalculator';
import FoodChecker from './pages/FoodChecker';
import AI from './pages/AI';
import About from './pages/About';

function App() {
  return (
    <Routes>
      {/* Auth Pages (no Navbar) */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path='/Exercise/:pathId' element={<Pather />} />
      {/* Pages with Navbar */}
      <Route element={<LayoutWithNavbar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/food" element={<FoodChecker />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
