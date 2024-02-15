import React from "react";
import styled from "styled-components";
import number from "../../../Components/Images/numbring.png";

export default function Section3() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-5  col-md-12 col-12 segment">
            <div className="mini_div">
              <p>
                Hire a Dedicated Graphic Designer - Brilliant and Culturally
                Appropriate?
              </p>
              <span>
                Our screening procedure guarantees that candidates have a strong
                technical background, excellent communication skills, and
                cultural competence. Join the 200,000+ customers who have
                selected Phanom Professionals for their graphic design
                requirements
              </span>
              <br/>

            </div>
              <span className="span_btn" data-aos="fade-up">
                HIRE YOUR DREAM TEAM
              </span>
          </div>
          <div className="col-lg-2  col-md-12 col-12 img_sec">
            <h1>How ?</h1>
            <img src={number} alt="img" />
          </div>
          <div className="col-lg-5  col-md-12 col-12 segment">
            <div className="mini_div">
              <p>Sound Technical Foundation</p>
              <span>
                Detailed technical assessments tailored according to the job
                role's international standards.
              </span>
            </div>
            <div className="mini_div">
              <p>Exceptional Communication Skills</p>
              <span>
                Testing nuances of speech through a world-leading AI-powered
                English communication platform.
              </span>
            </div>
            <div className="mini_div">
              <p>Culturally Competent</p>
              <span>
                Assessed for their ability to adapt and understanding of what it
                takes to work in a global environment successfully.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;

  .img_sec {
    text-align: center;
  }
  h1 {
    text-align: center;
    color: #147888;
    font-weight: bold;
  }
  .segment {
    margin-top: 80px;
    padding: 60px 10px 10px 10px;
    .span_btn {
      margin: 20px 20px;
      text-align: center;
      background-color: #147888;
      color: white;
      font-size: 14px;
      letter-spacing: 1.1px;
      padding: 15px;
      border-radius: 10px;
      border: none;
      margin-bottom: 20px;
    }
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
        margin: 30px 0px;
      }
    }
  }
`;
