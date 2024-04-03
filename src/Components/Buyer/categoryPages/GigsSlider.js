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
import profile from "../../Images/Boyspic.png";
import { Link, useNavigate } from "react-router-dom";

function GigsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gigData, setGigData] = useState([]);

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
    setCurrentSlide(prev => {
      const newIndex = prev === 0 ? totalSlides - slidesToShow : prev - 1;
      slideRef.current.scrollLeft = slideWidth * newIndex;
      return newIndex;
    });
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => {
      const newIndex = (prev + 1) % totalSlides;
      slideRef.current.scrollLeft = slideWidth * newIndex;
      return newIndex;
    });
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.scrollLeft = slideWidth * currentSlide;
    }
  }, [currentSlide]);

  const navigate = useNavigate();

  return (
    <Sliderrrs>
      <div className="heading_button">
        <h2 className="main_heading">
          Gigs you may like
          <IoIosArrowRoundForward />
        </h2>
        <div className="slide_btn">
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
                  Rating:5 <span>(50)</span>
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
export default GigsSlider;

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

  button {
    border: none;
    cursor: pointer;
    outline: none;
    color: lightgray;
    width: 40px;
    height: 40px;
    z-index: 1;
    border-radius: 100px;
    svg {
      width: 40px;
      height: 40px;
      font-weight: 700;
    }
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
