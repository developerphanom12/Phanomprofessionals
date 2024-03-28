import React, { useState } from "react";
import styled from "styled-components";
// import { GigButton } from "../../GlobalStyles";
import { FaSearch } from "react-icons/fa";
import profile from "../Images/Boyspic.png";
import Userone from "./Userone";

export default function Chat() {
  const [show, setShow] = useState(false);
  function Shower() {
    setShow(true);
  }
  return (
    <Root>
      <div className="tab_button_area">
        <div className="nav_tab">
          <div className="main_div">
            <div className="sub_one">
              <div className="d-flex justify-content-between">
                <p>All messages</p>
                <FaSearch />
              </div>
              <div onClick={Shower} className="d-flex align-items-center mt-4">
                <img src={profile} alt="img"></img>
                <div className="d-flex flex-column">
                  <span className="name">Name</span>
                  <span className="mail">Me.developerphanom</span>
                </div>
                <div>
                    {/* {/ {show &&  <Userone/>} /} */}
                </div>
              </div>
            </div>
            {/* <div className="sub_two">{show && <Userone />} </div> */}
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f7f7f7;
  padding: 30px;
  .main_div {
    display: flex;
    gap: 20px;

    .sub_one {
      border: 1px solid #dadbdd;
      width: 25%;
      height: 500px;
      border-radius: 20px;
      padding: 30px;
      p {
        color: #222325;
        font-size: 16px;
        font-weight: 600;
      }
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50px;
      }
      .name {
        color: #222325;
        font-size: 14px;
        font-weight: 700;
        /* / padding-top:3px; / */
      }
      .mail {
        font-weight: 400;
        color: #62646a;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .sub_two {
      border: 1px solid #dadbdd;
      width: 75%;
      height: 500px;
      border-radius: 20px;
    }
  }
`;
