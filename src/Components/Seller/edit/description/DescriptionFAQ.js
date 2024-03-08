import React from "react";
import TextEditor from "./TextEditor";
import styled from "styled-components";

export default function DescriptionFAQ() {
  return (
    <Root>
      <div className="main_div_section">
        <header>
          <h3>Description</h3>
          <p>Briefly Describe Your Gig</p>
        </header>
        <TextEditor />
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  width: 100%;
  .main_div_section {
    display: flex;
    flex-direction: column;
    width: 75vw;
    header {
      width: 100%;

      padding-top: 4px;
      color: #62646a;
      h3 {
        font-weight: 400;
        color: #62646a;
        padding-bottom: 20px;
        margin-bottom: 30px;
        border-bottom: 1px solid #dadbdd;
        font-size: 28px;
      }
      p {
        padding-top: 15px;
        padding-bottom: 20px;
      }
    }
     
  }
`;
