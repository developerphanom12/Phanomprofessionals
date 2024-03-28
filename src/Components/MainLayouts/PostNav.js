import React, { useState } from "react";
import styled from "styled-components";
import logo1 from "../Images/logo_final_web.webp";
import { IoNotificationsOffOutline, IoVolumeHigh } from "react-icons/io5";
import { CiHeart, CiMail } from "react-icons/ci";
import logoimg from "../Images/Boyspic.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import {
  IoIosArrowDown,
  IoIosNotificationsOutline,
  IoMdSettings,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userCheckAction } from "../../redux/users/action";
import PostBotttomNav from "./Category/PostBotttomNav";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContainerFluid from "react-bootstrap/Container";

export default function PostNav() {
  const [showToggles, setShowToggles] = useState({
    showMessage: false,
    showNotification: false,
    showBusiness: false,
    showGrowth: false,
    showAnalytics: false,
  });
  const [profileshow, setShow] = useState(false);
  function toggleShowName() {
    setShow((prevState) => !prevState);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    localStorage.setItem("token", "");
    dispatch(userCheckAction(false));
    toast.success("Logout Successfully");
    navigate("/");
  };

  const toggleMessage = () => {
    setShowToggles({ ...showToggles, showMessage: !showToggles.showMessage });
  };
  const toggleNotification = () => {
    setShowToggles({
      ...showToggles,
      showNotification: !showToggles.showNotification,
    });
  };
  const toggleBusiness = () => {
    setShowToggles({ ...showToggles, showBusiness: !showToggles.showBusiness });
  };
  const toggleGrowth = () => {
    setShowToggles({ ...showToggles, showGrowth: !showToggles.showGrowth });
  };
  const toggleAnalytics = () => {
    setShowToggles({
      ...showToggles,
      showAnalytics: !showToggles.showAnalytics,
    });
  };

  const closeAllToggles = () => {
    setShowToggles({
      showMessage: false,
      showNotification: false,
      showBusiness: false,
      showGrowth: false,
      showAnalytics: false,
    });
  };

  return (
    <Root>
      <Navbar expand="lg" className="bg-body-tertiary">
        <ContainerFluid fluid>
          <Navbar.Brand
            href="home"
            className="logo_img"
            onClick={() => {
              handleLogoutClick();
            }}
          >
            {" "}
            <img src={logo1} alt="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="top_nav_pages">
                <Nav.Link className="dashboard">
                  <a
                    href="dashboard"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Dashboard
                  </a>
                </Nav.Link>
                <Nav.Link className="business">
                  <button
                    onClick={() => {
                      toggleBusiness();
                    }}
                  >
                    <span>My Business</span>
                    <IoIosArrowDown />
                  </button>
                  {showToggles.showBusiness && (
                    <div className="optn_div">
                      <div className="top">
                        <button
                          onClick={() => {
                            navigate("/orders");
                            closeAllToggles();
                          }}
                        >
                          Orders
                        </button>
                      </div>
                      <div className="middle">
                        <button
                          onClick={() => {
                            navigate("/gigs");
                            closeAllToggles();
                          }}
                        >
                          Gigs
                        </button>
                        <button
                          onClick={() => {
                            navigate("/profile");
                            closeAllToggles();
                          }}
                        >
                          Profiles
                        </button>
                      </div>
                      <div className="bottom">
                        <button
                          onClick={() => {
                            navigate("/earnings");
                            closeAllToggles();
                          }}
                        >
                          Earnings
                        </button>
                        <button
                          onClick={() => {
                            navigate("/phanomworkspace");
                            closeAllToggles();
                          }}
                        >
                          Phanom Workspace
                        </button>
                      </div>
                    </div>
                  )}
                </Nav.Link>
                <Nav.Link className="business">
                  <button
                    onClick={() => {
                      toggleAnalytics();
                    }}
                  >
                    <span>Analytics</span>
                    <IoIosArrowDown />
                  </button>

                  {showToggles.showAnalytics && (
                    <div className="optn_div">
                      <div className="top">
                        <button
                          onClick={() => {
                            navigate("/analytics");
                            closeAllToggles();
                          }}
                        >
                          Overview
                        </button>
                        {/* <button
                          onClick={() => {
                            navigate("/analytics");
                            closeAllToggles();
                          }}
                        >
                          Repeat Business
                        </button> */}
                      </div>
                    </div>
                  )}
                </Nav.Link>
              </div>
            </Nav>
            <Nav>
              <div className="notifyy">
                <div className="notify_div">
                  <Nav.Link className="msg">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Notification"
                      onClick={() => {
                        toggleNotification();
                      }}
                    >
                      <IoIosNotificationsOutline />
                    </a>
                    <Tooltip id="my-tooltip" />
                    {showToggles.showNotification && (
                      <div className="message_div">
                        <div className="top">
                          {" "}
                          <IoIosNotificationsOutline /> Notifications (0){" "}
                        </div>
                        <div className="middle">
                          <IoNotificationsOffOutline />
                          {/* {/ {/ <IoNotificationsOutline /> /} /} */}
                          <h5>No Notifications</h5>
                          <p>
                            Browse our amazing catalog of Gigs or offer your
                            talent on Phanom.
                          </p>
                        </div>
                        <div className="bottom">
                          <div>
                            <IoVolumeHigh />
                            {/* {/ {/ <IoMdVolumeOff /> /} /} */}
                            <IoMdSettings />
                          </div>
                        </div>
                      </div>
                    )}
                  </Nav.Link>
                  <Nav.Link className="msg">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Message"
                      onClick={() => {
                        toggleMessage();
                      }}
                    >
                      <CiMail />
                    </a>
                    <Tooltip id="my-tooltip" />

                    {showToggles.showMessage && (
                      <div className="message_div">
                        <div className="top">
                          {" "}
                          <CiMail /> Inbox (0){" "}
                        </div>
                        <div className="middle">
                          <IoNotificationsOffOutline />
                          {/*<IoNotificationsOutline /> */}
                          <h5>No Notification</h5>
                          <p>
                            Browse our amazing catalog of Gigs or offer your
                            talent on Phanom.
                          </p>
                        </div>
                        <div className="bottom">
                          <div>
                            <IoVolumeHigh />
                            {/* {/ {/ <IoMdVolumeOff /> /} /} */}
                            <IoMdSettings />
                          </div>
                          <a>See All In Inbox</a>
                        </div>
                      </div>
                    )}
                  </Nav.Link>
                  <Nav.Link className="mini">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Lists"
                    >
                      <CiHeart />
                    </a>
                    <Tooltip id="my-tooltip" />
                  </Nav.Link>
                </div>
                <Nav.Link className="orders">Orders</Nav.Link>

                <Nav.Link href="" className="profile" onClick={toggleShowName}>
                  {" "}
                  <img src={logoimg} alt="img" />
                </Nav.Link>
                {profileshow && (
                  <div className="profile_option">
                    <div className="profile_div">
                      <button
                        onClick={() => {
                          navigate("/Profile");
                        }}
                      >
                        Profile
                      </button>
                    </div>
                    <hr />

                    <div className="profile_div">
                      <button
                        onClick={() => {
                          navigate("/loginseller");
                        }}
                      >
                        Switch to Seller
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </ContainerFluid>
      </Navbar>
      <PostBotttomNav />
    </Root>
  );
}
const Root = styled.section`
  font-family: "Macan", Helvetica Neue, Helvetica, Arial, sans-serif;
  width: 100vw;

  .logo_img {
    margin-right: 32px;
    img {
      width: 150px;
    }
  }
  div#responsive-navbar-nav {
    justify-content: space-between;
    position: relative;

    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      .top_nav_pages,
      .notifyy {
        padding: 5px;
        flex-direction: column;
        a {
          padding: 0px 4px;
          font-size: 13px;
        }
        button {
          padding: 0px 3px;
        }
      }
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

      padding: 0px 10px;
      word-spacing: 2px;
    }
  }
  .top_nav_pages {
    display: flex;
    align-items: center;
    padding: 10px 20px;

    .dashboard,
    .business {
      a,
      span {
        color: #62646a;
        font-weight: 600;
        height: 42px;
        line-height: 42px;
        text-decoration: none;
        font-size: 16px;
      }
      a,
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        &:hover {
          background: #f5f5f5;
          border-radius: 4px;
        }
      }
      span {
        margin-right: 7px;
      }
      button {
        background-color: #fff0;
        border: none;
        color: #95979d;
        &:hover {
          color: #62646a;
        }
        svg {
          font-weight: 600;
        }
      }
    }
    .business {
      position: relative;
      padding: 0px 8px;
      .optn_div {
        display: flex;
        border-radius: 5px;
        flex-direction: column;
        position: absolute;
        padding: 5px;
        top: 71px;
        z-index: 11;
        left: -40px;
        border: 1px solid #c5c6c9;
        background: white;
        .middle {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #c5c6c9;
          border-bottom: 1px solid #c5c6c9;
          color: #62646a;
          cursor: pointer;
        }
        .top,
        .middle,
        .bottom {
          padding: 10px 0;
          button {
            min-width: 200px;
            width: 100%;
            padding: 5px 16px;
          }
        }
      }
    }
  }

  .notifyy {
    display: flex;
    align-items: center;
    color: #62646a;

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
            a {
              color: #446ee7;
              float: right;
              font-size: 14px;
              font-weight: 600;
              border-bottom: 2px solid #fff;
              text-decoration: none;
              position: relative;

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
  }
  .orders,
  .profile {
    cursor: pointer;
  }
  .orders {
    font-weight: 600;
    &:hover {
      color: green;
    }
  }

  .container-fluid {
    border-bottom: 1px solid #dadbdd;
  }

  .profile {
    img {
      border-radius: 50px;
      width: 35px;
      height: 35px;
    }
  }

  .profile_option {
    position: absolute;
    top: 70px;
    z-index: 11;
    border: 1px solid #c5c6c9;
    background: white;
    width: 18%;
    padding: 10px;
    .profile_div {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      button {
        padding: 5px 16px;
        color: #95979d;
        background-color: #fff0;
        border: 1px solid transparent;
      }
    }
    hr {
      margin: 10px;
    }
  }

  @media (max-width: 567px) {
    .notifyy {
      justify-content: center;
    }

    .top_nav_pages {
      padding: 0;
      justify-content: center;
    }

    a.dashboard.nav-link {
      margin-right: 10px;
    }

    .top_nav_pages .business .optn_div {
      left: -80px;
    }

    .top_nav_pages .dashboard a,
    .top_nav_pages .business a,
    .top_nav_pages .dashboard button,
    .top_nav_pages .business button {
      padding: 0 1px;
    }

    .profile_option {
      position: absolute;
      top: 240px;
      z-index: 11;
      border: 1px solid #c5c6c9;
      background: white;
      width: 50%;
      padding: 10px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px){
    .profile_option{
      top:120px;
      width:25%;
      left:101px;
    }
.show {
    display: flex;
}
.top_nav_pages {
    padding:0px; 
}




  }
`;
