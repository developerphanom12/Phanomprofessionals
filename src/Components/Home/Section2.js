import React from "react";
import styled from "styled-components";

export default function Section2() {
  return (
    <Root>
      <div className="container-fluid ">
        <div className="row">
          <div class="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8  col-md-12 col-12 first-div" data-aos="fade-up"> 
            <span className="first-content" >Elevating Business Triumphs:</span>
            <span className="second-content">
              Our Unique Approach to Success
            </span>
            <div className="circle"></div>
            <p className="paragraph">
              Transforms your businesses into brands, soaking them in a pool of
              success. Aims towards a day of achievement with our professional
              staff.
            </p>
          </div>
          <div class="col-lg-2  col-md-12 col-12"></div>
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

    .first-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      color: #147888;
    }
    .second-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
    }
    .circle {
      width: 11%;
      height: 84px;
      background-color: #5CD4B9;
      border-radius:50px;
      margin:-7% 0 0 29%;
    }

    .paragraph {
      font-size: 17px;
      color: #6e6e6e;
      padding: 0 50px 0 77px;
    }
  }

  @media (max-width: 567px) {
    .first-div {
    padding: 50px 0 0 0px;

    .first-content {
    font-size:30px;

}
 .second-content {
    font-size: 30px;
}
 .circle {
    width:25%;
    margin:-14% 0 0 29%;
}
.paragraph {

    padding: 0 5px 0 5px;
}

}
.row {
      margin-right: 0;
    }

  }

  @media (min-width: 567px) and (max-width: 992px){
    .first-div {
    padding: 50px 0 0 0;

  }

}
`;

