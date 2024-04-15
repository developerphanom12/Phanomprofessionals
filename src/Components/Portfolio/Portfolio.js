import React from "react";
import styled from "styled-components";
import bgg from "../Images/bg.png";
import cof from "../Images/cof.0cf093f5a7277f24f2ad (1).jpg";
import logo from "../Images/download (1).png";
import { IoLocationSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { FaDribbbleSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

export default function Portfolio() {
  return (
    <Root>
      <div className="bg_img"></div>

      <div className="main_div">
        <div className="sub_div_one">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="profile">
            <h2>Phanom Team</h2>
            <p>Senior Graphic Designers</p>
            <p>Phanom Professionals</p>
            <button>https://www.phanomprofessionals.com/</button>
          </div>
          <div className="location">
            <IoLocationSharp />
            <p>Mohali, India</p>
          </div>

          <div className="btn">
            <button className="follow_btn">
              <FaCirclePlus />
              Follow
            </button>
            <button className="message_btn">
              <FaEnvelope />
              Message
            </button>
          </div>

          <div className="hire">
            <h2>Hire Phanom</h2>

            <div className="first_heading">
              <div className="icon_title">
                <FaEnvelope />
                <span>Full Time Job</span>
              </div>

              <IoIosArrowForward />
            </div>

            <div className="first_heading">
              <div className="icon_title">
                <FaEnvelope />
                <span>Freelance/Project</span>
              </div>

              <IoIosArrowForward />
            </div>
          </div>

          <div className="Project_views">
            <h5>Project Views</h5>
            <p>107</p>
          </div>

          <div className="Project_views">
            <h5>Appreciations </h5>
            <p>4</p>
          </div>

          <div className="web">
            <h2>ON THE WEB</h2>
            <div className="social_links">
              <div className="links_heading">
                <div className="icon_title">
                  <AiFillTwitterCircle />
                  <span>Twitter</span>
                </div>
                <IoArrowRedoCircleOutline />
              </div>

              <div className="links_heading">
                <div className="icon_title">
                  <IoLogoFacebook />
                  <span>Facebook</span>
                </div>
                <IoArrowRedoCircleOutline />
              </div>

              <div className="links_heading">
                <div className="icon_title">
                  <FaDribbbleSquare />
                  <span>Dribble</span>
                </div>
                <IoArrowRedoCircleOutline />
              </div>

              <div className="links_heading">
                <div className="icon_title">
                  <BsLinkedin />
                  <span>LinkedIn</span>
                </div>
                <IoArrowRedoCircleOutline />
              </div>
            </div>
          </div>

          <div className="about_div">
            <h2>ABOUT ME</h2>
            <p>
              Business consultant based in India, Phanom Professional have
              served many phenomenal services, which has been a great milestone
              for lots of start-ups proving them with Digital Marketing,
              packaging & labeling, video editing, explainer videos, Branding &
              Web Development & Designing assistance as well a…
            </p>
            {/* <div className="read_btn">
              Read More <IoIosArrowForward />
            </div> */}
          </div>

          <div className="member_spec">
            <h5>MEMBER SINCE: SEPTEMBER 21, 2022</h5>
            <p>Report</p>
          </div>
        </div>
        <div className="sub_div_two">
          <button className="work_btn">Work</button>

          <div className="fortfolio_img">
            <div className="containerrr">
              <img
                src={cof}
                alt="Avatar"
                class="className"
                style={{ width: "100%" }}
              />
              <div className="middle">
                <div className="text">Brand Logo</div>
              </div>
            </div>
            <div className="containerrr">
              <img
                src={cof}
                alt="Avatar"
                class="className"
                style={{ width: "100%" }}
              />
              <div className="middle">
                <div className="text">Brand Logo</div>
              </div>
            </div>
            <div className="containerrr">
              <img
                src={cof}
                alt="Avatar"
                class="className"
                style={{ width: "100%" }}
              />
              <div className="middle">
                <div className="text">Brand Logo</div>
              </div>
            </div>
            <div className="containerrr">
              <img
                src={cof}
                alt="Avatar"
                class="className"
                style={{ width: "100%" }}
              />
              <div className="middle">
                <div className="text">Brand Logo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  .bg_img {
    height: 300px;
    width: 100%;
    background-image: url(${bgg});
    background-size: 100% 100%;
  }

  .main_div {
    display: flex;
    padding: 0 50px;
    gap: 50px;
    .sub_div_one {
      width: 30%;
      padding: 25px 30px 16px;
      box-shadow: 0 1px 3px rgba(25, 25, 25, 0.1);
      background-color: #fff;
      border-radius: 3px;
      margin-top: -170px;
      .logo {
        display: flex;
        justify-content: center;
        img {
          width: 110px;
          height: 110px;
        }
      }
      .profile {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        h2 {
          font-size: 24px;
          font-weight: 600;
        }

        p {
          font-size: 15px;
          line-height: 1.4;
          margin: 1px 0 0 0;
          color: #696969;
          font-weight: 500;
        }

        button {
          font-size: 15px;
          line-height: 1.4;
          margin: 1px 0 0 0;
          color: #696969;
          font-weight: 500;
          text-decoration: underline;
          border: 1px solid transparent;
          background: none;
          cursor: pointer;
        }
      }

      .location {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        color: #696969;
        gap: 20px;
        p {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 0;
        }
      }

      .btn {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .follow_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: #5cd4b9;
          color: white;
          font-size: 16px;
          border: 1px solid transparent;
          padding: 6px 0px;
          border-radius: 50px;
          font-weight: 600;
          gap: 10px;
        }
        .message_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          color: #5cd4b9;
          font-size: 16px;
          border: 1px solid transparent;
          padding: 6px 0px;
          border-radius: 50px;
          font-weight: 600;
          gap: 10px;
        }
      }

      .hire {
        border: 1px solid #dee8ff;
        width: 100%;
        border-radius: 5px;
        padding: 10px 20px 5px;
        margin: 20px 0;

        h2 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #191919;
        }
        .first_heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #dee8ff;
          padding: 12px 0;
          color: #191919;
          cursor: pointer;
          &:hover {
            color: #5cd4b9;
          }
          svg {
            color: #5cd4b9;
          }

          .icon_title {
            display: flex;
            gap: 10px;
            align-items: center;
            span {
              font-weight: 600;
              font-size: 14px;
            }
          }
        }
      }

      .Project_views {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        h5 {
          font-size: 14px;
          color: #191919;
          margin: 0;
        }
        p {
          margin: 0;
        }
      }

      .web {
        margin-top: 20px;
        h2 {
          color: #707070;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .social_links {
          border: 1px solid #dee8ff;
          width: 100%;
          border-radius: 5px;
          .links_heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #dee8ff;
            padding: 10px 20px;
            color: #191919;
            cursor: pointer;
            &:hover {
              background-color: #5cd4b9;
              color: #fff;
            }

            .icon_title {
              display: flex;
              gap: 10px;
              align-items: center;
              span {
                font-weight: 600;
                font-size: 14px;
              }
            }
          }
        }
      }

      .about_div {
        margin-top: 30px;
        h2 {
          color: #707070;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
        }
        p {
          font-size: 14px;
          font-weight: 500;
        }
        /* .read_btn {
          display: flex;
          gap:5px;
          align-items: center;
          color: dimgray;
          font-size: 14px;
          transition:0.2s;
          margin-top:15px;
        } */
      }

      .member_spec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
        h5 {
          color: #707070;
          font-size: 11px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
        }
        p {
          color: dimgray;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }

    .sub_div_two {
      width: 70%;
      padding-top: 30px;
      button.work_btn {
        background-color: #5cd4b9;
        color: white;
        padding: 5px 18px;
        font-size: 14px;
        border-radius: 50px;
        border: 1px solid transparent;
        font-weight: 700;
      }

      .fortfolio_img {
        margin-top: 30px;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;

        .containerrr {
          position: relative;
          width: 49%;
          img {
            border-radius: 5px;
          }
        }

        .image {
          opacity: 1;
          display: block;
          width: 100%;
          height: auto;
          transition: 0.5s ease;
          backface-visibility: hidden;
        }

        .middle {
          opacity: 0;
          position: absolute;
          top: 85%;
          left: 3%;
          /* / transform: translate(-50%, -50%); /
          / -ms-transform: translate(-50%, -50%); / */
          text-align: center;
        }

        .containerrr:hover .image {
          opacity: 0.3;
        }

        .containerrr:hover .middle {
          opacity: 1;
        }

        .text {
          color: white;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
  @media (max-width: 567px) {
    overflow: hidden;
    .bg_img {
      height: 170px;
    }

    .main_div {
      display: flex;
      flex-wrap: wrap;
      padding: 0 22px;
      gap: 0;
    }

    .main_div .sub_div_one {
      width: 100%;
      margin-top: -70px;
    }

    .main_div .sub_div_two {
      width: 100%;
    }

    .main_div .sub_div_two .fortfolio_img .containerrr {
      width: 47%;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .main_div {
      display: flex;
      flex-wrap: wrap;
      padding: 0 22px;
      gap: 0;
    }

    .main_div .sub_div_one {
      width: 100%;
      margin-top: -100px;
    }

    .main_div .sub_div_two {
      width: 100%;
    }

    .main_div .sub_div_two .fortfolio_img .containerrr {
      width: 47%;
    }
  }
`;
