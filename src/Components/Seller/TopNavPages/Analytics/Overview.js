import React from "react";
import styled from "styled-components";
import Mainchart from "./charts/MainChart";

export default function Overview() {

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <div className="border_div">
              <div className="heading">
                <h4>Earnings to date</h4>
                <span>₹0</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="border_div">
              <div className="heading">
                <h4>Avg. selling price</h4>
                <span>₹0</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="border_div">
              <div className="heading">
                <h4>Order completion</h4>
                <span>100%</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="border_div">
              <div className="heading">
                <h4>On-time delivery</h4>
                <span>100%</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="border_div">
              <div className="heading">
                <h4>Orders completed</h4>
                <span>0</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="border_div">
              <div className="heading">
                <h4>Earned in March</h4>
                <span>₹0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
      </div>
      <Mainchart/>
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 30px;
  .border_div {
    border: 1px solid #efeff0;
    padding: 20px 0;
    text-align: center;
    .heading {
      h4 {
        font-size: 12px;
        line-height: 20px;
        color: #404145;
        font-weight: 700;
      }
      span {
        font-size: 24px;
        color: #62646a;
        font-weight: 400;
      }
    }
  }
`;
