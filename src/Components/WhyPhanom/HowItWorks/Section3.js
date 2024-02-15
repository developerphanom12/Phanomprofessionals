import React from "react";
import styled from "styled-components";
import listimg from "../../../Components/Images/lists.png";

export default function Section3() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8 col-md-12 col-12 text_div">
            <span>Hiring </span>
            <span className="text">Indian skills</span>{" "}
            <span>
              has in no way been <br /> easier.
            </span>
            <p>
              A platform that looks after the whole lot in advance. Phanom
              Professionals sources, vets, suits, and manages skills for you.
            </p>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="section_setup">
            <div className="col-lg-4 col-md-4 col-12 img_div">
              <img src={listimg} alt="img" />
            </div>
            <div className="col-lg-8 col-md-8 col-12 description">
              <div className="segmentt">
                <h5>1. Share process description</h5>
                <p className="span_div">
                  Share standard roles and responsibilities, required skills,
                  required marketplace reveal, and budget. Additionally, we're
                  going to ask a few behavioral inquiries to make certain we no
                  longer best locate skills with technical skills but also a
                  person who suits your company's surroundings and culture. The
                  more statistics you share, the higher we can do matchmaking
                  for you.
                </p>
              </div>
              <div className="segmentt">
                <h5>2. Interview and Appointment</h5>
                <p className="span_div">
                  Evaluate and provide feedback until you are convinced. Because
                  each talent is pre-screened based on their communication
                  skills, technical capabilities and much more, our professional
                  expert team reduces the chances of guesswork and
                  disappointment to a great extent. This also helps
                  non-technical managers/interviewers assess talent primarily on
                  the VIBE test.
                </p>
                <h6>
                  <span>#No-Obligation</span> Interview – You are not obligated
                  to hire until you are 100% confident and happy with the
                  talent.
                  <br /> <span>#No Risk Testing</span> – We have the option
                  where talent can work for up to 2 weeks (depending on
                  availability), which allows many clients to gain more
                  confidence and trust in hiring, in case the client is in two
                  minds after the interview.
                </h6>
              </div>
              <div className="segmentt">
                <h5>3. Onboard and Manage</h5>
                <p className="span_div">
                  Once you confirm the talent, we sort out all the legalities
                  and enter into contracts with the talent, ensuring smooth
                  onboarding and helping you manage the talent. Phanom
                  Professionals has a Talent Success Coach on hand to ensure
                  that the engagement between client and talent is top-notch.
                </p>
                <h6>
                  <span>#30-Day Replacement</span> – You are not obligated to
                  hire until you are 100% confident and happy with the talent.{" "}
                  <br /> <span>#Easy Cancellation</span>– We have the option
                  where talent can work for up to 2 weeks (depending on
                  availability), which allows many clients to gain more
                  confidence and trust in hiring, in case the client is in two
                  minds after the interview.
                </h6>
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

  .text_div {
    margin-bottom: 0.7em;
    padding: 20px 30px;
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
      padding: 20px 0px;
      letter-spacing: 1px;
    }
  }
  .section_setup {
    display: flex;
    /* flex-wrap: wrap; */
    .img_div {
      text-align: center;
      img {
        width: 30%;
      }
    }
    .description {
      .segmentt {
        padding: 17px 0px;

        h5 {
          font-size: 20px;
          color: #2d2d2d;
          font-weight: bold;
          margin-bottom: 13px;
        }
        .span_div {
          font-size: 17px;
          color: #6e6e6e;
          word-spacing: 2px;
          /* margin-bottom: 20px; */
        }
        h6 {
          margin: 30px 0px;
          font-size: 17px;
          color: #6e6e6e;
          word-spacing: 2px;
          line-height: 1.3em;
          span {
            color: #2d2d2d;
            font-weight: bold;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .section_setup {
      width: fit-content;
      .img_div {
        width: 30%;
        img {
          margin-top: 50px;
          height: 60%;
        }
      }
      .description {
        width: 70%;
        .segmentt {
          padding: 8px;
          width: 100%;
          h5 {
            font-size: 10px;
            margin: 0;
          }
          .span_div {
            font-size: 8px;
            word-spacing: 1px;
            /* background-color: red; */
            padding: 0px;
            margin: 0px !important;
          }
          h6 {
            font-size: 8px;
            margin: 2px;
          }
        }
      }
    }
  }
`;
