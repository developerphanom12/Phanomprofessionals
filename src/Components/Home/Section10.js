import React from "react";
import styled from "styled-components";
import { IoIosCall } from "react-icons/io";

export default function Section11() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6  col-12 first-div" data-aos="fade-up">
            <span className="black-content">Contact our </span>
            <span className="colored-content">in-house </span>
            <span className="black-content">team professionals</span>
            <div className="circle"></div>
          </div>
          <div className="col-lg-6  col-12 second-div">
            <p className="paragraph">
              We make the best business solutions that our clients aspire for
              with the best and inevitable innovation strategies.
              <div className="row">
              <div className="col-lg-4 col-md-4 col-6">
                <button>OUR SERVICES</button>
              </div>
              <div className="col-lg-6  col-md-6 col-6">
                <button className="btn-content">
                  <IoIosCall />
                  123 456 789
                </button>
              </div>
            </div>
            </p>
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
    padding: 100px 0 0 50px;
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
      width: 15%;
      height: 81px;
      background-color: #5cd4b9;
      border-radius: 50px;
      margin: -11% 0 0 0;
    }
  }
  .second-div {
    padding: 100px 0 0 0;
    .paragraph {
      font-size: 19px;
      color: #6e6e6e;
      padding-top: 30px;
    }
    button {
      font-size:12px;
      color: white;
      background-color: #147888;
      padding: 15px 30px;
      border: 0;
      letter-spacing: 3px;
      border-radius: 50px;
      margin-top:20px;
      &:hover {
        /* margin-top: -5px; */
        transform: translate(0, -10px);
        transition: 1s;
      }
    }
    .btn-content {
      font-size: 13px;
      color: #147888;
      padding: 15px 40px;
      background-color: #ffffffd4;
      border: 0;
      letter-spacing: 3px;
      svg {
        color: #147888;
        width: 40px;
        height: 20px;
      }
  }
}
@media (max-width: 567px) {
  .first-div {
  padding: 10px 0 0 10px;
 .circle {
    width: 25%;
    margin: -17% 0 0 0;
}
}
.second-div {
    padding: 0 0 0 10px;
    button {
    padding: 15px 15px;
}
 .btn-content {
    padding: 15px 0px;
}
}
.row {
      margin-right: 0;
    } 
}

@media (min-width: 567px) and (max-width: 992px){
  .first-div {
  padding: 10px 0 0 10px;
  .circle {
    width: 10%;
    margin: -4% 0 0 0;
}
  }

   .second-div {
    padding: 0 0 0 10px;
}
}
`;


