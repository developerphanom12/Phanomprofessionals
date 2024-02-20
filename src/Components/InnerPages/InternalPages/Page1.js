import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import styled from "styled-components";
import pro from "../../Images/Boyspic.png";
import { IoIosMenu, IoMdHeartEmpty } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

export default function Page1() {
  return (
    <Root>
      <div className="main_section">
        <div className="main_barr">
          <div>
            <IoHomeOutline />/ Graphics & Design / Website Design / Website
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
            <IoIosMenu /> <IoMdHeartEmpty /> <button>121</button>{" "}
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
                  website developer and designer <span>$20000</span>
                </h4>
                <p>
                  will fix any bugs or make changes depending on client requests
                </p>
              </div>
              <div>
                <button>continue</button>
              </div>
            </div>
          </div>
          <div className="button_part">
            <button>button part</button>
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
      .upper_side {
        display: flex;
        padding: 0px 0px 16px;
        margin: 0px 0px 12px;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        svg {
          width: 25px;
          height: 25px;
        }
        button {
          border: 1px solid black;
          padding: 5px;
          svg {
            width: 20px;
            height: 20px;
          }
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
          .premium {
            width: 140px;
            padding: 16px;
            font-size: 16px;
            color: #74767e;
            cursor: pointer;
            font-weight: 600;
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
          padding: 0px 24px;
          h4 {
            display: flex;
            justify-content: space-between;
            p{
                font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
