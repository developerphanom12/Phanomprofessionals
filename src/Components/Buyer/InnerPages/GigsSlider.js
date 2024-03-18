import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider1 from "./Slider1";

export default function GigsSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Sliderr>
      <h2 className="main_heading" >
      Gigs you may like 
        <IoIosArrowRoundForward />
      </h2>
      <Slider {...settings}>
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider1 />
        </div>
      </Slider>
    </Sliderr>
  );
}
const Sliderr = styled.section`
  /* background-color: red; */
  margin: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 30px 5px;

  .main_heading{
    font-size: 24px;
    color: #222325;
    font-weight: 700;
}

  .gvNmJZ .slick-slider.slick-initialized {
    display: flex;
    width: 400px !important;
    height: 400px !important;
  }
  .slick-list {
    width: 100%;
    height: 400px;
  }
  .slick-track {
    display: flex;
  }
  button.slick-arrow.slick-prev {
    color: black !important;
    width: 60px;
    height: 60px;
    position: relative;
    left: 1080px;
    top: -29px;
    z-index: 1;
    background: lightgray;
    border-radius: 100px;
    svg {
      width: 90px;
      height: 90px;
    }
    @media (max-width: 992px) {
      position: relative;
      left: 580px;
      top: -29px;
    }
    @media (max-width: 567px) {
      position: relative;
      left: 250px;
      top: -19px;
      width: 30px;
      height: 30px;
      svg {
        width: 20px!important;
        height: 20px!important;
      }
    }
  }
  button.slick-arrow.slick-next {
    color: black !important;
    width: 60px;
    height: 60px;
    z-index: 1;
    position: relative;
    top: -488px;
    left: 1146px;
    background: lightgray;
    border-radius: 100px;
    svg {
      width: 90px;
      height: 90px;
    }
    @media (max-width: 992px) {
      position: relative;
      top: -488px;
      left: 660px;
    }
    @media (max-width: 567px) {
      position: relative;
      top: -460px;
      left: 295px;
      width: 30px;
      height: 30px;
      svg {
        width: 20px!important;
        height: 20px!important;
      }
    }
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
`;
