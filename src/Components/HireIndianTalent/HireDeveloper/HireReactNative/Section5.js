import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import styled from "styled-components";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>The </span>
            <span className="text">Phanom Professionals </span>{" "}
            <span>Advantage</span>
            <p className="mt-3">
            Our in - house excellent React Native developers at Phanom Professionals to unlock unmatched brilliance in cellular app enhancement. With a wealth of knowledge, our expert professionals provide top-notch solutions catered to your unique needs. Our website builders are dedicated to delivering programs for the modern day, with an emphasis on innovation, performance, and cooperative dialogue.
            </p>
            <p>Put your trust in our expertise to take your projects to the next level by utilizing React Native's energy for the best possible performance and a smooth user experience. Select Phanom Professionals if you're looking for a committed staff that puts niceties, accuracy, and keeping ahead of the curve in the ever-changing world of mobile app development.</p>
          
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
      letter-spacing: 1px;
    }
  }

  .service-section-one,
  .service-section-two,
  .service-section-three,
  .service-section-four,
  .service-section-five {
    height: 300px;
    padding: 60px 38px 0 30px;

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

  @media (max-width: 567px) {
  .text_div {
   padding:0 20px; 
}

}
`;
