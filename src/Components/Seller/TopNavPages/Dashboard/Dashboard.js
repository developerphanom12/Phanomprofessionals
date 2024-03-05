import React from "react";
import styled from "styled-components";
import profile from "../../../Images/Boyspic.png";
import { FaStar } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { FcApproval } from "react-icons/fc";

export default function Dashboard(){
  return (
    <Root>
      <div className="main_div">
        <div className="main_div_one">
          <div className="seller_performance">
            <div className="profile_detail">
              <div>
                <img src={profile}></img>
              </div>
              <div>
                <a href="/">developerphanom...</a>
              </div>
            </div>
            <div class="profile_spec">
              <p className="level">My level</p>
              <p className="seller">New Seller</p>
            </div>
            <div className="line"></div>
            <div className="score">
              <p className="score_content">Success score</p>
              <p className="score_hypen">-</p>
            </div>
            <div className="score">
              <p className="score_content">Rating</p>
              <div className="star_maindiv">
                <FaStar />
                <p className="score_hypen">-</p>
              </div>
            </div>
            <div className="score">
              <p className="score_content">Response rate</p>
              <p className="score_hypen">-</p>
            </div>
            <div className="btn">
              <a href="/">Go to level overview</a>
            </div>
          </div>

          <div className="seller-dashboard-wrapper">
            <div className="score">
              <p className="score_content">Earned in March</p>
              <div className="star_maindiv">
                <LuDollarSign />

                <p className="score_hypen">0</p>
              </div>
            </div>
          </div>

          <div className="seller-dashboard-inbox">
            <div className="score">
              <p className="score_content">Inbox</p>
              <p className="score_hypen">View All</p>
            </div>
          </div>
        </div>
        <div className="main_div_two">
          <div className="active_order">
            <div className="active_content">
              <h3>Active orders</h3>
              <span> - 0 ($0)</span>
            </div>
            <div className="dropdown_list">
              <select>
                <option>Active orders (0)</option>
                <option>Completed</option>
                <option>Canceled</option>
              </select>
            </div>
          </div>

          <div className="upgrade_content">
            <span>Upgrade Your Business</span>
            <hr />
          </div>

          <div className="steps_main_div">
            <h4>3 steps to become a top seller on Fiverr</h4>
            <p>
              The key to your success on Fiverr is the brand you build for
              yourself through your Fiverr reputation. We gathered some tips and
              resources to help you become a leading seller on Fiverr.
            </p>
            <ul className="keys-container">
              <li>
                <FcApproval />
                <strong className="title">Get noticed</strong>
                <div className="text">
                  Tap into the power of social media by <b>sharing your Gig,</b>{" "}
                  and{" "}
                  <a href="/" target="_blank">
                    get expert help
                  </a>{" "}
                  to grow your impact.
                </div>

                <div className="btn_container">
                  <a href="/" target="_blank">
                    Share Your Gigs
                  </a>
                </div>
              </li>

              <li>
                <FcApproval />
                <strong className="title">Get more skills & exposure</strong>
                <div className="text">
                  Hone your skills and expand your knowledge with online
                  courses. You’ll be able to offer more services and{" "}
                  <b>gain more exposure</b> with every course completed.
                </div>
                <div className="btn_container_two">
                  <a href="/" target="_blank">
                    Explore Learn
                  </a>
                </div>
              </li>

              <li>
                <FcApproval />
                <strong className="title">Become a successful seller!</strong>
                <div className="text">
                  Watch this free online course to learn how to create an
                  outstanding service experience for your buyer and
                  <b>grow your career </b> as an online freelancer.
                </div>
                <div className="btn_container_three">
                  <a href="/" target="_blank">
                    Watch Free Course
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #f5f5f5;
  /* / {
    padding:0;
    margin:0;
  } */
 .main_div {
    display: flex;
    padding: 20px 20px 0;
  }
  .main_div_one {
    width: 25%;

    .seller_performance {
      background: #fff;
      padding: 1px 20px 30px;
      .profile_detail {
        padding-top: 24px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          height: 60px;
          width: 60px;
          margin-right: 20px;
          border-radius: 100%;
        }

        a {
          color: #62646a;
          font-size: 18px;
          text-decoration: none;
          font-weight: 700;
        }
      }
      .profile_spec {
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
        .level {
          color: #74767e;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
        }
        .seller {
          color: #74767e;
          font-size: 14px;
          line-height: 22px;
          font-weight: 700;
        }
      }
      .line {
        border: 1px solid #f5f5f5;
        width: 100%;
        margin-bottom: 20px;
      }
      .score {
        display: flex;
        justify-content: space-between;

        .score_content {
          color: #74767e;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
        }
        .score_hypen {
          color: #74767e;
          font-size: 16px;
          line-height: 22px;
          font-weight: 700;
          margin: 0;
        }
      }
      .star_maindiv {
        display: flex;
        align-items: center;
        img,
        svg {
          height: 12px;
          width: 12px;
        }
      }
      .btn {
        width: 100%;
        border: 1px solid #dadbdd;
        a {
          /* / padding: 10px 20px; / */
          font-size: 16px;
          line-height: 31px;
          text-decoration: none;
          font-weight: 600;
          color: black;
        }
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }

    .seller-dashboard-wrapper {
      background: #fff;
      padding: 20px 20px;
      margin-top: 20px;
      .score {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .score_content {
          color: #74767e;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }
        .score_hypen {
          color: #74767e;
          font-size: 16px;
          line-height: 22px;
          font-weight: 700;
          margin: 0;
        }
      }
      .star_maindiv {
        display: flex;
        align-items: center;
        img,
        svg {
          height: 15px;
          width: 15px;
        }
      }
    }

    .seller-dashboard-inbox {
      background: #fff;
      padding: 20px 20px;
      margin: 20px 0;
      .score {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .score_content {
          color: #74767e;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          margin: 0;
        }
        .score_hypen {
          color: #446ee7;
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          margin: 0;
        }
      }
    }
  }

  .main_div_two {
    width: 75%;
    margin: 0 0 30px 90px;

    .active_order {
      background: #fff;
      padding: 12px;
      border: 1px solid #efeff0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .active_content {
        display: flex;
        align-items: center;
        h3 {
          font-size: 18px;
          color: #222325;
          font-weight: 600;
          line-height: 42px;
          margin: 0;
        }
        span {
          color: #95979d;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
        }
      }
      .dropdown_list {
        select {
          padding:11px;
          border:1px solid #c5c6c9;
          color:#74767e;
        }
      }
    }

    .upgrade_content {
      display: flex;
      margin: 20px 0;
      align-items: center;
      span {
        color: #62646a;
        font-size: 15px;
        font-weight: 700;
        padding-right: 10px;
      }
      hr {
        width: 80%;
      }
    }

    .steps_main_div {
      background: #fff;
      border: 1px solid #e4e5e7;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 40px 32px 48px;
      h4 {
        font-size: 24px;
        line-height: 130%;
        color: #404145;
        font-weight: 700;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 24px;
        color: #74767e;
      }

      ul {
        list-style: none;
        list-style-image: none;
        margin: 0;
        padding: 0;
      }
      .keys-container {
        display: flex;
        gap: 35px;
        flex-wrap: wrap;
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          img,
          svg {
            height: 46px;
            width: 46px;
            margin-bottom: 12px;
          }
          .title {
            color: #404145;
            margin-bottom: 16px;
          }

          .text {
            color: #74767e;
            font-size: 15px;
            font-weight: 500;
          }

          a {
            color: #446ee7;
            text-decoration: none;
          }

          .btn_container,
          .btn_container_two,
          .btn_container_three {
            a {
              color: #446ee7;
              border: 1px solid #446ee7;
              padding: 12px 24px;
              border-radius: 4px;
              font-weight: 600;
              font-size: 16px;
              line-height: 100%;
              text-decoration: none;
              text-align: center;
              cursor: pointer;
              &:hover {
                color: #fff;
                background-color: #446ee7;
              }
            }
          }
          .btn_container {
            margin-top: 83px;
          }
          .btn_container_two {
            margin-top: 40px;
          }
          .btn_container_three {
            margin-top: 65px;
          }
        }
      }
    }
  }
`;
