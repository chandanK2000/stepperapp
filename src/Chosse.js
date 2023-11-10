import React from 'react';
import './Choose.css';
import { FaStar, FaHeart, FaSmile } from 'react-icons/fa';

const Choose = () => {
  const chooseArray = [
    { facility: 'Smart Reports In 24 hours*', icon: <FaStar /> },
    { facility: 'Free Reports Consultation', icon: <FaHeart /> },
    { facility: 'Most Affordable Pricing', icon: <FaHeart /> },
    { facility: 'On-time Sample Collection', icon: <FaSmile /> },
    { facility: 'NABL Certified Labs', icon: <FaSmile /> },
    { facility: 'Presence In 220+ Cities', icon: <FaSmile /> },
  ];

  return (
    <section className="chooseSection">
      <h3>Why Choose Us</h3>
      <div className="choose">
        {chooseArray.map((chooseInfo, index) => (
          <div className="chooseItem" key={index}>
            <p>{chooseInfo.icon}</p>
            <div>{chooseInfo.facility}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
