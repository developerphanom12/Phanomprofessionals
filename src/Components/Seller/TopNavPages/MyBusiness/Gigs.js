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
            </Switch>Accepting Custom orders
          </div>
        </div>
        <div></div>
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
  }
`;
