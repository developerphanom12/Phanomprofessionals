import React, { useState, useRef, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS } from "../../Important/URLS";
import { toast } from "react-toastify";
import BrowserSlider1 from "./BrowserSlider1";
import profile from "../../Images/Boyspic.png";
import {useNavigate } from "react-router-dom";

function Websitedev() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gigData, setGigData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSliderApi = async () => {
      try {
        const res = await axios.get(`${EXCHANGE_URLS}/subcategoryData/1`);
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
  const slideWidth = 330; // Adjusted slide width

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
      slideRef.current.scrollLeft = slideWidth * currentSlide; // Updated scrollLeft property
    }
  }, [currentSlide]);

  return (
    <Sliderrrs>
     <div className="heading_button">
        <h2 className="main_heading">
          Related to your Browsing history
          <IoIosArrowRoundForward />
        </h2>
        <div className="slide_btn">
          <button onClick={goToPreviousSlide} className="button">
          <IoIosArrowForward /> 
          </button>
          <button onClick={goToNextSlide} className="button">
            <IoIosArrowBack />
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
            <div
              className="footer"
              onClick={() => {
                navigate(`/editgigspages/${gig?.gigsData?.gig_ids}`);
              }}
            >
              <div className="profile_footer">
                <img src={profile} alt="img" />
                <h6> {gig?.seller?.username}</h6>
              </div>
              <div>
                <p> {gig?.gigsData?.gig_title}</p>
              </div>
              <div>
                <h5>
                  Rating:5<span>(50)</span>
                </h5>
              </div>
              <div>
                <h4>From: $ {gig?.price?.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Sliderrrs>
  );
}
export default Websitedev;

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
    overflow-x: hidden; // Updated overflow property
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .slide {
    flex: 0 0 auto;
    scroll-snap-align: start;
    padding: 10px;
    width: 280px;
    .footer {
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      .profile_footer {
        display: flex;
        align-items: center;
        margin-left: 10px;

        h6 {
          margin-left: 10px;
          margin-top: 10px;
          font-size: 14px;
          font-weight: 700;
          color: #222325;
        }
        img {
          width: 30px;
          height: 30px;
        }
      }

      p {
        font-size: 17px;
        margin-top: 5px;
        color: #404145;
        font-weight: 400;
        margin-left: 10px;
        margin-bottom: 0px;
        &:hover {
          text-decoration: underline;
          text-decoration-thickness: 1px;
        }
      }

      h5 {
        margin-left: 10px;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
        color: #222325;
        span {
          color: #74767e;
          font-size: 16px;
          font-weight: 400;
          margin-left: 2px;
        }
      }
      h4 {
        margin-left: 10px;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
        color: #222325;
      }
    }
  }

  .button {
    transform: scaleX(-1);
    cursor: pointer;
    outline: none;
    color: gray;
    background-color: #fff;
    border: 2px solid #efeff0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 2px 6px;
    svg {
      width: 20px;
      height: 20px;
      font-weight: 700;
    }
  }
  .slide_btn {
    margin-right: 10px;
  }
  @media (max-width: 567px) {
    .slide_btn {
      display: flex;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .slide {
      width: 48%;
    }
  }
`;
