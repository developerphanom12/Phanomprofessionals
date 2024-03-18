import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider1 from "./Slider1";
import styled from "styled-components";

function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const slides = [
    <Slider1 />,
    <Slider1 />,
    <Slider1 />,
    <Slider1 />,
    <Slider1 />,
    <Slider1 />,
    <Slider1 />,
    <Slider1 />,
  ];

  const totalSlides = slides.length;
  const slidesToShow = 4;
  const slideWidth = 300;

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - slidesToShow : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - slidesToShow ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.scrollBy(slideWidth * currentSlide, 0);
    }
  }, [currentSlide]);

  return (
    <Root className="slider-container">
      <div className="heading_button">
        <h3>Based on your browsing history</h3>
        <div>
          <button onClick={goToPreviousSlide}>
            <IoIosArrowDropleft />
          </button>
          <button onClick={goToNextSlide}>
            <IoIosArrowDropright />
          </button>
        </div>
      </div>

      <div className="slides-container" ref={slideRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>
    </Root>
  );
}

export default SimpleSlider;

const Root = styled.section`
  width: 100vw;
  .slider-container {
    display: flex;
    align-items: center;
    overflow-x: hidden;
  }
  .heading_button {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .slides-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .slide {
    flex: 0 0 auto;
    width: 310px;
    scroll-snap-align: initial;
    margin-right: 10px; /* Adjust spacing between slides */
    padding: 10px; /* Optional: Add padding to slides */
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    color: lightgray;
    width: 40px;
    height: 40px ;
    z-index: 1;
    background: #fff;
    border-radius: 100px;
    svg {
      width: 40px;
      height: 40px;
      font-weight: 700;
    }
  }
`;
