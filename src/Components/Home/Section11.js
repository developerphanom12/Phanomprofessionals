import React from "react";
import styled from "styled-components";

export default function Section11() {
  return (
    <Root>
      <div className="container-fluid ">
        <div className="row bg-color">
          <div className="col-lg-6 first-col">
            <div className="form-div">
              <span className="black-content">Experience </span>
              <span className="colored-content">Real </span>
              <span className="black-content">Results</span>
              <p className="paragraph">
                Partner with Phanom Internet Marketing Agency and scale your
                business.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="First Name*"></input>
                </div>
                <div className="col-lg-6 sec-input">
                  <input type="text" placeholder="Last Name*"></input>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-6">
                  <input type="number" placeholder="Phone*"></input>
                </div>
                <div className="col-lg-6 sec-input">
                  <input type="email" placeholder="Email Address*"></input>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Company/Organization*"
                  ></input>
                </div>
                <div className="col-lg-6 sec-input">
                  <input type="text" placeholder="Website*"></input>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <label>What services can we provide you?</label>
                  <div className="row">
                    <div className="col-lg-4">
                      <input type="checkbox"></input>
                      I have a bike
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-lg-12">
                  <label>What is your Budget?</label>
                  <br></br>
                  <select>
                    <option value="volvo"></option>
                    <option value="volvo">$500-$1000</option>
                    <option value="saab">$1000-$2000</option>
                    <option value="fiat">$2000-$3000</option>
                    <option value="audi">$3000-$5000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;
  background-color: #ffffffd4;

  .bg-color {
    background-color: #147888;
    margin-top: 50px;
  }
  .first-col {
    /* border: 1px solid black; */
    height: 600px;
    padding: 52px 0 0 50px;
  }

  .form-div {
    height: 500px;
    background-color: #f3f3f3;
    border-radius: 30px;
    /* text-align:center; */
    padding-top: 20px;
    padding-left: 30px;
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
    .paragraph {
      font-size: 13px;
      color: #6e6e6e;
      padding-top: 5px;
    }

    input {
      border: 1px solid #dadada;
      height: 50px;
      width: 90%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
    }
    .sec-input {
      margin-left: -22px;
    }

    ::placeholder {
      font-size: 14px;
      color: #6e6e6e;
      font-weight: 400;
    }

    label {
      font-size: 13px;
      color: #6e6e6e;
      padding-top: 5px;
      padding-left: 5px;
    }

    select {
      border: 1px solid #dadada;
      height: 50px;
      width: 90%;
      background-color: #f3f3f3;
      padding-left: 10px;
      border-radius: 5px;
    }

    option {
      font-size: 14px;
      color: #6e6e6e;
      font-weight: 400;
    }
  }
`;
