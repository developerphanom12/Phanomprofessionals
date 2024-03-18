import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowRoundForward } from "react-icons/io";
import Slider1 from "./Slider1";
import styled from "styled-components";

function GigsSlider() {
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
      <h2 className="main_heading">
        Gigs you may like
        <IoIosArrowRoundForward />
      </h2>
      <button onClick={goToPreviousSlide}>
        <IoIosArrowDropleft />
      </button>
      <button onClick={goToNextSlide}>
        <IoIosArrowDropright />
      </button>
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
  width: 100vw;
  padding: 30px 0px;
  margin: 20px 10px;
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
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
