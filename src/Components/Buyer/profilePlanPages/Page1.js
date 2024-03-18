import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import styled from "styled-components";
import pro from "../../Images/Boyspic.png";
import { HiOutlineTrophy } from "react-icons/hi2";
import msgimg from "../../Images/Boyspic.png";
import { RxCross2 } from "react-icons/rx";
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import {
  IoIosMenu,
  IoMdHeart,
  IoMdInformationCircleOutline,
  IoMdStar,
} from "react-icons/io";
import { FaCheck, FaRegClock, FaShareAlt } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { TbRefresh } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import SliderImage from "./SliderImage";
import SliderText from "./SliderText";
// import SliderImage from "./SliderImage";
// import SliderText from "./SliderText";

export default function Page1() {
  const [showMessageBox, setShowMessageBox] = useState(false);

  const toggleMessageBox = () => {
    setShowMessageBox(!showMessageBox);
  };
  return (
    <Root>
      <div className="main_section">
        <div className="main_barr">
          <div className="path_value">
            <a>
              <IoHomeOutline />
            </a>{" "}
            <p>/</p> <a>Graphics & Design</a> <p>/</p> <a>Website Design</a>{" "}
            <p>/</p> <a>Website UI/UX Design</a>
          </div>
          <div className="heading_point">
            <h2>I will create innovative website design or website mockup</h2>
          </div>
          <div className="profile_contain">
            <div className="pro_img">
              <img src={pro} alt="img" />
            </div>
            <div className="pro_detail">
              <div>
                {" "}
                <p>Name</p>
                <span>Top Rated</span>
              </div>
              <div>
                <p>
                  <IoMdStar /> 5.0
                </p>
                <label>20 Orders in Queue</label>
              </div>
            </div>
          </div>
          <div className="slider_div">
            <p>
              <HiOutlineTrophy /> People keep coming back! amirkhan1996 has an
              exceptional number of repeat buyers.
            </p>
            <SliderImage />
          </div>
          <div className="about_slider">
            <p>
              What people loved about this seller{" "}
              <button className="button_slider">See all reviews</button>
            </p>

            <SliderText />
          </div>
          <div className="About_this_gig">
            <h4> About this gig</h4>
            <p>
              Greetings as a experienced revision of WordPress , Shopify custom
              built CMS with an over 3 years in web development i have started
              here and i believe there is no other better way than for you to
              hire a guy with both front end and backend web development and
              designing skills to grasp and portray for your website
            </p>
          </div>
          {showMessageBox && (
            <div className="msg_writing_box">
              <div className="msg_writing_head">
                <div className="heading">
                  <div>
                    <img src={msgimg} alt="img" />
                  </div>
                  <div>
                    <p>Avineet</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    toggleMessageBox(false);
                  }}
                >
                  <RxCross2 />
                </button>
              </div>
              <div className="msg_writing_body">
                Ask the person anything about your website
              </div>
              <div className="msg_writing_foot">
                <div><BsEmojiSmile />  <ImAttachment /></div>
             <input placeholder="Write Message"/>
              </div>
            </div>
          )}
          <div className="msg_float" onClick={toggleMessageBox}>
            <div className="msg_float_img">
              <img src={msgimg} alt="img" />
            </div>
            <div className="msg_float_txt">
              <p>Message</p>
              <span>Online : Avg response time:2 Hrs</span>
            </div>
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
    @media (max-width: 997px) {
      flex-wrap: wrap;
    }
    .main_barr {
      display: flex;
      flex-direction: column;
      margin-right: 100px;
      .path_value {
        font-size: 14px;
        display: flex;
        gap: 8px;
        margin-bottom: 32px;
        p {
          color: #62646a;
          margin: 0px;
        }
        a {
          color: #222325;
          cursor: pointer;
        }
        svg {
          width: 16px;
          height: 16px;
        }
      }
      .heading_point {
        padding: 0px 0px 16px;
        h2 {
          overflow-wrap: break-word;
          padding-bottom: 16px;
          color: #404145;
          font-weight: 700;
        }
      }
      .profile_contain {
        display: flex;
        gap: 20px;
        .pro_img {
          img {
            width: 64px;
            height: 64px;
            border-radius: 50px;
          }
        }
        .pro_detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0px 5px;
          > div {
            display: flex;
            flex: 1;
            align-items: center;
            p {
              margin: 0;
              color: #404145;
              cursor: pointer;
              font-weight: 700;
              margin-right: 8px;
              font-size: 18px;
              line-height: 26px;
              border-right: 1px solid #62646a70;
              padding: 0px 5px;
            }
            span {
              color: #99501b;
              line-height: 21px;
              font-weight: 600;
              font-size: 14px;
              background-color: #ffecd1;
              padding: 0px 5px;
              border-radius: 5px;
            }
            label {
              font-size: 13px;
            }
          }
        }
      }
      .slider_div {
        p {
          display: flex;
          align-items: center;
          font-weight: 600;
          margin: 0;
          padding: 10px;
          gap: 10px;
          svg {
            width: 20px;
            height: 20px;
            color: darkgrey;
          }
        }
      }
      .about_slider {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 25px;
        p {
          font-size: 20px;
          line-height: 28px;
          font-weight: 700;
          margin: 0;
          .button_slider {
            border: none;
            background-color: white;
            border-bottom: 1px solid #fff;
            font-weight: 600;
            font-size: 15px;
            color: #212529;
            height: 23px;
            &:hover {
              border-bottom: 1px solid #212529;
            }
          }
        }
      }

      .About_this_gig {
        display: flex;
        flex-direction: column;
        h4 {
          font-weight: 600;
          padding: 10px 20px;
          color: #404145;
        }
        p {
          padding: 10px 20px;
          color: #62646a;
        }
      }
      .msg_writing_box {
        display: flex;
        flex-direction: column;
        border: 1px solid #d3d3d3b5;
        box-shadow: 1px 1px 1px 3px 1px #d3d3d3b5;
        .msg_writing_head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding:10px 20px;
          border-bottom: 1px solid darkgreen;
          button{
            border: none;
            background-color: white;
            color: #404145;
            svg{
              font-weight: 600;
              width: 30px;
              height: 30px;

            }
          }
          .heading {
            align-items: center;
            display: flex;
            p {
              margin: 0;
              font-size: 20px;
              font-weight: 600;
              padding-left: 10px;
            }
            img {
              width: 50px;
              height: 50px;
              border-radius: 50px;
            }
          }
        }
        .msg_writing_body {
          overflow-y: scroll;
          padding:10px 20px;
          color: #62646a;
        }
        .msg_writing_foot {
          border-top: 1px solid #d3d3d3b5;
          padding:10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          >div{
           display: flex;
           gap: 20px;
          }
        }
      }
      .msg_float {
        display: flex;
        padding: 8px 24px 8px 8px;
        box-shadow: 1px 1px 4px 1px gray;
        border-radius: 50px;
        width: fit-content;
        .msg_float_img {
          img {
            width: 50px;
            height: 50px;
            border-radius: 50px;
          }
        }
        .msg_float_txt {
          padding-left: 10px;
          p {
            margin: 0;
            padding: 0;
            font-weight: 600;
            color: #404145;
          }
          span {
            color: #62646a;
            font-size: 13px;
          }
        }
      }
    }

    .side_barr {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: sticky;
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


  @media (max-width: 567px) {
 .main_section .main_barr {
margin-right: 0; 
 .slider_div p svg {
    width: 50px;
    height: 50px;
}
.path_value a {
    font-size: 9px;
}
 .path_value p {
    font-size: 10px;
}
.path_value svg {
    width: 12px;
    height: 12px;
}

}
.main_section .side_barr .upper_side {
    padding: 20px 0px 16px;
    justify-content: flex-start; 
}

}

@media (min-width: 567px) and (max-width: 992px) {
 .main_section .side_barr .upper_side{
    padding: 20px 0px 16px;
    justify-content: flex-start;

}
   
  }

`;
