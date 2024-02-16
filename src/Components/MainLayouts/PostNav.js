import React from "react";
import styled from "styled-components";
import logo1 from "../Images/logo_final_web.webp";
import { IoSearch } from "react-icons/io5";
import { PiBellSimpleLight } from "react-icons/pi";
import { CiHeart, CiMail } from "react-icons/ci";
import logoimg from "../Images/Boyspic.png";

export default function PostNav() {
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
            <div>
              <PiBellSimpleLight />
            </div>
            <div>
              <CiMail />
            </div>
            <div>
              <CiHeart />
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
    .logo_img {
      img {
        width: 150px;
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

      .notify_div {
        justify-content: space-around;
        display: flex;
        > div {
          display: flex;
          align-items: center;
          height: 40px;
          width: 40px;
          justify-content: flex-end;
          cursor: pointer;
          svg {
            color: #62646a;
            width: 20px;
            height: 20px;
            font-weight: 600;
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
      .profile {
        img {
          border-radius: 50px;
          width: 35px;
          height: 35px;
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
