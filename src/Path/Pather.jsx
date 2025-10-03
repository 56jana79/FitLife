import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../Ulist/Dataset';
import './Pather.css'; // import the CSS file

const Pather = () => {
  const { pathId } = useParams();
  const post = data.find((item) => item.id === parseInt(pathId));

  if (!post) {
    return <h2>No data found for ID: {pathId}</h2>;
  }

  return (
    <div className="pather-container">
      {post.dataset.map((item, index) => (
        <div key={index} className="exercise-card">
          <h2>{item.Exercise}</h2>
         <img className='item-images' src={item.image} alt=" images" />
          <h3>{item.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default Pather;
