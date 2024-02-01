import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import styled from "styled-components";

export default function Section4() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span className="text">Phanom’s </span> <span> Advantage</span>
          </div>
        </div>
        <div class="row">
          <div className="col-lg-4 col-md-6 col-12 service-section-one">
            <FaRegSquareCheck />
            <h4>Elimination Of Sourcing</h4>
            <p>
              Eliminate the lengthy and tedious manner of sourcing applicants to
              discover the proper certified candidate.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 service-section-two"
            backgroundImage="url(d.jpg)"
          >
            <FaRegSquareCheck />
            <h4>No Duty Earlier Than Or After Appointment</h4>
            <p>
              From supporting you to construct a superb group to coping with
              them (HR and payroll) – we will deal with everything.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-12 service-section-three">
            <FaRegSquareCheck />
            <h4>Save more on salary</h4>
            <p>
              Phanom helps you to store as much as 40% on salaries in comparison
              to neighbourhood skills without compromising on quality.
            </p>
          </div>
        </div>

        <div class="row">
          <div className="col-lg-4 col-md-6 col-12 service-section-four">
            <h4>Beat the skills crunch</h4>
            <p>
              Access a community of skilled applicants and hire PHP/ PHP
              developers
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 service-section-five"
            backgroundImage="url(d.jpg)"
          >
            <h4>Security and Compliance</h4>
            <p>
              Keep your facts secure with Phanom\'s international facts safety
              and compliance standards.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-12 service-section-five"></div>
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

  .service-section-one,
  .service-section-two,
  .service-section-three,
  .service-section-four,
  .service-section-five {
    height: 300px;
    padding: 30px 38px 10px 30px;

    svg {
      width: 40px;
      height: 40px;
      color: #147888;
    }
    h4 {
      font-size: 30px;
      padding-top: 20px;
      font-weight: bold;
    }
    p {
      font-size: 17px;
      color: #6e6e6e;
    }
  }

  .service-section-one {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    margin-top: 40px;
  }
  .service-section-two {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    margin-top: 40px;
  }

  .service-section-three {
    border-bottom: 1px solid #dadada;
    margin-top: 40px;
  }

  .service-section-four {
    border-right: 1px solid #dadada;
    margin-bottom: 40px;
  }
  .service-section-five {
    margin-bottom: 40px;
  }
`;
