import React from "react";
import { motion } from "framer-motion";
import { Activity, Apple, BarChart3, Info } from "lucide-react";
import "../pages/Home.css";

export const homedata = [
  {
    id: 1,
    name: "Exercise",
    para: "Exercise is an important part of a healthy lifestyle. It keeps our body strong, improves blood circulation, and strengthens the heart. Regular physical activity helps maintain a healthy weight, reduces stress, and keeps the mind fresh. It also boosts energy levels and makes us feel more active throughout the day. By making exercise a daily habit, we can stay fit both physically and mentally.",
  },
  {
    id: 2,
    name: "Food",
    para: "Food plays a key role in exercise and fitness. Eating a balanced diet gives the body the energy it needs to perform physical activities. Proteins help build and repair muscles after exercise, while carbohydrates provide fuel for workouts. Vitamins and minerals keep the body healthy and support recovery. Drinking enough water is also important to stay hydrated during and after exercise.",
  },
  {
    id: 3,
    name: "Discipline",
    para: "Discipline is the key to success in life. It helps us stay focused on our goals and complete tasks on time. A disciplined person follows rules and maintains good habits. It teaches self-control and the value of hard work. Discipline leads to a better and more organized life.",
  },
  {
    id: 4,
    name: "Mental Health",
    para: "Mental health is an important part of our overall well-being. It affects how we think, feel, and behave in daily life. Good mental health helps us handle stress, build strong relationships, and make better decisions. Taking care of mental health includes getting enough rest, staying physically active, eating well, and talking about our feelings. When we care for our mind, we live a happier and more balanced life.",
  },
];

const Home = () => {
  return (
    <div className="Home-main-container">
      <div className="c1">
        <div className="c2">
          <h2 className="t1">Health and Fitness Website</h2>
          <br />
          <p className="t2">
            The website is based on Health and Fitness and contains beginner-level exercises and welfare tips.
          </p>
          <br />
          <button className="b1">View</button>
        </div>
      </div>

      <div className="c3">
        <div className="c4">
          {homedata.map((item) => (
            <div className="small-container" key={item.id}>
              <div className="small-container2">
                <h1>{item.id}</h1>
                <h2>{item.name}</h2>
                {/* If you want an image, pass src dynamically later */}
                <img alt="image" />
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
