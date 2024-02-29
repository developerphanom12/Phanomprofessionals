import React, { useState } from "react";
import styled from "styled-components";
import logo1 from "../Images/logo_final_web.webp";
import { IoNotificationsOffOutline, IoSearch, IoVolumeHigh } from "react-icons/io5";
import { CiHeart, CiMail } from "react-icons/ci";
import logoimg from "../Images/Boyspic.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import {
  IoIosNotificationsOutline,
  IoMdSettings,
} from "react-icons/io";

export default function SellerNav() {
  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };
  return (
    <Post>
      <div className="main_div1">
        <div className="logo_img">
          <img src={logo1} alt="img" />
        </div>
        <div className="search_bar">
          <input placeholder="What service are you looking for Today" />
          <p className="svg_search">
            <IoSearch />
          </p>
        </div>
        <div className="notifyy">
          <div className="notify_div">
            <div className="msg">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Notification"
                onClick={toggleNotification}
              >
                <IoIosNotificationsOutline />
              </a>
              <Tooltip id="my-tooltip" />
              {showNotification && (
                <div className="message_div">
                  <div className="top">
                    {" "}
                    <IoIosNotificationsOutline /> Notifications (0){" "}
                  </div>
                  <div className="middle">
                    <IoNotificationsOffOutline />
                    {/* <IoNotificationsOutline /> */}
                    <h5>No Notifications</h5>
                    <p>
                      ​Browse our amazing catalog of Gigs or offer your talent
                      on Phanom.
                    </p>
                  </div>
                  <div className="bottom">
                    <div>
                    <IoVolumeHigh />
                      {/* <IoMdVolumeOff /> */}
                      <IoMdSettings />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="msg">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Message"
                onClick={toggleMessage}
              >
                <CiMail />
              </a>
              <Tooltip id="my-tooltip" />

              {showMessage && (
                <div className="message_div">
                  <div className="top">
                    {" "}
                    <CiMail /> Inbox (0){" "}
                  </div>
                  <div className="middle">
                    <IoNotificationsOffOutline />
                    {/* <IoNotificationsOutline /> */}
                    <h5>No Notification</h5>
                    <p>
                      ​Browse our amazing catalog of Gigs or offer your talent
                      on Phanom.
                    </p>
                  </div>
                  <div className="bottom">
                    <div>
                    <IoVolumeHigh />
                      {/* <IoMdVolumeOff /> */}
                      <IoMdSettings />
                    </div>
                    <span>See All In Inbox</span>
                  </div>
                </div>
              )}
            </div>
            <div className="mini">
              <a data-tooltip-id="my-tooltip" data-tooltip-content="Lists">
                <CiHeart />
              </a>
              <Tooltip id="my-tooltip" />
            </div>
          </div>
          <div className="orders">Orders</div>
          <div className="profile">
            <img src={logoimg} alt="img" />
          </div>
        </div>
      </div>
      <div className="main_div2">
        <div>
          <p>Graphics & Design</p>
        </div>
        <div>
          <p>Programming & Tech</p>
        </div>
        <div>
          <p>Digital Marketing</p>
        </div>
        <div>
          <p>Video & Animation</p>
        </div>
        <div>
          <p>Writing & Translation</p>
        </div>
        <div>
          <p>Music & Audio</p>
        </div>
        <div>
          <p>Business</p>
        </div>
        <div>
          <p>AI Services</p>
        </div>
        <div>
          <p>Consulting</p>
        </div>
      </div>
    </Post>
  );
}
const Post = styled.section`
  font: 400 16px/24px Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  .main_div1 {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
      flex-direction: column;
      width: 100%;
    }
    .logo_img {
      display: flex;
      img {
        width: 150px;
      }
      @media (max-width: 576px) {
        justify-content: flex-start;
        width: 100%;
      }
    }
    .search_bar {
      border: 1px solid #c5c6c9;
      border-radius: 4px;
      color: #62646a;
      width: 63%;
      margin: 10px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 576px) {
        width: 93%;
      }
      .svg_search {
        color: white;
        background-color: black;
        padding: 10px 15px;
        margin: 0px;
        height: 42px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        svg {
          font-size: 20px;
        }
      }
      input {
        border: none;
        width: 90%;
        padding: 0px 10px;
        word-spacing: 2px;
      }
    }
    .notifyy {
      display: flex;
      justify-content: space-around;
      width: 25%;
      color: #62646a;
      @media (max-width: 576px) {
        justify-content: space-between;
        width: 100%;
      }
      .notify_div {
        justify-content: space-around;
        display: flex;
        .mini,
        .msg {
          display: flex;
          align-items: center;
          height: 40px;
          width: 40px;
          justify-content: center;
          cursor: pointer;
          svg {
            color: #62646a;
            width: 20px;
            height: 20px;
            font-weight: 600;
          }
          &:hover {
            background-color: #ece9e9;
            border-radius: 50px;
          }
        }
        .msg {
          a {
            position: absolute;
          }
          .message_div {
            display: flex;
            border-radius: 5px;
            flex-direction: column;
            position: relative;
            top: 271px;
            height: 485px;
            width: 400px;
            z-index: 11;
            left: -190px;
            border: 1px solid #c5c6c9;
            background: white;
            .middle {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 10px;
              height: 100%;
              width: 400px !important;
              overflow-y: scroll;
              border-top: 1px solid #c5c6c9;
              border-bottom: 1px solid #c5c6c9;
              svg {
                color: #62646a;
                width: 30px;
                height: 30px;
                font-weight: 600;
                &:hover {
                  background-color: #ece9e9;
                  border-radius: 50px;
                }
              }
            }
            .bottom {
              display: flex;
              justify-content: space-between;
              svg {
                margin-right: 5px;
                size: 20px;
              }
              span {
                color: #446ee7;
                float: right;
                font-size: 14px;
                font-weight: 600;
                border-bottom: 2px solid #fff;

                &:hover {
                  border-bottom: 2px solid #446ee7;
                  cursor: pointer;
                }
              }
            }
            .top,
            .middle,
            .bottom {
              padding: 10px;
            }
          }
        }
      }
      .orders,
      .profile {
        cursor: pointer;
        align-items: center;
        display: flex;
        justify-content: space-around;
      }
      .orders {
        font-weight: 600;
        &:hover {
          color: green;
        }
      }
      .profile {
        display: flex;
        img {
          border-radius: 50px;
          width: 35px;
          height: 35px;
        }
        @media (max-width: 576px) {
          justify-content: flex-end;
          width: 100%;
        }
      }
    }
  }
  .main_div2 {
    padding: 8px 30px;
    color: #62646a;
    > div {
      padding: 0px 10px;
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;
      p {
        padding: 0px;
      }
    }
  }

  .main_div1,
  .main_div2 {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #c5c6c9;
  }
`;
