import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EXCHANGE_URLS_IMAGES } from "../../Important/URLS";

export default function WebsiteSlider({ gigData }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Sliderrrs>
      <Slider {...settings}>
        {gigData ? (
          <>
            <img
              className="img"
              src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image1}`}
              alt={`Image 1`}
            />
          </>
        ) : (
          <div>No gig data available</div>
        )}
        {gigData ? (
          <>
            <img
              className="img"
              src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image2}`}
              alt={`Image 2`}
            />
          </>
        ) : (
          <div>No gig data available</div>
        )}
        {gigData ? (
          <>
            <img
              className="img"
              src={`${EXCHANGE_URLS_IMAGES}/${gigData?.gigsimages?.image3}`}
              alt={`Image 3`}
            />
          </>
        ) : (
          <div>No gig data available</div>
        )}
      </Slider>
    </Sliderrrs>
  );
}

const Sliderrrs = styled.section`
  width: 100%;
  .img {
    width: 100%;
    height: 30vh;
    border-radius: 10px;
    object-fit: cover;
  }
  .slick-prev,
  .slick-next {
    z-index: 1;
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
  .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
    width: 40px;
}
`;
