import React from "react";
import styled from "styled-components";
import ind1 from "../../../Components/Images/ind1.png";
import ind2 from "../../../Components/Images/ind2.png";
import ind3 from "../../../Components/Images/ind3.png";
import ind4 from "../../../Components/Images/ind4.png";
import ind5 from "../../../Components/Images/ind5.png";
import ind6 from "../../../Components/Images/ind6.png";
import ind7 from "../../../Components/Images/ind7.png";
import ind8 from "../../../Components/Images/ind8.png";
import ind9 from "../../../Components/Images/ind9.png";
import ind10 from "../../../Components/Images/ind10.png";
import ind11 from "../../../Components/Images/ind11.png";
import ind12 from "../../../Components/Images/ind12.png";
import ind13 from "../../../Components/Images/ind13.png";
import ind14 from "../../../Components/Images/ind14.png";
import ind15 from "../../../Components/Images/ind15.png";
import ind16 from "../../../Components/Images/ind16.png";
import ind17 from "../../../Components/Images/ind17.png";
import ind18 from "../../../Components/Images/ind18.png";
import ind19 from "../../../Components/Images/ind19.png";
import ind20 from "../../../Components/Images/ind20.png";

export default function Section3() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>India is home to many </span>{" "}
            <span className="text"> gifted people </span>
            <span>who are already changing the world.</span>
         
            <p>
              Indians currently manage a number of the largest corporations in
              the world. Here are a few illustrations.
            </p>
           
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12 segment">
            <div>
              <img src={ind1} alt="img" />
              <img src={ind11} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind2} alt="img" />
              <img src={ind12} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind3} alt="img" />
              <img src={ind13} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind4} alt="img" />
              <img src={ind14} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind5} alt="img" />
              <img src={ind15} alt="img" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-12 col-12 segment">
            <div>
              <img src={ind6} alt="img" />
              <img src={ind16} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind7} alt="img" />
              <img src={ind17} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind8} alt="img" />
              <img src={ind18} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind9} alt="img" />
              <img src={ind19} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div>
              <img src={ind10} alt="img" />
              <img src={ind20} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;

  .text_area {
    margin-bottom: 30px;
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
    width: 19.67%;
  }
  img {
    width: 200px;
  }
`;
