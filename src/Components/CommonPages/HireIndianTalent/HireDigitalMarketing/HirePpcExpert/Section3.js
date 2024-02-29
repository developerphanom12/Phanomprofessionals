import React from "react";
import styled from "styled-components";
import tag1 from "../../../../Images/tag1.png";
import tag2 from "../../../../Images/tag2.png";
import tag3 from "../../../../Images/tag3.png";
import tag4 from "../../../../Images/tag4.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>How can I hire </span> <span className="text"> Google Ads specialists</span>
            <span> using Phanom Professionals?
</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag1} alt="img" />
                  <span>Explain what you need</span>
                  <p>
                  Explain the roles, duties, required work experience, required skills, and financial requirements.                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12 arrow">
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag2} alt="img" />
                  <span className="span_div">
                  Evaluation 
                  </span>
                  <p>
                  Based on the shared job description, we will provide you the best-fit profile or profiles and share in less than 48 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 arrow hide_pad">
            <IoIosArrowRoundForward />
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag3} alt="img" />
                  <span>Conversation and shortlist</span>
                  <p>
                  We provide you with the best experts to shortlist for your project or assignments.

                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-12 arrow">
                {" "}
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag4} alt="img" />
                  <span className="span_div2">Obtain and Manage</span>
                  <p>
                  We'll manage the talent, take care of all the paperwork, and assist you with a smooth onboarding experience.
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
      padding: 7px;
    }
    .span_div2 {
      padding: 7px;
    }
    span {
      text-align: center;
      background-color: #147888;
      color: white;
      font-size: 14px;
      letter-spacing: 1.1px;
      padding: 12px;
      border-radius: 10px;
      border: none;
      margin-bottom: 20px;
    }
    p {
      color: #6e6e6e;
      line-height: 1.7em;
    }
  }

  @media (max-width: 567px) {
   .text_area {
    padding: 10px 10px; 
}
 .arrow {
    padding-top:0;
    transform: rotate(90deg);
}

 .segment {
    align-items: center;
    justify-content: center;
}

.segment p {

    text-align: center;
}

}

@media (min-width: 567px) and (max-width: 992px) {
  .text_area {
    padding: 10px 10px; 
}
  .hide_pad{
    display: none;
  }
 

}
`;
