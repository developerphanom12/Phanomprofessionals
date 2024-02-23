import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>How Do You Hirе </span>{" "}
            <span className="text"> Our SEO </span>
            <span>Profеssionals?</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">Rather than going through traditional hiring processes that involve interviews, we have our in - house team of experts who possess proven records and exceptional skills. Instead of conducting formal interviews, we present our past projects and gather evaluations from our satisfied clients. This method enables us to showcase the excellence of our work directly to companies and customers, allowing them to assess our abilities through tangible outcomes and client approval.</p>
          </div>
        </div>
        
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background: #f3f3f3;
  padding:0 50px;
  p {
      text-align: center;
      color: #6e6e6e;
      padding: 20px;
      word-spacing: 1px;
    }
  .arrow {
    padding-top: 177px;
    text-align: center;
    svg {
      width: 40px;
      height: 40px;
      font-weight: 100;
    }
  }
  svg {
    color: #147888;
  }
  .text_area {
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
    display: flex;
    flex-direction: column;
    flex: 1;

    span {
      text-align: center;
      background-color: #147888;
      color: white;
      font-size: 14px;
      letter-spacing: 1.1px;
      padding: 7px;
      border-radius: 10px;
      border: none;
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      color: #6e6e6e;
      line-height: 1.7em;
    }
  }

  @media (max-width: 567px) {
    padding:0;
  .text_area {
    padding: 10px;
 }
 p {
 padding: 0; 
}
  }
  @media (min-width: 567px) and (max-width: 992px){
      padding:0;
  .text_area {
    padding: 10px;
 }
 p {
 padding: 0; 
}
  
  }
`;
