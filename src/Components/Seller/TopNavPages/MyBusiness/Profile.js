import React, { useState } from "react";
import styled from "styled-components";
import profile from "../../../Images/Boyspic.png";
import { CreateButton } from "../../../../GlobalStyles";
import { CiEdit } from "react-icons/ci";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <Root>
      <div className="main_div1">
        <div className="profile_div">
          <div className="profile_image">
            <p><span>online</span></p>
            <img src={profile} />
          </div>
          <div className="username">
            <div className="user_button">
              <button>PhanomBoy</button>
              <CiEdit />
            </div>
            <b>@phanombuddy</b>
          </div>
          <div className="editing">
            <CiEdit onClick={toggleEdit} />
            {isEdit && (
              <div className="edit_page">
                <input placeholder="What's your story in one line?" />
                <div className="update_button">
                  <button className="button">Cancle</button>
                  <CreateButton>Update</CreateButton>
                </div>
              </div>
            )}
          </div>
          <div>
            <button>Preview Phanom Profile</button>
          </div>
          <div>
            <ul>
              <li>
                <span>From</span>
                <b>India</b>
              </li>
              <li>
                <span>Member Since</span>
                <b>Feb 24</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="description_div">ddes</div>
      </div>
      <div className="main_div2">
        <div className="header_pro_tab">
          <button>active</button>
          <button>Paused</button>
        </div>
        <div className="body_pro_add">4356</div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  font-family: macan, helvetica neue, Helvetica, Arial, sans-serif;
  .main_div1 {
    width: 400px;
    background-color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    .profile_div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .profile_image {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          width: 100%;
          span{
            color: green;
            border: 1px solid green;
            border-radius: 10px;
            font-size: 12px;
            width: 50px;
            text-align: center;
            float: right;
          }
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
      }
      .username {
        color: #7a7d85;
        width: 100%;
        padding: 10px;
        text-align: center;
        .user_button {
          button {
            font-weight: 700;
            color: #222325;
            cursor: default;
            background: none;
            border: 0;
            font-size: 20px;
            line-height: 28px;
          }
          svg {
            /* float: left; */
            /* height: 100%; */
            margin-left: 5px;
            color: #7a7d85;
            /* width: 100%; */
          }
        }
      }
      .editing {
        width: 100%;
        text-align: center;
        svg {
          color: #7a7d85;
        }
        .edit_page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          input {
            /* display: block; */
            width: 100%;
            font-size: 14px;
            line-height: 120%;
            text-decoration: underline;
            text-align: center;
            padding: 1px 0 14px;
            outline: none;
            border: 1px solid #fff;
          }
          .update_button {
            display: flex;
            width: 100%;
            padding: 20px 10px;
            justify-content: space-between;
            button{
              width: 45%;
            }
            .button {
              color: #1dbf73;
              border: 1px solid #1dbf73;
              background-color: #fff;
              font-weight: 700;
              padding: 5px 10px;
              font-size: 12px;
              border-radius: 5px;
              &:hover {
                background: #19a463;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
