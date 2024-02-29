import React from "react";
import styled from "styled-components";
import { GlobalSlider, StyledInput, Switch } from "../../../../GlobalStyles";

export default function Gigs() {
  return (
    <Root>
      <div className="main_gig_sec">
        <div className="header_gig">
          <div>
            <h1>Gigs</h1>
          </div>
          <div>
            <Switch>
              <StyledInput type="checkbox" />
              <GlobalSlider />
            </Switch>
            Accepting Custom orders
          </div>
        </div>
        <div className="tab_button_area">
          <div className="side_btn">
            <button>ACTIVE</button>
            <button>PENDING APPROVAL</button>
            <button>REQUIRES MODIFICATION</button>
            <button>DRAFT</button>
            <button>DENIED</button>
            <button>PAUSED</button>
          </div>
          <div className="create_btn">
            <button>CREATE A NEW GIG</button>
          </div>
        </div>
        <div className="gig_table">table</div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f7f7f7;
  padding: 25px 25px 100px 25px;
  .main_gig_sec {
    display: flex;
    flex-direction: column;
    .header_gig {
      display: flex;
      justify-content: space-between;
      h1 {
        font-family: "macan", "helvetica neue", Helvetica, Arial, sans-serif;
        font-weight: 300;
        color: #404145;
      }
    }
    .tab_button_area {
      display: flex;
      justify-content: space-between;
      .side_btn {
        display: flex;
        gap: 10px;
        padding: 10px;
        color: #999;
        font-size: 14px;
        line-height: 42px;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        button {
          border: none;
          background-color: transparent;
          color: #404145;
          padding: 10px;
        }
      }
      .create_btn {
        button {
          background-color: #1dbf73;
          font-weight: 700;
          color: #fff !important;
          border: 1px solid transparent;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 5px;
        }
      }
    }
  }
`;
