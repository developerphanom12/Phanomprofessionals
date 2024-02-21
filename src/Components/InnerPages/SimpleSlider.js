import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider1 from "./Slider1";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Sliderr>
      <h2>
        Continue Browsing
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
  padding: 30px;
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
    z-index: 1;
    background: lightgray;
    border-radius: 100px;
    svg {
      width: 90px;
      height: 90px;
    }
  }
  button.slick-arrow.slick-next {
    color: black !important;
    width: 60px;
    height: 60px;
    z-index: 1;
    background: lightgray;
    border-radius: 100px;
    svg {
      width: 90px;
      height: 90px;
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
