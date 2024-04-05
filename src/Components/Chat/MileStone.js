import React from "react";
import styled from "styled-components";

export default function MileStone() {
  return (
    <Root>
      <h5>Choose how you want to get paid</h5>

      <ul>
        <span>
          {" "}
          Get paid in full once the project is completed, or break it into
          smaller chunks, called milestones, to get paid as you go.
        </span>
        <li>
          Single Payment
          <span>Get paid in full after each order is completed.</span>
        </li>
        <li>
          Milestone
          <span>
            Work in gradual steps and get paid for each completed milestone.
          </span>
        </li>
      </ul>
    </Root>
  );
}

const Root = styled.section`
  h5 {
    padding: 10px;
    background: #ccc;
  }
  ul {
    padding: 0;
    list-style: none;
  }
`;
