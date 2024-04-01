import styled from "styled-components";
import { useState } from "react";
import { FcList } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../Images/logo_final_web.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContainerFluid from "react-bootstrap/Container";
import PostNav from "./PostNav";

export default function Navbarr() {
  const [activePop, setActivePop] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isListOpen2, setIsListOpen2] = useState(false);
  const [isListOpen3, setIsListOpen3] = useState(false);
  const [isListOpen4, setIsListOpen4] = useState(false);
  const [isListOpen5, setIsListOpen5] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // const navigate = useNavigate();
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

  const handleLoginOn = () => {
    setIsLogin(true);
  };

  const handleLoginOff = () => {
    setIsLogin(false);
  };

  return (
    <Root>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary nav-menu"
      >
        <ContainerFluid fluid>
          <Navbar.Brand href="/">
            {" "}
            <img src={logo} alt="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="main_nav_bar">
              <Nav.Link href="#features">
                {" "}
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
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <div className="profile">
                  Services <IoIosArrowDown />
                </div>
              </Nav.Link>
              <Nav.Link href="#pricing">
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
                          <Link to="/hirepa">
                            Hire Programmatic Advertisement
                          </Link>
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
                          <Link to="/hirewordpress">
                            Hire WordPress Developer
                          </Link>
                        </p>
                        <p>
                          <Link to="/hirereactnative">
                            Hire React Native Developer
                          </Link>
                        </p>
                        <p>
                          <Link to="/hireandroid">Hire Android Developer</Link>
                        </p>
                        <p>
                          <Link to="/hireios">Hire IOS Developer</Link>
                        </p>
                        <p>
                          <Link to="/hiresoftware">
                            Hire SoftWare Developer
                          </Link>
                        </p>
                        <p>
                          <Link to="/hiremobile">
                            Hire Mobile App Developer
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <div className="profile">Branding</div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <div className="profile">Our Portfolio</div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <div className="profile">Contact Us</div>{" "}
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href=" ">
                <div
                  onMouseEnter={handleLoginOn}
                  onMouseLeave={handleLoginOff}
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                  className="profileLogin"
                >
                  Login
                  <div className={isLogin ? "option_list2" : "off"}>
                    <p>
                      <Link to="/loginBuyer">buyer</Link>
                    </p>
                    <p>
                      <Link to="/loginSeller">Seller</Link>
                    </p>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </ContainerFluid>
      </Navbar>
    </Root>
  );
}

const Root = styled.section`
  border-bottom: 1px solid lightgray;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 5px 1px lightgray;
  div#responsive-navbar-nav {
    display: flex;
    justify-content: space-evenly;
  }
  .nav-menu {
    width: 100vw;
  }
  a {
    margin: 0px;
  }
  img {
    width: 200px;
    padding: 0px 15px;
  }

  .profile,
  .profileLogin {
    display: flex;
    font-size: 15px;
    color: #000000;
    padding: 5px;
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
      left: -20px;
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
