import React from "react";
import styled from "styled-components";
import bgg from "../../../Images/pink.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import pro from "../../../Images/pro.webp";
import { MdCheckCircle } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function Level() {
  return (
    <Root>
      <div className="bg_img">
        <div className="bg_content">
          <h3>Level overview</h3>

          <div className="d-flex">
            <p>How the level system works</p>
            <AiOutlineQuestionCircle />
          </div>
        </div>
      </div>

      <div className="main_div">
        <div className="sub_div_one">
          <div className="logo">
            <img src={pro} />
          </div>

          <div className="tracker_div">
            <h4>Progress tracker</h4>
            <div className="tick_logo">
              <MdCheckCircle />
              <MdCheckCircle />
              <MdCheckCircle style={{ color: "rgb(29, 191, 115)" }} />
              <MdCheckCircle />
              <MdCheckCircle />
            </div>
            <p>It’s official! You’re making progress.</p>
          </div>
        </div>

        <div className="sub_div_two">
          <h4>My performance metrics</h4>
          <p>
            Keep an eye on these stats to monitor your progress in the level
            system.
          </p>
          <div className="score_div">
            <div className="score">
              <div className="score_heading">
                <h5>Success score</h5>
              </div>
              <h3>-</h3>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  step={10}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Box>
              <div className="quality_div">
                <p>Quality for next level: 5</p>
                <div className="arrow">
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>

            <div className="score">
              <div className="score_heading">
                <h5>Rating</h5>
              </div>
              <h3>-</h3>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  step={10}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Box>
              <div className="quality_div">
                <p>Quality for next level: 4:4</p>
                <div className="arrow">
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>

            <div className="score">
              <div className="score_heading">
                <h5>Response rate</h5>
              </div>
              <h3>100%</h3>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  step={10}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Box>
              <div className="quality_div">
                <p>Quality for next level:80</p>
                <div className="arrow">
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>

            <div className="score">
              <div className="score_heading">
                <h5>Orders</h5>
                <p>
                  <b>0</b>/5
                </p>
              </div>
              <div className="quality_div">
                <div className="arrow">
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>

            <div className="score">
              <div className="score_heading">
                <h5>Unique clients</h5>
                <p>
                  <b>0</b>/3
                </p>
              </div>
              <div className="quality_div">
                <div className="arrow">
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>

            <div className="score">
              <div className="score_heading">
                <h5>Eanings</h5>
                <p>
                  <b>0</b>/3
                </p>
              </div>
              <div className="quality_div">
                <div className="arrow">
                  <IoIosArrowRoundForward />
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
  .bg_img {
    height: 200px;
    width: 100%;
    background-image: url(${bgg});
    background-size: 100% 100%;

    .bg_content {
      display: flex;
      justify-content: space-between;
      padding: 50px 40px;
      h3 {
        font-size: 28px;
        color: #fff;
        font-weight: 700;
      }
      p {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
      }
      svg {
        color: white;
        margin: 4px 0 0 4px;
      }
    }
  }

  .main_div {
    display: flex;
    padding: 0 50px;
    gap: 50px;
    margin-top: -75px;

    .sub_div_one {
      width: 25%;
      padding: 25px 30px 16px;
      box-shadow: 0 0.14px 2.29266px rgba(0, 0, 0, 0.032),
        0 0.37px 4.42626px rgba(0, 0, 0, 0.048), 0 3px 7px rgba(0, 0, 0, 0.09);
      background-color: #fff;
      border-radius: 10px;

      .logo {
        display: flex;
        justify-content: center;
        img {
          width: 110px;
          height: 110px;
          border-radius: 50px;
          box-shadow: 0 0.14px 2.29266px rgba(0, 0, 0, 0.032),
            0 0.37px 4.42626px rgba(0, 0, 0, 0.048),
            0 3px 7px rgba(0, 0, 0, 0.09);
        }
      }

      .tracker_div {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        margin-top: 30px;

        h4 {
          font-size: 16px;
          font-weight: 700;
        }

        .tick_logo {
          display: flex;
          justify-content: center;
          gap: 5px;
          svg {
            color: rgb(181, 182, 186);
            width: 18px;
            height: 18px;
          }
        }

        p {
          font-size: 12px;
          color: #74767e;
          margin-top: 10px;
          font-weight: 400;
        }
      }
    }

    .sub_div_two {
      width: 75%;
      padding: 35px 30px 16px;
      box-shadow: 0 0.14px 2.29266px rgba(0, 0, 0, 0.032),
        0 0.37px 4.42626px rgba(0, 0, 0, 0.048), 0 3px 7px rgba(0, 0, 0, 0.09);
      background-color: #fff;
      border-radius: 10px;
      height: 100%;
      h4 {
        color: #222325;
        font-size: 20px;
        font-weight: 700;
      }
      p {
        font-size: 16px;
        color: #74767e;
        font-weight: 400;
      }
      .score_div {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 25px;

        .score {
          border: 1px solid #e1e1e1;
          width: 31%;
          border-radius: 10px;
          padding: 24px;
          .score_heading {
            display: flex;
            justify-content: space-between;
            h5 {
              font-size: 16px;
              color: #222325;
              font-weight: 600;
            }
            p {
            }
          }
          h3 {
            font-size: 25px;
            color: #222325;
            font-weight: 600;
          }

          .quality_div {
            display: none;
            p {
              font-size: 15px;
              color: #74767e;
              margin-top: 10px;
              font-weight: 500;
              border-left: 2px solid rgb(29, 191, 115);
              padding-left: 5px;
            }
            .arrow {
              display: flex;
              justify-content: end;
              img,
              svg {
                height: 42px;
                width: 42px;
                border: 1px solid black;
                border-radius: 5px;
                padding: 0 10px;
              }
            }
          }
          &:hover .quality_div {
            display: block;
          }
        }
      }

      .css-7o8aqz-MuiSlider-rail {
        background-color: #cdc7c7;
        height: 7px;
      }

      .css-ltlhnc-MuiSlider-root {
        width: 50%;
      }

      .css-hzp7sc-MuiSlider-mark {
        background-color: unset;
      }

      .css-ttgsjq-MuiSlider-track {
        border: unset;
        background-color: unset;
      }

      .css-1as9v07-MuiSlider-thumb {
        width: 2px;
        height: 15px;
        border-radius: unset;
        background-color: rgb(29, 191, 115);
      }

      .css-1ucwjgd-MuiSlider-markLabel {
        top: 5px;
      }

      .css-1bvr8oc-MuiSlider-markLabel {
        top: 5px;
        margin-left: 17px;
      }
    }
  }
`;
