import React from 'react';
import {  Exercise } from '../Ulist/Dataset'; // Should be Exercise ideally
import '../pages/Workout.css';
import { Link } from 'react-router-dom';

const Workouts = () => {
  return (
    <div>
      <div className="Muscle-containers">
        {Exercise.map((item) => (
          <div key={item.id}>
            <Link to={`/Exercise/${item.id}`}>
              <div className="image-container">
                <img src={item.image} alt={item.title} />
              </div>
              <h1>{item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
