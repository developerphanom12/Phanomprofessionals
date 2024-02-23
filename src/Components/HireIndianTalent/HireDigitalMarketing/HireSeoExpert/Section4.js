import React from "react";
import styled from "styled-components";
import number from "../../../Images/numbring.png";

export default function Section4() {
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div className="col-lg-8  col-md-12 col-12">
            <div className="h1_tag">
              <h1>It </h1>
              <h1 className="h1_div"> works </h1>
              <h1> this way </h1>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-5  col-md-12 col-12 segment">
            <div className="mini_div">
              <p>
                Do you want to еngagе a skillеd SEO Expеrt who is both
                intelligent and culturally appropriate?
              </p>
              <span>
                Our SEO specialists possess not only exceptional technical
                skills but also a keen understanding of cultural nuances. This
                unique combination brings many benefits to companies that choose
                to work with our team:
              </span>
            </div>
          </div>
          <div className="col-lg-2  col-md-3 col-12 pad_hide">
            <img src={number} alt="img" />
          </div>
          <div className="col-lg-5  col-md-12 col-12 segment">
            <div className="mini_div">
              <p>Wide Cultural Perspective</p>
              <span>
                With a deep understanding of various cultures, our SEO
                specialists can devise strategies that effectively reach diverse
                target audiences.
              </span>
            </div>
            <div className="mini_div">
              <p>Flexibility</p>
              <span>
                In the dynamic world of SEO, our specialists continually update
                their knowledge and stay on top of the latest trends and
                algorithm changes.
              </span>
            </div>
            <div className="mini_div">
              <p> Strategic Thinking</p>
              <span>
                Our team of SEO specialists possesses the valuable skill of
                strategic thinking, enabling them to develop comprehensive
                strategies that go beyond simple optimization.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 0 50px;
  .h1_tag {
    justify-content: center;
    display: flex;
    gap: 5px;
    .h1_div {
      text-align: center;
      color: #147888;
      font-weight: bold;
    }
  }
  .segment {
    margin-top: 40px;
    padding: 40px 10px 10px 10px;
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
  @media (max-width: 567px) {
    padding: 0;
    .segment {
      margin-top: 0;
      padding: 0;
    }
    .pad_hide {
      display: none;
    }

    .segment .mini_div {
      margin-bottom: 0;
      padding: 15px 20px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;

    .pad_hide {
      display: none;
    }

    .segment {
      margin-top: 0;
      padding: 0;
    }
    .segment .mini_div {
      margin-bottom: 0;
      padding: 15px 20px;
    }
  }
`;
