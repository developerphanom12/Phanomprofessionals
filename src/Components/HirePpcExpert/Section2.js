import React from "react";
import styled from "styled-components";
import number from "../Images/numbring.png";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-5  col-md-12 col-12 segment">
            <div className="mini_div">
              <p>
                Would you like to collaborate with a dedicated, knowledgeable,
                and culturally appropriate PPC specialist?
              </p>
              <span>
                We make sure your company gets the best candidate by screening
                over 200,000 applicants for behavioral, linguistic, and
                technical skills.
              </span>
            </div>
          </div>
          <div className="col-lg-2  col-md-12 col-12">
            <h1>How ?</h1>
            <img src={number} alt="img" />
          </div>
          <div className="col-lg-5  col-md-12 col-12 segment">
            <div className="mini_div">
              <p>Sturdy Technical Foundation</p>
              <span>
                through technical assessments created for the job role in
                compliance with international standards.
              </span>
            </div>
            <div className="mini_div">
              <p>Excellent Communication Skills</p>
              <span>
                Test speech inflections with a premium AI-powered English
                communication platform.
              </span>
            </div>
            <div className="mini_div">
              <p>Culturally Sensitive</p>
              <span>
                Assessed for their ability to adjust and understanding of the
                conditions necessary for gainful employment in a global context.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  h1 {
    text-align: center;
    color: #147888;
    font-weight: bold;
  }
  .segment {
    margin-top: 80px;
    padding: 60px 10px 10px 10px;
    .mini_div {
      padding: 20px;
      margin-bottom: 20px;

      p {
        font-size: 20px;
        font-weight: bold;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
        padding-top: 30px;
      }
    }
  }
`;
