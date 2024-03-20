import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imaggg from "../../Images/BannerDesktop.png"

const SliderrGig = () => {
  const [value, setValue] = useState(50);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Slider Value: {value}</h2>
      <Slider {...settings} value={value} onChange={handleChange}>
        <div>
          <img src={imaggg} alt="Image 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
        </div>
        
      </Slider>
    </div>
  );
};

export default SliderrGig;
