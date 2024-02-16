import React from "react";
import styled from "styled-components";
import BannerDesktop from "../Images/BannerDesktop.png";
import { IoHandRight } from "react-icons/io5";
import b1 from "../Images/button1.webp";
import b2 from "../Images/button2.webp";

export default function Page1() {
  return (
    <Pageone>
      <h2>
        Welcome back,Developerbuddy <IoHandRight />
      </h2>
      <div className="sections">
        <div className="sub_section">
          <div>RECOMMENDED FOR YOU</div>
          <div className="mini_sub_div">
            <div>
              {" "}
              <img src={b1} alt="img" />
            </div>
            <div>
              <p>Get matched with freelancers</p>
              <span>Create a brief and get a custom offers.</span>
            </div>
            <div>
              <button>Create a brief</button>
            </div>
          </div>
        </div>
        <div className="sub_section">
          <div>BUSINESS RECOMMENDATIONS </div>
          <div className="mini_sub_div">
            <div>
              {" "}
              <img src={b2} alt="img" />
            </div>
            <div>
              <p>Tailor Phanom to your needs</p>
              <span>Tell us a bit about your business.</span>
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
  margin: 40px 40px 0px 40px;
  background-image: url(${BannerDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 20px;
  h2 {
    color: #fff;
    svg {
      color: #ffbb00;
      transform: rotate(-30deg);
    }
  }
  .sections {
    display: flex;
    width: 100%;
    justify-content: space-around;
    .sub_section {
      display: flex;
      flex-direction: column;
      backdrop-filter: blur(10px);
      color: #fff;
      padding: 10px;
      /* background-color: lightgray; */
      .mini_sub_div {
        display: flex;
        justify-content: space-around;
        img {
          width: 50px;
          height: 50px;
          padding: 5px;
        }
        > div {
          padding: 5px;
          p {
            margin: 0px;
          }
          button{
            padding: 10px;
            border-radius: 10px;
            border: 2px solid white;
            background-color:transparent;
            color: #fff;
          }
        }
      }
    }
  }
`;
