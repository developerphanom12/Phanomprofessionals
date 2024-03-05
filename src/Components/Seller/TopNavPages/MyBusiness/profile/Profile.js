import React, { useState } from "react";
import styled from "styled-components";
import profile from "../../../../Images/Boyspic.png";
import { CreateButton } from "../../../../../GlobalStyles";
import { CiEdit } from "react-icons/ci";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import Profile2 from "./Profile2";

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
            <p>
              <span>online</span>
            </p>
            <img src={profile} />
          </div>
          <div className="username">
            <div className="user_button">
              <button>PhanomdeveloperBoy</button>
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
          <div className="preview_button_div">
            <button>Preview Phanom Profile</button>
          </div>
          <div className="list_div">
            <ul>
              <li>
                <span>
                  <FaLocationDot />
                  From
                </span>
                <b>India</b>
              </li>
              <li>
                <span>
                  <FaUser />
                  Member Since
                </span>
                <b>Feb 24</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="description_div">
          <div className="descrip_box">
            <div className="descrip_head">
              <h3>Description</h3>
              <a href="/edit">Edit Description</a>
            </div>
            <div className="descrip_body">
              <p>
                Business consultant based in India, Phanom Professionals have
                served many phenomenal services, which has been a great
                milestone for lots of start-up proving them Digital Marketing,
                Video Marketing, Packaging & Labeling, UIUX, 2D/3D Animation,
                Graphic Designing, Branding, Web Development & Designing
                assistance as well as to established companies. Steadfastness
                comes from consistent satisfactory performances, which Phanom
                Professional provides to their clients. Being an advertising
                companion, the outcomes are immensely pleasing and blithe the
                client, which reduce time consumption.
              </p>
            </div>
          </div>
          <div className="descrip_box">
            <div className="descrip_head">
              <h3>Languages</h3>
              <a href="/edit">Add New </a>
            </div>
            <div className="descrip_body">
              <span>English -</span>
              <span>Native/Bilingual</span>
            </div>
          </div>
          <div className="descrip_box">
            <div className="descrip_head">
              <h3>Skills</h3>
              <a href="/edit">Add New </a>
            </div>
            <div className="descrip_body">
              <span>Business-</span>
              <span>Business</span>
            </div>
          </div>
          <div className="descrip_box">
            <div className="descrip_head">
              <h3>Education</h3>
              <a href="/edit">Add New</a>
            </div>
            <div className="descrip_body">
              <span>Business-</span>
              <span>Business</span>
            </div>
          </div>
          <div className="descrip_box">
            <div className="descrip_head">
              <h3>Certification</h3>
              <a href="/edit">Add New</a>
            </div>
            <div className="descrip_body">
              <span>Add your Certification.-</span>
              <span>Business</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main_div2">
        <Profile2 />
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: macan, helvetica neue, Helvetica, Arial, sans-serif;
  .main_div1 {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .profile_div {
      background-color: #fff;
      border: 1px solid #dadbdd;
      padding: 30px 30px 0px;
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
          span {
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
            button {
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
      .preview_button_div {
        padding: 10px 0px 20px;
        display: flex;
        flex: 1 1;
        width: 100%;
        button {
          width: 100%;
          padding: 7px 0px;
          background-color: #fff;
          border: 1px solid #62646a;
          color: #62646a;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
        }
      }
      .list_div {
        display: flex;
        border-top: 1px solid #dadbdd;
        width: 100%;
        ul {
          width: 100%;
          list-style: none;
          padding: 10px 0px;
          margin-bottom: 0px;
          li {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            color: #62646a;
            b {
              font-size: 14px;
            }
            span {
              font-size: 14px;
              svg {
                margin-right: 10px;
                width: 13px;
                height: 13px;
                fill: rgb(98, 100, 106);
              }
            }
          }
        }
      }
    }
    .description_div {
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 30px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .descrip_box {
        width: 100%;
        border-bottom: 1.5px solid #dadbdd;
        .descrip_head {
          width: 100%;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          h3 {
            color: #0e0e0f;
            font-size: 16px;
            font-weight: 700;
            padding-bottom: 7px;
          }
          a {
            color: #00698c;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .descrip_body {
          width: 100%;
          margin-bottom: 10px;

          p {
            font-size: 14px;
            color: #62646a;
            line-height: 20px;
          }
          span {
            margin-bottom: 10px;
            padding: 10px 0px;
            color: #b2b2b2;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
  }
`;
