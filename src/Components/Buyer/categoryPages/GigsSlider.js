import React, { useState, useRef, useEffect } from "react";
import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowRoundForward,
} from "react-icons/io";
import styled from "styled-components";
import BrowserSlider1 from "./BrowserSlider1";

function GigsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();


  const slides = [
    <BrowserSlider1 />,
   
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
        <h2 className="main_heading">
          Gigs you may like
          <IoIosArrowRoundForward />
        </h2>
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

export default GigsSlider;

const Root = styled.section`
  width: 100%;
  padding: 0px 0px;
  margin: 20px 10px;
  .heading_button {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .main_heading {
    font-size: 24px;
    color: #222325;
    font-weight: 700;
  }

  .slider-container {
    display: flex;
    align-items: center;
    overflow-x: hidden;
  }

  .slides-container {
    display: flex;
    /* overflow-x: auto; */
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
    height: 40px;
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
