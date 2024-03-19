import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS } from "../../Important/URLS";
import { toast } from "react-toastify";
import BrowserSlider1 from "./BrowserSlider1";

function BrowseHistory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gigData, setGigData] = useState([]);

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(`${EXCHANGE_URLS}/subcategoryData/1`);
        if (res?.status === 201) {
          setGigData(res?.data?.message || []); // Update state with message array
        }
      } catch (err) {
        toast.error(err, "Error");
      }
    };

    getSliderApi();
  }, []);
  
  const slideRef = useRef();

  const totalSlides = gigData.length;
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
    <Sliderrrs>
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
        {gigData.map((gig, index) => (
          <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
            <BrowserSlider1 gigData={gig} />
          </div>
        ))}
      </div>
    </Sliderrrs>
  );
}
export default BrowseHistory;

const Sliderrrs = styled.section`
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
