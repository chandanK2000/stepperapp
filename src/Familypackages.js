import React, { useRef } from 'react';
import './FamilyPackages.css';
import lady from './images/lady.webp';
import man from './images/man.avif';
import girl from './images/girl.jpg';
import boy from './images/boy.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FamilyPackages = () => {
  const familyList = [
    {
      profile: lady,
      heading: 'senior citizen full body checkup',
      actualprice: '8760',
      discountPrice: '2090',
      discount: '76 %',
      parameters: '83 parameter',
      recomended: 'recomend by mother',
    },
    {
      profile: man,
      heading: 'senior citizen full body checkup',
      actualprice: '8760',
      discountPrice: '2090',
      discount: '76 %',
      parameters: '83 parameter',
      recomended: 'recomend by father',
    },
    {
      profile: girl,
      heading: 'fit india full body checkup with vitamin',
      actualprice: '6400',
      discountPrice: '1499',
      discount: '76 %',
      parameters: '83 parameter',
      recomended: 'recomend by women',
    },
    {
      profile: boy,
      heading: 'fit india full body checkup with vitamin',
      actualprice: '6400',
      discountPrice: '1499',
      discount: '76 %',
      parameters: '83 parameter',
      recomended: 'recomend by men',
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
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
        slidesToShow: 3.2,
      },
    },
  ];

  return (
    <section className='familypackageSection'>
      <div className='prevnext'>
        <h3>What Doctors Are Saying</h3>

        <div className='button-container'>
          <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}>&lt; </button>
          <button className="next-button" onClick={() => sliderRef.current.slickNext()}> &gt;</button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} responsive={responsiveSettings}>
        {familyList.map((familyinfo, index) => (
          <div className='maincardSection' key={index}>
            <div className='cards'>
              <div>
                <h5 className='headings'>{familyinfo.heading}</h5>
                <div className='money'>
                  <div>
                    <del>{familyinfo.actualprice}</del>
                    <p> <ins>{familyinfo.discountPrice} -</ins></p>
                  </div>
                  <div>
                    <p>{familyinfo.discount} <br />OFF</p>
                  </div>
                </div>
                <p>{familyinfo.parameters}</p>
                <p>{familyinfo.recomended}</p>
              </div>
              <img src={familyinfo.profile} alt="profile" height='200px' width='100px' />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FamilyPackages;
