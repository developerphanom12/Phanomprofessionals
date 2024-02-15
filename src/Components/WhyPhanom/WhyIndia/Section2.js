import React from "react";
import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Why Employers </span>{" "}
            <span className="text">Select Indian </span>
            <span>Workers</span>
            <p>
              To meet specific skill requirements as well as for having the cost
              effective solutions with the favourable exchange rates, the Indian
              workers complete the task diligently and on time without dragging
              it more.
            </p>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Superpowerful Talent</p>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    In all of the world's major nations, there is a severe skill
                    shortage due to the constantly rising demand.
                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Businesses are forced to search outside of their geographic
                    areas for talent.
                  </span>
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>
                    India is the most obvious and safest option for firms to
                    choose from, as it has an abundance of talent and favorable
                    relations with other nations.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Quality Talent</p>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Companies now have the chance to hire highly qualified and
                    experienced individuals from all over the world without
                    having to relocate due to remote cultures.{" "}
                  </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Indian talent is highly sought after in the talent war
                    because they are already running some of the largest tech
                    companies in the world, including Google, IBM, Adobe,
                    Chanel, Vimeo, Microsoft, HubSpot, FedEx, and more. They are
                    well-known for being adaptive, resilient, and resourceful,
                    which helps them succeed wherever they work.
                  </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>
                    They are therefore the top option for hiring the best
                    talent.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Cost Advantage</p>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Attracting and keeping talent—which is already in short
                    supply—is the main focus of the talent war.
                  </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Because of this, the companies have a responsibility to
                    provide better packages, alluring bonuses, and extra perks
                    and benefits.which is now so widespread that businesses no
                    longer have a competitive advantage from it.
                  </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>
                    Due to its abundance of talent and status as a developing
                    nation, India pays its talent far less than developed
                    nations do. Because of this, hiring talent from India is a
                    dream come true for businesses looking to pay fairly.
                  </span>
                </div>
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

  .text_area {
    margin-bottom: 30px;
    padding: 20px 50px;
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
    p {
      text-align: center;
      color: #6e6e6e;
      padding: 20px;
      word-spacing: 1px;
    }
  }
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div {
      padding: 50px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;
      &:hover {
        background-color: #dadada4f;
      }
      p {
        font-size: 25px;
        font-weight: bold;
        margin: 0;
      }
      .mini_block {
        display: flex;
        .border-bottom {
          padding-bottom: 30px;
          border-bottom: 1px solid #dadada;
        }
        svg {
          color: #147888;
          width: 20px;
          height: 20px;
          font-weight: 600;
          margin: 10px;
        }
      }
    }
  }
`;
