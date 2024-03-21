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
  width: 46vw;
  @media (max-width: 576px) {
    width: 86vw;
  }
  > div {
    width: 46vw;
    @media (max-width: 576px) {
      width: 86vw;
    }
    .img {
      border-radius: 10px;
      @media (max-width: 576px) {
        width: 86vw;
      }
    }
  }
  .czlJOl {
    margin: 0px !important;
  }

  .img {
    width: 46vw !important;
    height: 250px !important;
    border-radius: 20px;
    @media (max-width: 576px) {
      width: 86vw !important;
    }
  }
  margin: 20px;
  .slick-slide.slick-active.slick-current {
    width: 46vw !important;
    height: 250px !important;
    @media (max-width: 576px) {
        width: 86vw !important;
      }
  }
  .gvNmJZ .slick-slider.slick-initialized {
    display: flex;
    width: 46vw !important;
    height: 250px !important;
    position: absolute;
    @media (max-width: 576px) {
        width: 86vw !important;
      }
  }
  .slick-list {
    width: 46vw;
    height: 250px;
    @media (max-width: 576px) {
        width: 86vw !important;
      }
  }
  .slick-track {
    display: flex;
    height: 250px;
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
