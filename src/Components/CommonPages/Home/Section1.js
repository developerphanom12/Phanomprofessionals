import React, { useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosCall } from "react-icons/io";
import CountUp from "react-countup";
import a from "../../Images/a.jpg";
import b from "../../Images/b.jpg";
// import cc from "../Images/cc.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Section1() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-12 first-div"
            data-aos="fade-up"
          >
            <span className="first-content">Phanom Profеssionals</span>
            <span className="second-content">
              , a placе whеrе innovation and еxcеllеncе mееt
            </span>
            <div className="circle"></div>
            <p className="paragraph">
              Join Us on a journey of Digital Pеrfеction! Wе don’t just build
              wеbsitеs; wе crеatе digital mastеrpiеcеs that transform your
              onlinе prеsеnce
            </p>
            <div className="row">
              <div className="col-lg-4  col-md-4 col-6">
                <button>OUR SERVICES</button>
              </div>
              <div className="col-lg-6  col-md-6 col-6">
                <button className="btn-content">
                  <IoIosCall />
                  123 456 789
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3  col-md-3 col-6">
                <div className="counter">
                  <CountUp end={100} duration={5} />
                  <span>+</span>
                </div>
                <p className="counter-content">Corporate Brand</p>
              </div>
              <div className="col-lg-3  col-md-3 col-6">
                <div className="counter">
                  <CountUp end={15} duration={5} />
                  <span>K+</span>
                </div>
                <p className="counter-content">Ads Released</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 second-div">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-5 img-first-border">
                <img
                  src={a}
                  alt="img"
                  width="100%"
                  height="100%"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-4  col-md-4 col-5 img-second-border">
                <img
                  src={b}
                  alt="img"
                  width="100%"
                  height="100%"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background-color: #ffffffd4;

  :nth-child(1) {
    margin-right: 0px;
    margin-left: 0px;
  }

  .first-div {
    border: none;
    padding: 100px 0 0 50px;
    .first-content {
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .second-content {
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
    }
    .circle {
      width: 16%;
      height: 92px;
      background-color: #5cd4b9;
      border-radius: 50px;
      margin: -18% 0 0 0;
    }

    .paragraph {
      font-size: 19px;
      color: #6e6e6e;
      padding-top: 30px;
    }

    button {
      font-size: 11px;
      color: white;
      background-color: #147888;
      padding: 15px 26px;
      border: 0;
      letter-spacing: 3px;
      border-radius: 50px;
      &:hover {
        transform: translate(0, -10px);
        transition: 1s;
      }
    }
    .btn-content {
      font-size: 13px;
      color: #147888;
      padding: 15px 40px;
      background-color: #ffffffd4;
      border: 0;
      letter-spacing: 3px;
      svg {
        color: #147888;
        width: 40px;
        height: 20px;
      }
    }
    .counter {
      font-size: 45px;
      font-weight: bold;
      color: #147888;
      padding-top: 35px;
    }

    .counter-content {
      font-size: 18px;
      font-weight: 400;
      color: #6e6e6e;
    }
  }

  .second-div {
    border: none;
    .img-first-border {
      height: 322px;
      transform: rotate(25deg);
      border-radius: 30px;
      margin: 127px 0 0 64px;
      overflow: hidden;
      padding: 0px;
    }
    .img-second-border {
      height: 322px;
      transform: rotate(25deg);
      border-radius: 30px;
      margin: 121px 0 0 58px;
      overflow: hidden;
      padding: 0px;
    }
    .svg-img {
      margin-left: -100px;
      margin-top: -30px;
    }
  }

  @media (max-width: 567px) {
    .first-div {
      padding: 0 0 0 10px;
      .first-content {
        font-size: 35px;
      }
      .second-content {
        font-size: 35px;
      }
      .circle {
        width: 26%;
        margin: -28% 0 0 0;
      }
      .btn-content {
        padding: 15px 0px;
      }
      button {
        font-size: 10px;
      }
    }

    .second-div {
      border: none;
      .img-first-border {
        margin: 50px 0 0 10px;
        height: 180px;
      }
      .img-second-border {
        margin: 20px 0 0 37px;
        height: 180px;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
  .first-div {
    padding: 0 0 0 10px;
}
    .second-div {
      .img-second-border {
        margin: 55px 0 0 97px;
      }
    }
  }
`;
