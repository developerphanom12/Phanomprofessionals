import React from "react";
import styled from "styled-components";
import tag1 from "../Images/tag1.png";
import tag2 from "../Images/tag2.png";
import tag3 from "../Images/tag3.png";
import tag4 from "../Images/tag4.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Section3() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>How can I hire </span>{" "}
            <span className="text"> Google Ads specialists </span>
            <span>using Phanom Professionals?</span>
            <p>
              Indians currently manage a number of the largest corporations in
              the world.
            </p>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="segment">
                  <img src={tag1} alt="img" />
                  <span>Explain What You Need</span>
                  <p>
                    Explain the roles, duties, required work experience,
                    required skills, and financial requirements.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-12 arrow">
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="segment">
                  <img src={tag2} alt="img" />
                  <span className="span_div">Evaluation</span>
                  <p>
                    Based on the shared job description, we will match the
                    best-fit profile or profiles and share within 48 business
                    hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 arrow">
            <IoIosArrowRoundForward />
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="segment">
                  <img src={tag3} alt="img" />
                  <span>Conversation And Shortlist</span>
                  <p>
                    You select the eligible candidates, and we schedule
                    interviews around your schedule.
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 col-12 arrow">
                {" "}
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="segment">
                  <img src={tag4} alt="img" />
                  <span className="span_div2">Obtain And Manage</span>
                  <p>
                    We'll manage the talent, take care of all the paperwork, and
                    assist you with a smooth onboarding experience.
                  </p>
                </div>
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
  background: #f3f3f3;
  .arrow {
    padding-top: 177px;
    text-align: center;
    svg {
      width: 40px;
      height: 40px;
      font-weight: 100;
    }
  }
  svg {
    color: #147888;
  }
  .text_area {
    padding: 20px 50px;
    text-align: center;
    .text {
      color: #147888;
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    span {
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    p {
      text-align: center;
      color: #6e6e6e;
      padding: 20px;
      word-spacing: 1px;
    }
  }
  .segment {
    display: flex;
    flex-direction: column;
    flex: 1;
    .span_div {
      padding: 17px 45px 17px 45px;
    }
    .span_div2 {
      padding: 17px 5px 17px 5px;
    }
    span {
      text-align: center;
      background-color: #147888;
      color: white;
      font-size: 14px;
      letter-spacing: 1.1px;
      padding: 7px;
      border-radius: 10px;
      border: none;
      margin-bottom: 20px;
    }
    p {
      color: #6e6e6e;
      line-height: 1.7em;
    }
  }
`;
