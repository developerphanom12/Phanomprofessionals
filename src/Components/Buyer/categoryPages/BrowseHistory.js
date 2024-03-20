import React, { useState, useRef, useEffect } from "react";
import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowRoundForward,
} from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS } from "../../Important/URLS";
import { toast } from "react-toastify";
import BrowserSlider1 from "./BrowserSlider1";
import profile from "../../Images/button1.webp";

function BrowseHistory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gigData, setGigData] = useState([]);

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(`${EXCHANGE_URLS}/subcategoryData/2`);
        if (res?.status === 201) {
          setGigData(res?.data?.message || []);
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
          Related to your Browsing history
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
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <BrowserSlider1 gigData={gig} />
            <div className="footer">
              <div className="profile_footer">
                <img src={profile} alt="img" />
                <h6>name: {gig?.seller?.username}</h6>
              </div>
              <div>
                <p>description: {gig?.gigsData?.gig_title}</p>
              </div>
              <div>
                <h5>Rating: 5</h5>
              </div>
            </div>
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
  .main_heading {
    font-size: 24px;
    color: #222325;
    font-weight: 700;
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

    .footer {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .profile_footer {
        display: flex;
        align-items: center;
        h6 {
          margin-left: 10px;
        }
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
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
