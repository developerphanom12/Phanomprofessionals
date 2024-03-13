import styled from "styled-components";
import { useState } from "react";
import { FcList } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../Images/logo_final_web.webp";

export default function Navbar() {
  const [activePop, setActivePop] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isListOpen2, setIsListOpen2] = useState(false);
  const [isListOpen3, setIsListOpen3] = useState(false);
  const [isListOpen4, setIsListOpen4] = useState(false);
  const [isListOpen5, setIsListOpen5] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsListOpen(true);
  };

  const handleMouseLeave = () => {
    setIsListOpen(false);
  };
  const handleMouseEnter2 = () => {
    setIsListOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsListOpen2(false);
  };
  const handleMouseEnter3 = () => {
    setIsListOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setIsListOpen3(false);
  };
  const handleMouseEnter4 = () => {
    setIsListOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsListOpen4(false);
  };
  const handleMouseEnter5 = () => {
    setIsListOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setIsListOpen5(false);
  };

  return (
    <Root>
      <div
        className="logo_img"
        onClick={()=>{navigate("/loginseller")}}
      >
        <img src={logo} alt="img" />
      </div>
      <div className="main_nav_bar">
        <div
          className="profile"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          id="whyPhanom"
          onClick={() => {
            setIsListOpen(!isListOpen);
          }}
        >
          Why Phanom
          <IoIosArrowDown />
          <div className={isListOpen ? "option_list" : "off"}>
            <p>
              <Link to="/howitworks">How It Works</Link>
            </p>
            <p>
              <Link to="/vettingprocess">Vetting Process </Link>
            </p>
            <p>
              {" "}
              <Link to="/whyindia">Why India</Link>
            </p>
          </div>
        </div>
        <div className="profile">
          Services <IoIosArrowDown />
        </div>
        <div
          className="profile"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          id="hireIndianTalent"
          onClick={() => {
            setIsListOpen2(!isListOpen2);
          }}
        >
          Hire Indian Talent <IoIosArrowDown />
          <div className={isListOpen2 ? "option_list_list" : "off"}>
            <div
              className="mini_option_list"
              id="hireDM"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              onClick={() => {
                setIsListOpen3(!isListOpen3);
              }}
            >
              Hire Digital Markitng <IoIosArrowDown />
              <div className={isListOpen3 ? "option_list2" : "off"}>
                <p>
                  <Link to="/hireppc">Hire PPC Expert</Link>
                </p>
                <p>
                  <Link to="/hireseo">Hire SEO Expert </Link>
                </p>
                <p>
                  <Link to="/hirepa">Hire Programmatic Advertisement</Link>
                </p>
              </div>
            </div>
            <div
              id="hireD"
              className="mini_option_list"
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              Hire Designer <IoIosArrowDown />
              <div className={isListOpen4 ? "option_list3" : "off"}>
                <p>
                  <Link to="/hiregraphic">Hire Graphic Designer</Link>
                </p>
                <p>
                  <Link to="/hireuiux">Hire UI/UX Designer </Link>
                </p>
                <p>
                  <Link to="/hireweb">Hire Web Designer</Link>
                </p>
              </div>
            </div>
            <div
              id="hireDeveloper"
              className="mini_option_list"
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            >
              Hire Developer <IoIosArrowDown />
              <div className={isListOpen5 ? "option_list4" : "off"}>
                <p>
                  <Link to="/hirereact">Hire ReactJs Developer</Link>
                </p>
                <p>
                  <Link to="/hirenode">Hire NodeJs Developer </Link>
                </p>
                <p>
                  <Link to="/hirelaravel">Hire Laravel Developer</Link>
                </p>
                <p>
                  <Link to="/hireshopify">Hire Shopify Developer</Link>
                </p>
                <p>
                  <Link to="/hirephp">Hire PHP Developer</Link>
                </p>
                <p>
                  <Link to="/hirewordpress">Hire WordPress Developer</Link>
                </p>
                <p>
                  <Link to="/hirereactnative">Hire React Native Developer</Link>
                </p>
                <p>
                  <Link to="/hireandroid">Hire Android Developer</Link>
                </p>
                <p>
                  <Link to="/hireios">Hire IOS Developer</Link>
                </p>
                <p>
                  <Link to="/hiresoftware">Hire SoftWare Developer</Link>
                </p>
                <p>
                  <Link to="/hiremobile">Hire Mobile App Developer</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">Branding</div>
        <div className="profile">Our Portfolio</div>
        <div className="profile">Contact Us</div>
      </div>
      <div
        className="menu"
        onClick={() => {
          setActivePop(true);
        }}
      >
        <FcList />
      </div>
      <div
        className={activePop ? "pop_nav" : "no_pop"}
        onClick={() => {
          setActivePop(false);
        }}
      ></div>
    </Root>
  );
}

const Root = styled.section`
  border-bottom: 1px solid lightgray;
  flex-wrap: wrap;
  display: flex;
  flex: 1;
  height: 100%;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  justify-content: space-around;
  box-shadow: 1px 1px 5px 1px lightgray;
  .logo_img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      padding: 0px 15px;
    }
  }
  .main_nav_bar {
    display: flex;
    flex-wrap: wrap;
    font-family: "Lato", Sans-serif;
    .profile {
      display: flex;
      font-size: 15px;
      color: #000000;
      padding: 15px;
      margin: 5px;
      gap: 7px;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      &:hover {
        color: #147888;
      }

      > div {
        font-size: 14px;
        svg {
          width: 13px;
          height: 13px;
        }
      }
      .option_list_list {
        left: -23px;
        top: 100%;
        position: absolute;
        .mini_option_list {
          padding: 10px;
          p {
            margin: 0;
            padding: 20px;
            &:hover {
              background-color: #0093ab;
            }
          }
        }
      }
      .option_list {
        left: -23px;
        top: 100%;
        position: absolute;
      }
      .option_list2 {
        right: -170px;
        top: 0;
        position: absolute;
      }
      .option_list3 {
        right: -170px;
        top: 50%;
        position: absolute;
      }
      .option_list4 {
        right: -170px;
        top: 70%;
        position: absolute;
      }

      .option_list,
      .option_list_list,
      .option_list2,
      .option_list3,
      .option_list4 {
        z-index: 1;
        text-decoration: none;
        min-width: 220px;
        border: 1px solid #147888;
        background-color: #147888;
        color: #fff;
        p {
          margin: 0;
          padding: 15px;
          &:hover {
            background-color: #0093ab;
          }
        }
        a {
          text-decoration: none;
          color: white;
        }
      }

      .off {
        display: none;
      }
    }
  }
  /* .profile:hover .option_list,
  .profile:hover .option_list_list,
  .profile:hover .option_list2,
  .profile:hover .option_list3,
  .profile:hover .option_list4 {
    opacity: 1;
    transform: translateY(0);
    &:hover {
      transition: opacity 0.3s, transform 0.3s;
      opacity: 0;
      transform: translateY(10px);
    }
  } */
  .menu {
    @media (max-width: 1020px) {
      display: block;
      padding-right: 10px;
      justify-content: left;
    }
  }
  .menu {
    @media (min-width: 1022px) {
      display: none;
    }
  }

  .pop_nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 400px;
    width: 100%;
    background: #ff7f50;
  }
  .no_pop {
    display: none;
  }

  ul.closed {
    display: none;
  }

  ul.open {
    display: block;
    -webkit-overflow-scrolling-y: scroll;
  }
  .option_list {
    position: relative;
    display: inline-block;
  }
`;
