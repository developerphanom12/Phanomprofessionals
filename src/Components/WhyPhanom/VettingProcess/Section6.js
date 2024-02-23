import React from "react";
import styled from "styled-components";
import chainpic from "../../../Components/Images/chainimg.png";

export default function Section6() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row pt-3">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Process to follow to get our </span> <span className="text"> Phanom Professionals </span>{" "}
            <span>services:</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <img src={chainpic} alt="img" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 segment">
            {/* <p> Get in touch with us.</p> */}
            <span>
            Get in touch with us. 
            </span>
          </div>
          <div className="col-lg-4 col-md-12 col-12 segment">
            {/* <p>Tеchnical aptitudеs:</p> */}
            <span>
            Contact our In house expertise which are available 24/7
            </span>
          </div>
          <div className="col-lg-4 col-md-12 col-12 segment">
            {/* <p>Chеck thе Mood:</p> */}
            <span>
            They will help you further in guiding in knowing about our facilities properly

            </span>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  text-align: center;
  padding:0 50px;
  img {
    width: 100%;
  }
  .text_div {
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
    padding: 20px;
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
    padding:0;

 .text_div {
    padding:0; 
}

.pt-3 {
    padding-top:0! important;
}

.segment {
    padding: 5px;
}
  }

  @media (min-width: 567px) and (max-width: 992px){
    padding:0;

    .text_div {
    padding:0; 
}

.pt-3 {
    padding-top:0! important;
}

.segment {
    padding: 5px;
}
  }
`;
