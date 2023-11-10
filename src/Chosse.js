import React from 'react';
import './Choose.css';
import { FaStar, FaHeart, FaSmile } from 'react-icons/fa';

const Choose = () => {
  const chooseArray = [
    { facility: 'Smart Reports In <br/> 24 hours*', icon: <FaStar /> },
    { facility: 'Free Reports <br/> Consultation', icon: <FaHeart /> },
    { facility: 'Most Affordable <br/> Pricing', icon: <FaHeart /> },
    { facility: 'On-time Sample <br/> Collection', icon: <FaSmile /> },
    { facility: 'NABL Certified <br/> Labs', icon: <FaSmile /> },
    { facility: 'Presence In <br/> 220+ Cities', icon: <FaSmile /> },
  ];

  return (
    <section className="chooseSection">
      <h4>Why Choose Us</h4>
      <div className="choose">
        {chooseArray.map((chooseInfo, index) => (
          <div className="chooseItem" key={index}>
            <p className='circles'>{chooseInfo.icon}</p>
            <div className="facilityText" dangerouslySetInnerHTML={{ __html: chooseInfo.facility }}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
