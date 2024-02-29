import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgpro from "../../Images/logo2.png";

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
        <div className="content">
          <div>
            <img src={imgpro} alt="img" />
          </div>
          <div>
            <h6>required for an anchor to be keyboard accessible. </h6>
            <p>
              If you cannot provide an href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles.
            </p>
          </div>
        </div>
        <div className="content">
          <div>
            <img src={imgpro} alt="img" />
          </div>
          <div>
            <h6>heading</h6>
            <p>description</p>
          </div>
        </div>
        <div className="content">
          <div>
            <img src={imgpro} alt="img" />
          </div>
          <div>
            <h6>heading</h6>
            <p>description</p>
          </div>
        </div>
        <div className="content">
          <div>
            <img src={imgpro} alt="img" />
          </div>
          <div>
            <h6>heading</h6>
            <p>description</p>
          </div>
        </div>
        <div className="content">
          <div className="profile_img">
            <img src={imgpro} alt="img" />
          </div>
          <div>
            <h6>heading</h6>
            <p>description</p>
          </div>
        </div>
        <div className="content">
          <div>
            <img src={imgpro} alt="img" />
          </div>
          <div>
            <h6>heading</h6>
            <p>description</p>
          </div>
        </div>
      </Slider>
    </Slidertext>
  );
}
const Slidertext = styled.section`
  .content {
    width: 598px;
    display: flex !important;
    padding: 20px;
    justify-content: space-evenly;
    text-align: left;
    gap: 10px;
    h6{
      font-weight: 600;
    }
    p{
      font-weight: 400!important;
      font-size: 14px!important;
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
  .slick-slider {
    width: 598px !important;
    height: 150px !important;
  }
  .slick-slide.slick-active.slick-current {
    width: 598px !important;
    height: 150px !important;
    text-align: center;
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
    border: 1px solid lightgray;
  }
  .slick-track {
    display: flex;
    height: 150px;
  }
  button.slick-arrow.slick-prev {
    color: black !important;
    width: 30px !important;
    height: 30px !important;
    z-index: 1;
    background: #d3d3d38a;
    border-radius: 100px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  button.slick-arrow.slick-next,
  .iFipJE .slick-next:before {
    color: black !important;
    width: 30px !important;
    height: 30px !important;
    z-index: 1;
    background: #d3d3d38a;
    border-radius: 100px;
    svg {
      width: 30px;
      height: 30px;
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
  .slick-slide img {
    display: block;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50px;
  }
`;
