import React, { useRef } from 'react'
import './Booked.css';
import { FaStar, FaHeart, FaSmile } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Booked = () => {

  const DiseaseList = [
    { icons: <FaStar />, Diseases: 'Throids' },
    { icons: <FaStar />, Diseases: 'Diabetes' },
    { icons: <FaHeart />, Diseases: 'Hearts' },
    { icons: <FaStar />, Diseases: 'Vitamins' },
    { icons: <FaStar />, Diseases: 'Arthities' },
    { icons: <FaStar />, Diseases: 'FullBody' },
    { icons: <FaStar />, Diseases: 'Cancer' },
    { icons: <FaStar />, Diseases: 'Fever' },
    { icons: <FaStar />, Diseases: 'Hormont Test' },
    { icons: <FaStar />, Diseases: 'Allergy' },
    { icons: <FaStar />, Diseases: 'STD' },
    { icons: <FaStar />, Diseases: 'Combo' },
    { icons: <FaStar />, Diseases: 'Antental' },
    { icons: <FaStar />, Diseases: 'Fertility' },
    { icons: <FaStar />, Diseases: 'Anemia' },
    { icons: <FaSmile />, Diseases: 'LifeStyle' },
  ];

  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
  };

  const responsiveSettings = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
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
        slidesToShow: 5.15,
      },
    },
  ];

  return (
    <section className='bookedSection'>

      <div className='prevnext'>
        <h3>Frequently Booked</h3>
        <div className='button-container'>
          <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}>&lt; </button>
          <button className="next-button" onClick={() => sliderRef.current.slickNext()}> &gt;</button>
        </div>
      </div>

      <div style={{ marginTop: '10px' }}>

        <Slider ref={sliderRef} {...settings} responsive={responsiveSettings}>
          {DiseaseList.map((diseaseslists, index) => (
            <div className='cardsDetails' key={index}>
              <div className='cardIcon'>
                {diseaseslists.icons}
              </div>
              <div className='headings'>
                <p>{diseaseslists.Diseases}</p>
              </div>

            </div>
          ))}
        </Slider>
      </div>

    </section>
  )
}

export default Booked;