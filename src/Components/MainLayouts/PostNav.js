import React from "react";
import styled from "styled-components";
import logo1 from "../Images/logo_final_web.webp";
import { IoSearch } from "react-icons/io5";

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
        <div>Notification</div>
        <div>Orders</div>
        <div>Profile</div>
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
      padding: 10px;
      img {
        width: 150px;
      }
    }
    .search_bar {
      border: 1px solid #c5c6c9;
      border-radius: 10px;
      color: #62646a;
      width: 55%;
      margin: 10px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .svg_search {
        color: white;
        background-color: black;
        padding: 10px 15px;
        margin: 0px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        svg{
          font-size: 18px;
        }
      }
      input {
        border: none;
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
