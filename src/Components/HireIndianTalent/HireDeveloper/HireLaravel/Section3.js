import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import styled from "styled-components";

export default function Section3() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Do you want to know how </span>
            <span className="text">Phanom Profеssionals </span>{" "}
            <span> can help you?</span>
          </div>
        </div>
        <div class="row">
          <div className="col-lg-4 col-md-6 col-12 service-section-one">
            <FaRegSquareCheck />
            <h4>Finding The Top 3.5% Of Talent:</h4>
            <p>
              Use Phanom Profеssionals to connect with the industry’s top 3.5%
              of talent. Our extensive network ensures you get the best Laravel
              developers available.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 service-section-two"
            backgroundImage="url(d.jpg)"
          >
            <FaRegSquareCheck />
            <h4>Rent 10 Times Faster While Saving 50%:</h4>
            <p>
              Experience hiring faster with Phanom Profеssionals and save up to
              50% on local hires, all without sacrificing quality.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-12 service-section-three">
            <FaRegSquareCheck />
            <h4>Schedule your free discovery call:</h4>
            <p>
              Do you want to know how Phanom Profеssionals can transform your
              Laravel development journey? Now is the time to schedule your free
              screening call and start talking!
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  padding: 0 50px;

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
      font-size: 25px;
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
    /* margin-top: 40px; */
  }
  .service-section-two {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    /* margin-top: 40px; */
  }

  .service-section-three {
    border-bottom: 1px solid #dadada;
    /* margin-top: 40px; */
  }

  .service-section-four {
    border-right: 1px solid #dadada;
    margin-bottom: 40px;
  }
  .service-section-five {
    margin-bottom: 40px;
  }

  @media (max-width: 567px) {
   padding:0;

 .text_div {
    padding: 0 17px;
}
  }

  @media (min-width: 567px) and (max-width: 992px) {

  }
`;
