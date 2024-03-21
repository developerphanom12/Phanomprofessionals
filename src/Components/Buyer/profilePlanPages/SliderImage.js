import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EXCHANGE_URLS_IMAGES } from "../../Important/URLS";

export default function SliderImage({ gigData }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Sliderimage>
      <Slider {...settings}>
        {gigData ? (
          <>
            <img
              className="img"
              src={`${EXCHANGE_URLS_IMAGES}/${gigData?.images?.image1}`}
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
              src={`${EXCHANGE_URLS_IMAGES}/${gigData?.images?.image2}`}
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
              src={`${EXCHANGE_URLS_IMAGES}/${gigData?.images?.image3}`}
              alt={`Image 3`}
            />
          </>
        ) : (
          <div>No gig data available</div>
        )}
      </Slider>
    </Sliderimage>
  );
}
const Sliderimage = styled.section`
  width: 53vw;
  height: 70vh ;

  @media (max-width: 576px) {
    width: 86vw;
    height: 53vh;
  }
  > div {
    width: 53vw;
    @media (max-width: 576px) {
      width: 86vw;
      height: 53vh;
    }
    .img {
      border-radius: 10px;
      @media (max-width: 576px) {
        width: 86vw;
        height: 53vh;
      }
    }
  }
  .czlJOl {
    margin: 0px !important;
  }

  .img {
    width: 53vw ;
    height: 70vh ;
    border-radius: 20px;
    @media (max-width: 576px) {
      width: 86vw ;
      height: 53vh;
    }
  }
  margin: 20px;
  .slick-slide.slick-active.slick-current {
    width: 53vw !important;
    height: 70vh !important;
    @media (max-width: 576px) {
      width: 86vw !important;
      height: 53vh;
    }
  }
  .gvNmJZ .slick-slider.slick-initialized {
    display: flex;
    width: 53vw !important;
    height: 70vh !important;
    position: absolute;
    @media (max-width: 576px) {
      width: 86vw !important;
      height: 53vh;
    }
  }
  .slick-list {
    width: 53vw;
    height: 70vh;
    @media (max-width: 576px) {
      width: 86vw !important;
      height: 53vh !important;;
    }
  }
  .slick-track {
    display: flex;
    height: 70vh;
  }
  button.slick-arrow.slick-prev {
    color: black !important;
    width: 50px !important;
    height: 50px !important;
    z-index: 1;
    background: lightgray;
    border-radius: 100px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  button.slick-arrow.slick-next,
  .iFipJE .slick-next:before {
    color: black !important;
    width: 50px !important;
    height: 50px !important;
    z-index: 1;
    background: lightgray;
    border-radius: 100px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-next:before {
    /* position: relative;
    top: -85px!important;
    left: 221px!important; */
  }

  /* @media (max-width: 576px) {
    .slick-list,
    .img,
    .slick-slide.slick-active.slick-current {
      width: 86vw;
    }
    .gvNmJZ .slick-slider.slick-initialized {
      width: 86vw;
    }
  } */
`;
