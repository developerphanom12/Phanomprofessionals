import React from "react";
import styled from "styled-components";
import svgg from "../../../Components/Images/svg.svg";

export default function Section4() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Services for </span>
            <span className="text">React Native </span> <span>Apps</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-5 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Consultation for React Native Apps</p>
                <span>
                  Use our professional React Native developers for full-provider
                  help.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>React Native App Development</p>
                <span>
                  Success testimonies of delivering React Native app improvement
                  offerings for iOS and Android.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-5 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>React Native UI/UX Development</p>
                <span>
                  Create innovative reviews with our UI/UX improvement team.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>React Native QA and Testing:</p>
                <span>
                  Thorough testing guarantees the most suitable efficiency and
                  overall performance.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-5 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Support and preservation for React Native</p>
                <span>
                  Keep your application up to date with brand-new tendencies.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>React Native Migration & Upgradation</p>
                <span>
                  Use our enterprise-leading expertise to seamlessly circulate
                  and update your apps.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
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
      padding: 0px 0px 40px 0px;
      display: flex;
      /* gap: 20px; */
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
