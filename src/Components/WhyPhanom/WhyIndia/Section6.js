import React from "react";
import styled from "styled-components";
import svgg from "../../../Components/Images/svg.svg";

export default function Section6() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>How is </span>
            <span className="text"> hiring Indian talent so </span>{" "}
            <span> incredibly simple with Phanom Professionals?</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Phanom’s Source</p>
                <span>
                  We draw talented people from India by offering the top 3
                  extremely alluring benefits.
                </span>
                <span>
                  <ul>
                    <li> Completely Remote Position</li>{" "}
                    <li> Exposure to a Global Company Culture</li>
                    <li>Opportunities for High Earnings</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Phanom Professionals Vet</p>
                <span>
                  We use our stringent vetting process to assess each
                  candidate's technical aptitude, behavioral skills, and
                  language skills.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Phanom Professionals Match</p>
                <span>
                  Through our skill matchmaking process, we match the job
                  requirements of the clients so that they get the most
                  qualified expert from us.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Phanom Manage</p>
                <span>
                  All employment contracts, payroll, IT support, HR support, and
                  other related tasks are handled by us.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "DM Sans", sans-serif;

  .text_div {
    margin-bottom: 0.7em;
    padding: 20px 30px;
    text-align: center;
    .text {
      color: #147888;
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    span {
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
  }
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div {
      word-spacing: 1px;
      letter-spacing: 0.1px;
      padding: 0px 0px 30px 0px;
      display: flex;
      border: 1px solid #147888;
      border-radius: 20px;
      &:hover {
        box-shadow: 1px 1px 5px 1px #147888;
        transition: 0.5s;
      }
      p {
        font-size: 2em;
        font-weight: 600;
        margin: 0;
        padding-bottom: 10px;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
        padding-bottom: 20px;
      }
      .number_div {
        color: #147888;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
      .tag_text {
        padding: 10px 0px;
      }
    }
  }
`;
