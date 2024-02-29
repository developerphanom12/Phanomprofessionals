import React from "react";
import styled from "styled-components";
import ind1 from "../../../Images/ind1.png";
import ind2 from "../../../Images/ind2.png";
import ind3 from "../../../Images/ind3.png";
import ind4 from "../../../Images/ind4.png";
import ind5 from "../../../Images/ind5.png";
import ind6 from "../../../Images/ind6.png";
import ind7 from "../../../Images/ind7.png";
import ind8 from "../../../Images/ind8.png";
import ind9 from "../../../Images/ind9.png";
import ind10 from "../../../Images/ind10.png";
import ind11 from "../../../Images/ind11.png";
import ind12 from "../../../Images/ind12.png";
import ind13 from "../../../Images/ind13.png";
import ind14 from "../../../Images/ind14.png";
import ind15 from "../../../Images/ind15.png";
import ind16 from "../../../Images/ind16.png";
import ind17 from "../../../Images/ind17.png";
import ind18 from "../../../Images/ind18.png";
import ind19 from "../../../Images/ind19.png";
import ind20 from "../../../Images/ind20.png";

export default function Section3() {
  return (
    <Root>
      <div className="container-fluid">
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
            <div className="fleexxx">
              <img src={ind1} alt="img" />
              <img src={ind11} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind2} alt="img" />
              <img src={ind12} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind3} alt="img" />
              <img src={ind13} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind4} alt="img" />
              <img src={ind14} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind5} alt="img" />
              <img src={ind15} alt="img" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-12 col-12 segment">
          <div className="fleexxx">
              <img src={ind6} alt="img" />
              <img src={ind16} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind7} alt="img" />
              <img src={ind17} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind8} alt="img" />
              <img src={ind18} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind9} alt="img" />
              <img src={ind19} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
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
    width: 245px;

    /* > div {
      display: flex;
      align-items: center;
      width: 100%;
    } */
  }
  img {
    width: 200px;
  }
  @media (max-width: 567px) {

     .segment {
    width: 100%;
}
    .fleexxx{
      display:flex;
      align-items:center;
      justify-content:center;
    }
    img{
      width:170px;
    }

    .text_area {
      margin-bottom: 0;
      padding: 10px 10px;
    }
  .text_area p {
   
   padding: 20px 0 0 0; 
   
}
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .text_area {
      margin-bottom: 0;
      padding: 10px 10px;
    }
    .segment {
    width: 242px;
}
  
  }
`;
