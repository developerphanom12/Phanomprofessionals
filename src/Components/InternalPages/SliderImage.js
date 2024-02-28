import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imggg from "../Images/ind18.png";
import banner from "../Images/ind20.png";


export default function SliderImage() {
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
        <div>
          <img className="img" src={imggg} alt="img" />
        </div>
        <div>
          <img className="img" src={banner} alt="img" />
        </div>
        <div>
          <img className="img" src={imggg} alt="img" />
        </div>
        <div>
          <img className="img" src={banner} alt="img" />
        </div>
        <div>
          <img className="img" src={imggg} alt="img" />
        </div>
        <div>
          <img className="img" src={banner} alt="img" />
        </div>
      </Slider>
    </Sliderimage>
  );
}
const Sliderimage = styled.section`
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
    height: 250px !important;
  }
  margin: 20px;
  .slick-slide.slick-active.slick-current {
    width: 598px !important;
    height: 250px !important;
  }
  .gvNmJZ .slick-slider.slick-initialized {
    display: flex;
    width: 598px !important;
    height: 250px !important;
    position: absolute;
  }
  .slick-list {
    width: 598px;
    height: 250px;
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
`;
