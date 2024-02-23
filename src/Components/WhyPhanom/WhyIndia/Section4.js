import React from "react";
import styled from "styled-components";

export default function Section4() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 col-12 text_area">
            <span>Why are </span> <span className="text">Indians </span>
            <span>
              {" "}
              the preferred workforce of global technology companies?
            </span>
            <p>
              Dedicated Indians put forth greater effort and commitment at work
              than do their international counterparts.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div className="segment">
              <span>Sensational</span>
              <p>
                Indians are passionate and ambitious people. They are more
                likely to stay with a company longer than others because they
                develop an emotional attachment to the business, its employees,
                and its location.
              </p>
            </div>
            <div className="segment">
              <span>Diligent</span>
              <p>
                From achieving high academic standing to passing demanding
                tests, Indians are instilled with the values of diligence and
                determination from an early age.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div className="segment">
              <span>Provide value</span>
              <p>
                Indians believe in adding value to everything they do and give
                it their all.
              </p>
            </div>
            <div className="segment">
              <span>Motivated</span>
              <p>
                Indians are motivated by a strong desire to achieve success and
                lead fulfilling lives.
              </p>
            </div>
            <div className="segment">
              <span>Helpful</span>
              <p>
                Being helpful is engrained in the beliefs and morals of the
                helpful Indians, and they extend their helpfulness to everyone
                they meet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
padding:0 50px;

  .text_area {
    margin-bottom: 30px;
    padding: 10px;
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
      color: #6e6e6e;
      padding: 20px 0px;
      font-size: 17px;
      word-spacing: 1px;
      line-height: 1.7em;
    }
  }
.segment{
    border-top: 2px solid #147888;
    padding: 20px 0px 30px 0px;
    span{
        font-size: 20px;
        font-weight: bold;
    }
    p {
      color: #6e6e6e;
      font-size: 17px;
      word-spacing: 1px;
      line-height: 1.7em;
    }
}

@media (max-width: 567px) {
  padding:0;
  .pt-5 {
 padding-top:0;
}
.text_area  {
   margin-bottom:0;

}
 .text_area p {
    padding-bottom:0;

}
 .segment {
    padding: 20px 0px 20px 0px;
}

}

@media (min-width: 567px) and (max-width: 992px){
  padding:0;
  .pt-5 {
 padding-top:0;
}
.text_area  {
   margin-bottom:0;

}
 .text_area p {
    padding-bottom:0;

}
 .segment {
    padding: 20px 0px 20px 0px;
}

}
`;
