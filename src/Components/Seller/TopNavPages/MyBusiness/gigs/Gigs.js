import React, { useState } from "react";
import styled from "styled-components";
import { ToggleButton } from "../../../../../GlobalStyles";
import RenderPages from "./RenderPages";

export default function Gigs() {
  const [toggle, setToggle] = useState();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Root>
      <div className="main_gig_sec">
        <div className="header_gig">
          <div>
            <h1>Gigs</h1>
          </div>
          <div>
            <ToggleButton onClick={handleToggle}>
              {toggle ? "ON" : "OFF"}
            </ToggleButton>
            Accepting Custom orders
          </div>
        </div>
        <div>
          <RenderPages />
        </div>
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
      padding: 10px 0px;
      justify-content: space-between;
      h1 {
        font-family: "macan", "helvetica neue", Helvetica, Arial, sans-serif;
        font-weight: 300;
        color: #404145;
      }
    }
   
  }

  @media(max-width: 567px){
    padding: 25px 25px 25px 25px;
  }


`;
