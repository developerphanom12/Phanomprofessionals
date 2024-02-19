import React from "react";
import styled from "styled-components";

export default function Section5() {
  return (
    <Root>
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-12 col-md-12 col-12 text_area"
          data-aos="fade-up"
          >
            <span>Phanom Professionals:</span> <span className="text">Outstanding Partner </span>
            <span> To Deliver Your Projects:</span>
          </div>
          <p className="text-center">We are capable to help businesses to get the best services and our team deliver projects smoothly and effortlessly:</p>
        </div>
        <div className="row pt-4">
          <div className="col-lg-2 col-md-12 col-12 segment">
            <p>In- House Expertise(Team of 50+)</p>
           
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            <p>24/7 Support</p>
            
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            <p>Proven Track Records</p>
           
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            <p>Cost - Effective</p>
           
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            <p>Dedicated Project Manager</p>
           
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            <p>Delivery On Time</p>
           
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
margin-bottom: 20px;
font-family: "DM Sans", sans-serif;
  .text_area {
    margin-bottom: 30px;
    padding: 20px 50px 30px 50px;
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
  }
  .segment {
    /* width: 228px; */
    padding: 20px;
    border-left: 2px solid #147888;
    p {
      font-size: 20px;
      color: #2d2d2d;
      font-weight: bold;
      margin-bottom: 13px;
    }
    span {
      font-size: 17px;
      color: #6e6e6e;
      border-bottom: 1.7em;
    }
  }
  
  @media (max-width: 567px) {
    .segment {
      width: unset;
    }
  }

  @media (min-width: 567px) and (max-width: 992px){
    .segment {
      width: unset;
    }
  }
`;
