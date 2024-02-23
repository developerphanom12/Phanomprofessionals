import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import styled from "styled-components";
import pro from "../../Images/Boyspic.png";
import {
  IoIosMenu,
  IoMdHeart,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { FaCheck, FaRegClock, FaShareAlt } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { TbRefresh } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Page1() {
  return (
    <Root>
      <div className="main_section">
        <div className="main_barr">
          <div>
            <IoHomeOutline /> / Graphics & Design / Website Design / Website
            UI/UX Design
          </div>
          <div className="heading_point">
            <h2>I will create innovative website design or website mockup</h2>
          </div>
          <div className="profile_contain">
            <div className="pro_img">
              <img src={pro} alt="img" />
            </div>
            <div className="pro_detail">
              <p>NameOfPerson</p>
            </div>
          </div>
          <div>Sliders</div>
          <div>Loved about slider</div>
          <div>
            <h5> About this gig</h5>
            <p>
              Greetings as a experienced revision of WordPress , Shopify custom
              built CMS with an over 3 years in web development i have started
              here and i believe there is no other better way than for you to
              hire a guy with both front end and backend web development and
              designing skills to grasp and portray for your website
            </p>
          </div>
        </div>
        <div className="side_barr">
          <div className="upper_side">
            <IoIosMenu /> <IoMdHeart />
            <button className="count">121</button>{" "}
            <button>
              <FaShareAlt />
            </button>{" "}
            <button>
              <SlOptions />
            </button>
          </div>
          <div className="plan_area">
            <div className="plan_header">
              <div className="basic">Basic</div>
              <div className="standard">Standard</div>
              <div className="premium">Premium</div>
            </div>
            <div className="content_area">
              <div className="content_text_area">
                <h4>
                  $20000 <IoMdInformationCircleOutline />
                </h4>
                <span> website developer and designer</span>
                <p>
                  will fix any bugs or make changes depending on client requests
                </p>
                <div className="time_area">
                  <div>
                    <b>
                      <FaRegClock /> 2 Days Delivery
                    </b>
                    <b>
                      <TbRefresh /> Unlimited Revisions
                    </b>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <FaCheck /> 2 pages{" "}
                      </li>
                      <li>
                        <FaCheck /> 1 custom asset
                      </li>
                      <li>
                        <FaCheck /> Responsive design
                      </li>
                      <li>
                        <FaCheck /> Content upload
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="continue_button">
                <button>
                  Continue <FaArrowRightLong />
                </button>
                <span>Compare Packages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 30px;
  border-bottom: 1px solid lightgray;
  font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  .main_section {
    display: flex;
    .main_barr {
      display: flex;
      flex-direction: column;
      margin-right: 100px;
      .heading_point {
        padding: 0px 0px 16px;
      }
      .profile_contain {
        display: flex;
        gap: 20px;
        .pro_img {
          img {
            width: 40px;
            height: 40px;
            border-radius: 50px;
          }
        }
        .pro_detail {
          display: flex;
          align-items: center;
          p {
            margin: 0;
          }
        }
      }
    }

    .side_barr {
      display: flex;
      flex-direction: column;
      width: 100%;
      .upper_side {
        display: flex;
        padding: 0px 0px 16px;
        margin: 0px 0px 12px;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        svg {
          width: 20px;
          height: 20px;
          color: #74767e;
        }
        button {
          border: 1px solid #e4e5e7;
          color: #222325;
          padding: 3px 15px;
          border-radius: 5px;
          background-color: white;
          svg {
            width: 16px;
            height: 16px;
            color: #222325;
          }
        }
        .count {
          border: 1px solid #dadbdd;
          border-radius: 3px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #222325;
          font-size: 14px;
          padding: 2px 10px;
          position: relative;
        }
      }
      .plan_area {
        display: flex;
        flex-direction: column;
        .plan_header {
          display: flex;
          border: 1px solid lightgray;
          .standard {
            border-left: 1px solid lightgray;
            border-right: 1px solid lightgray;
            font-size: 16px;
            width: 140px;
            padding: 16px;
            color: #74767e;
            cursor: pointer;
            font-weight: 600;
          }
          .basic,
          .standard,
          .premium {
            -webkit-box-flex: 1;
            background-color: #fafafa;
            border: 1px solid #dadbdd;
            border-left: none;
            color: #74767e;
            cursor: pointer;
            -webkit-flex: 1 1;
            -ms-flex: 1 1;
            flex: 1 1;
            font-size: 16px;
            font-weight: 700;
            padding: 16px;
            text-align: center;
            border-bottom: 3px solid #fff;

            &:hover {
              border-bottom: 3px solid #222325;
              color: #222325;
            }
          }
        }
      }
      .content_area {
        padding: 32px 0px 0px;
        border: 1px solid lightgray;
        border-top: none;

        .content_text_area {
          display: flex;
          flex-direction: column;
          padding: 10px 24px;
          h4 {
            display: flex;
            font-weight: 600;
            gap: 10px;
            font-size: 24px;
            align-items: baseline;
            color: #404145;
            svg {
              width: 20px;
              height: 20px;
            }
          }
          p {
            font-size: 16px;
            margin: 24px 5px 10px 5px;
          }
          span {
            font-size: 20px;
            font-weight: 400;
            color: #404145;
            line-height: 24px;
          }
          .time_area {
            display: flex;
            flex-direction: column;
            b {
              margin-left: 8px;
              color: #62646a;
              font-size: 14px;

              svg {
                width: 20px;
                height: 20px;
              }
            }
            ul {
              list-style: none;
              margin: 0;
              padding: 10px;
              li {
                font-size: 14px;
                color: #95979d;
              }
            }
          }
        }
        .continue_button {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          color: #404145;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 20px;
          button {
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #000;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            font-size: 16px;
            font-weight: 600;
            line-height: 100%;
            padding: 12px 24px;
            position: relative;
            text-align: center;
            text-decoration: none;
            -webkit-transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
            transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
            svg {
              float: right;
            }
          }
          span {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            display: flex;
            -webkit-justify-content: center;
            justify-content: center;
            padding-top: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
