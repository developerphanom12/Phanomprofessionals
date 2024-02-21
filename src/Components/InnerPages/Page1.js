import React from "react";
import styled from "styled-components";
import BannerDesktop from "../Images/BannerDesktop.png";
import { IoHandRight } from "react-icons/io5";
import b1 from "../Images/button1.webp";
import b2 from "../Images/button2.webp";
import { useNavigate } from "react-router-dom";

export default function Page1() {
  const navigate = useNavigate()
  return (
    <Pageone>
      <h2 onClick={navigate("/internalpage")}>
        Welcome back, Developerbuddy <IoHandRight />
      </h2>
      <div className="sections">
        <div className="sub_section">
          <div className="text_area">RECOMMENDED FOR YOU</div>
          <div className="mini_sub_div">
            <div className="mini_sub">
              <div>
                {" "}
                <img src={b1} alt="img" />
              </div>
              <div>
                <p>Get matched with freelancers</p>
                <span>Create a brief and get a custom offers.</span>
              </div>
            </div>
            <div>
              <button>Create a brief</button>
            </div>
          </div>
        </div>

        <div className="sub_section">
          <div className="text_area">BUSINESS RECOMMENDATIONS </div>
          <div className="mini_sub_div">
            <div className="mini_sub">
              <div>
                {" "}
                <img src={b2} alt="img" />
              </div>
              <div>
                <p>Tailor Phanom to your needs</p>
                <span>Tell us a bit about your business.</span>
              </div>
            </div>
            <div>
              <button>Add your info</button>
            </div>
          </div>
        </div>
      </div>
    </Pageone>
  );
}

const Pageone = styled.section`
  font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 40px 40px 0px 40px;
  background-image: url(${BannerDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 20px 20px 20px;
  border-radius: 20px;
  h2 {
    color: #fff;
    font-weight: 700;
    svg {
      color: #ffbb00;
      transform: rotate(-30deg);
    }
  }
  .sections {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    .sub_section {
      display: flex;
      width: 48%;
      border-radius: 10px;
      flex-direction: column;
      backdrop-filter: blur(10px);
      color: #fff;
      padding: 10px;
      background-color: #ffffff26;
      .text_area {
        font-size: 12px;
        padding: 10px;
        font-weight: 600;
      }
      .mini_sub_div {
        display: flex;
        justify-content: space-between;
        .mini_sub {
          display: flex;
        }
        > div {
          img {
            width: 60px;
            height: 60px;
            padding: 5px;
          }
          padding: 5px;
          p {
            margin: 0px;
            font-weight: 600;
            line-height: 24px;
            font-size:16px;
          }
          span {
            font-size: 14px;
            font-weight: 400;

          }
          button {
            padding: 10px;
            border-radius: 10px;
            border: 1px solid white;
            background-color: transparent;
            color: #fff;
            &:hover {
              background-color: #ffffff26;
            }
          }
        }
      }
    }
  }
`;
