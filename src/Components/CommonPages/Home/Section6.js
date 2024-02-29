import React from "react";
import styled from "styled-components";

export default function Section6() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 col-md-12 col-12 first-div" data-aos="fade-up">
            <span className="colored-content">How does </span>
            <span className="black-content">it work?</span>
            <div className="circle"></div>
            <p className="paragraph">
              Unlocking Success: How Phanom Professionals Work!
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>

        <div className="row work-row">
          <div className="col-lg-3  col-md-6 col-12">
            <div className="work-sec">
              <h4>01</h4>
              <h5>Meeting and preparation:</h5>
              <p>We work for your objectives, difficulties, and aspirations.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="work-section">
              <h4>02</h4>
              <h5>Strategy for Content:</h5>
              <p>We engage your audience, ensuring purposeful content.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
          <div className="work-section">
              <h4>03</h4>
              <h5>Make Content:</h5>
              <p>We create content that captivates, resonates & gives essence.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
          <div className="work-section">
              <h4>04</h4>
              <h5>Ads released:</h5>
              <p>We work with strategic placement of Released Ads.</p>
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

  .first-div {
    border: none;
    padding: 50px 0 0 50px;
    text-align: center;

    .colored-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .black-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
    }
    .circle {
      width: 11%;
      height: 84px;
      background-color: #5cd4b9;
      border-radius: 50px;
      margin: -6% 0 0 29%;
    }

    .paragraph {
      font-size: 17px;
      color: #6e6e6e;
      padding: 0 50px 0 77px;
      margin-top: -20px;
    }
  }

  .work-row {
    padding: 30px 50px 0 50px;
  }
  .work-sec {
    height: 250px;
    border-radius: 30px;
    background-color: #147888;
    padding: 30px 37px 0 40px;
    color: white;
    h5 {
      font-weight: 600;
      padding-top: 10px;
      font-size: 20px;
      line-height: 1.3em;
      color: white;
    }
    p {
      font-size: 18px;
      color: #ffffffd4;
    }
  }
  .work-section {
    border: 1px solid #dadada;
    height: 250px;
    border-radius: 30px;
    padding: 30px 37px 0 40px;
    color: #147888;
    margin: 5px;
    &:hover{background-color:#F3F3F3;
    transition:1s}
    h5 {
      font-weight: 600;
      padding-top: 10px;
      font-size: 20px;
      line-height: 1.3em;
      color: #2d2d2d;
    }
    p {
      font-size: 18px;
      color: #6e6e6e;
    }
  }

  
  @media (max-width: 567px) {
    .first-div {
    padding: 20px 0 0 10px;
    .circle {
      width: 22%;
    margin: -6% 0 0 19%;
}

 .paragraph {
    padding: 0 50px 0 55px;
    margin-top: -50px;
}
}

 .work-row {
    padding: 30px 10px 0 10px;
    .work-sec {
    height: 219px;
}
    .work-section {
  margin-top:30px;
  height: 219px;
}
}
/* .row {
      margin-right: 0;
    } */

  }

@media (min-width: 567px) and (max-width: 992px){
  .first-div {
    padding: 10px 0 0 0px;
    .circle {
    height: 77px;
}
}

.work-row {
    padding: 10px 10px 0 10px;
}

  }
`;
