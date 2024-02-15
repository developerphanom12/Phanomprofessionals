import React, { useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlay } from "react-icons/fa6";

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
            <div className="button_div">
              <button>
                Homepage <FaPlay />
              </button>
              <button>Hire React Native Developer</button>
            </div>
            <span className="display">
              <span className="first-content">Hiring </span>
              <span className="second-content"> React Native </span>
              <br/>
              <span  className="first-content">
              Developers to Create Next-Generation Apps
              </span>
            </span>
            <div className="circle"></div>
            <p className="paragraph">
            Fееl thе nееd for skilled React Native Developers? Worry not. Wе comprehend your urgency. Connect with on-demand professionals promptly to effectively address your organization’s needs.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-12 second-div">
            <div className="form_div">
              <div className="form_field">
                <input placeholder="Your Name" />
                <input placeholder="Company Name" />
              </div>
              <div className="form_field">
                <select>
                  <option>Branding Solution</option>
                </select>
                <input placeholder="Email" />
              </div>
              <div className="button_box_div">
                <button>GET AN QUATATION</button>
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
  padding: 70px 100px;
  @media (max-width:777px){
    padding: 20px;
  }
  .first-div {
    border: none;
    padding-right: 25px;
    .display{
      display: flex;
      flex-wrap: wrap;
    }
    .first-content {
      display: flex;
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      margin-right: 10px;

    }
    .second-content {
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .circle {
      width: 14%;
      height: 71px;
      background-color: #5cd4b9;
      border-radius: 50px;
      margin: -25% 0 0 0;
    }

    .paragraph {
      font-size: 17px;
      color: #6e6e6e;
      margin: 30px 0px ;
      padding: 35px 0px;
    }
    .button_div {
      margin-bottom: 20px;
    }
    button {
      font-size: 17px;
      margin-right: 5px;
      color: #6e6e6e;
      background-color: white;
      border: 0;
      border-radius: 50px;
      &:hover {
        transition: color 0.3s;
        color: #147888;
      }
      svg {
        color: #0093ab;
        padding-left: 5px;
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
    .form_div {
      background: #f3f3f3;
      padding: 50px;
      border-radius: 30px;

      .form_field {
        display: flex;
        flex-wrap: wrap;
        margin-left: calc(-15px / 2);
        margin-right: calc(-15px / 2);
        margin-bottom: 15px;
        gap: 15px;
        input {
          font-size: 17px;
          line-height: 1.3em;
          border-style: solid;
          border-width: 0px 0px 0px 0px;
          border-color: var(--e-global-color-2d6a869);
          border-radius: 30px;
          padding: 17px;
          width: 209px;
        }
        select {
          width: 209px;
          background-color: #ffffff;
          border: none;
          border-color: var(--e-global-color-2d6a869);
          border-radius: 30px;
          color: gray;
        }
      }
      .button_box_div {
        width: 100%;
        button {
          width: 100%;

          color: #ffffff;
          flex-basis: 100%;
          border: none;
          padding: 15px 30px;
          border-radius: 30px;
          background-color: #0093ab;
          &:hover {
            color: #ffffff;
            background-color: #006778;
            box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
          }
        }
      }
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
    }

    .row {
      margin-right: 0;
    }
  }
`;
