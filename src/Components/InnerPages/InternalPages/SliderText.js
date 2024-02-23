import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderText() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slidertext>
      <Slider {...settings}>
        <div>
          <h5>heading</h5>
          <p>description</p>
        </div>
        <div>
          <h5>heading</h5>
          <p>description</p>
        </div>
        <div>
          <h5>heading</h5>
          <p>description</p>
        </div>
        <div>
          <h5>heading</h5>
          <p>description</p>
        </div>
        <div>
          <h5>heading</h5>
          <p>description</p>
        </div>
        <div>
          <h5>heading</h5>
          <p>description</p>
        </div>
      </Slider>
    </Slidertext>
  );
}
const Slidertext = styled.section`
  > div {
    width: 598px;
    .img {
      border-radius: 10px;
    }
  }
  .czlJOl {
    margin: 0px !important;
  }

  .img {
    width: 598px !important;
    height: 150px !important;
  }
  margin: 20px;
  .slick-slide.slick-active.slick-current {
    width: 598px !important;
    height: 150px !important;
  }
  .gvNmJZ .slick-slider.slick-initialized {
    display: flex;
    width: 598px !important;
    height: 150px !important;
    position: absolute;
  }
  .slick-list {
    width: 598px;
    height: 150px;
  }
  .slick-track {
    display: flex;
    height: 150px;
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
`;
