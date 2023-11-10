// Cards.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cards.css';
import docterimg1 from './images/doctor1.jpg';

const Cards = () => {
  const content = [
    { title: 'Book a test', description: 'Use search or package selector to book a test', circle: '1' },
    { title: 'Sample Collection from Home', description: 'Choose a convenient time slot and address for smooth sample collection', circle: '2' },
    { title: 'Download Reports', description: 'Download test reports from WhatsApp, email, website, or SMS with one click', circle: '3' },
    { title: 'Free Report Consultation', description: 'Avail report consultation once your reports are ready', circle: '4' },
  ];

  const DoctorsList = [
    { profile: docterimg1, name: 'Dr. Vykunta Raju K. N', profession: 'Pediatric Neurologist', place: 'Bengaluru', labs: 'Redcliffe Labs delivers exceptional and accurate diagnostic services with a knowledgeable and dedicated team.' },
    { profile: docterimg1, name: 'Dr. Seneesh KV', profession: 'Fetal Medicine Specialist', place: 'Kerala', labs: 'Redcliffe Labs has been an invaluable diagnostic  service provider for me and my patients. Their commitment to using the latest technologies and techniques to deliver quality & timely reports is commendable.' },
    { profile: docterimg1, name: 'Dr. Chitra Ganesh', profession: 'Fetal Medicine Specialist', place: 'Bengaluru', labs: 'Redcliffe Labs is synonymous with trusted healthcare, delivering high-quality diagnostic services on time.' },
    { profile: docterimg1, name: 'Dr.Sagar Bhattad', profession: 'Pediatric Clinical Immunologist ', place: 'Bengaluru', labs: 'For reliable & timely health reports, I always recommend Redcliffe Labs to my patients.' },
  ];

  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:3.20,
  };

  const responsiveSettings = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true, 
        // dots: true,
        // dotsClass: 'slick-dots custom-dots',

      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
         swipeToSlide: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.2,
      },
    },
  ];


  return (
    <section className='main_card_section'>
      <h3>Easy Home Testing in 4 Steps</h3>
      <div className='steps'>
        {content.map((contentinfo, index) => (
          <div className='abc'>
          <div className='stepsSection' key={index}>
            <p className='circles'>{contentinfo.circle}</p>
            <div className="cardscontents">
            <h5>{contentinfo.title}</h5>
            <div className='contents'>
              <p>{contentinfo.description}</p>
            </div>
              </div>
          </div>
          </div>
        ))}
      </div>

   <div className='prevnext'>
        <h3>What Doctors Are Saying</h3>

        <div className='button-container'>
          <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}>&lt; </button>
          <button className="next-button" onClick={() => sliderRef.current.slickNext()}> &gt;</button>
        </div>
   </div>

      <Slider ref={sliderRef} {...settings} responsive={responsiveSettings}>
        {DoctorsList.map((doctorinfo, index) => (
          <div key={index} className='card'>
            <div className='card-content'>
              <img src={doctorinfo.profile} alt='profile' />
              <div className='info'>
                <h6>{doctorinfo.name}</h6>
                <p>{doctorinfo.profession}</p>
                <p>{doctorinfo.place}</p>
              </div>
            </div>
            <div className='description'>
              <p>{doctorinfo.labs}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Cards;
