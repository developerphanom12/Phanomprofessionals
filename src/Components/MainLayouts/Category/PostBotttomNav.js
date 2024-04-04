import { useState } from "react";

import ContainerFluid from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

import styled from "styled-components";
import GraphicsDesign from "./GraphicsDesign";
import ProgrammingTech from "./ProgrammingTech";
import DigitalMarketing from "./DigitalMarketing";
import VideoAnimation from "./VideoAnimation";
import WritingTranslation from "./WritingTranslation";

function PostBotttomNav() {
  const [isListOpen1, setIsListOpen1] = useState(false);
  const [isListOpen2, setIsListOpen2] = useState(false);
  const [isListOpen3, setIsListOpen3] = useState(false);
  const [isListOpen4, setIsListOpen4] = useState(false);
  const [isListOpen5, setIsListOpen5] = useState(false);
  const [isListOpen6, setIsListOpen6] = useState(false);
  const [isListOpen7, setIsListOpen7] = useState(false);
  const [isListOpen8, setIsListOpen8] = useState(false);
  const [isListOpen9, setIsListOpen9] = useState(false);
  const [isListOpen10, setIsListOpen10] = useState(false);

  const handleMouseEnter1 = () => {
    setIsListOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsListOpen1(false);
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

  const handleMouseEnter6 = () => {
    setIsListOpen6(true);
  };

  const handleMouseLeave6 = () => {
    setIsListOpen6(false);
  };

  const handleMouseEnter7 = () => {
    setIsListOpen7(true);
  };

  const handleMouseLeave7 = () => {
    setIsListOpen7(false);
  };

  const handleMouseEnter8 = () => {
    setIsListOpen8(true);
  };

  const handleMouseLeave8 = () => {
    setIsListOpen8(false);
  };

  const handleMouseEnter9 = () => {
    setIsListOpen9(true);
  };

  const handleMouseLeave9 = () => {
    setIsListOpen9(false);
  };

  const handleMouseEnter10 = () => {
    setIsListOpen10(true);
  };

  const handleMouseLeave10 = () => {
    setIsListOpen10(false);
  };

  return (
    <Root>
      <Navbar expand="lg" className="bg-body-tertiary">
        <ContainerFluid fluid>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="me-auto">
              <div
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                id="graphic"
              >
                <Nav.Link href="/">Graphics & Design</Nav.Link>
                {isListOpen1 && (
                  <div className="option_list_list">
                    <GraphicsDesign />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                id="graphic"
              >
                <Nav.Link href="#features">Programming & Tech</Nav.Link>
                {isListOpen2 && (
                  <div className="option_list_list">
                    <ProgrammingTech />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                id="graphic"
              >
                <Nav.Link href="#pricing">Digital Marketing</Nav.Link>
                {isListOpen3 && (
                  <div className="option_list_list">
                    <DigitalMarketing />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
                id="graphic"
              >
                <Nav.Link href="#pricing">Video & Animation</Nav.Link>
                {isListOpen4 && (
                  <div className="option_list_list">
                    <VideoAnimation />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
                id="graphic"
              >
                <Nav.Link href="#pricing">Writing & Translation</Nav.Link>
                {isListOpen5 && (
                  <div className="option_list_list">
                    <WritingTranslation />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
                id="graphic"
              >
                <Nav.Link href="#pricing">Music & Audio</Nav.Link>
                {isListOpen6 && (
                  <div className="option_list_list">
                    <GraphicsDesign />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}
                id="graphic"
              >
                <Nav.Link href="#pricing">Business</Nav.Link>
                {isListOpen7 && (
                  <div className="option_list_list">
                    <GraphicsDesign />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
                id="graphic"
              >
                <Nav.Link href="#pricing">Consulting</Nav.Link>
                {isListOpen8 && (
                  <div className="option_list_list">
                    <GraphicsDesign />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}
                id="graphic"
              >
                <Nav.Link href="#pricing">Data</Nav.Link>
                {isListOpen9 && (
                  <div className="option_list_list">
                    <GraphicsDesign />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter10}
                onMouseLeave={handleMouseLeave10}
                id="graphic"
              >
                <Nav.Link href="#pricing">AI Services</Nav.Link>
                {isListOpen10 && (
                  <div className="option_list_list">
                    <GraphicsDesign />
                  </div>
                )}
              </div>
            </Nav>
          {/* </Navbar.Collapse> */}
        </ContainerFluid>
      </Navbar>
    </Root>
  );
}

export default PostBotttomNav;
const Root = styled.section`
    border-bottom: 1px solid #dadbdd;
    border-top: 1px solid #dadbdd;
 
  nav.navbar.navbar-expand.navbar-light.bg-light {
    border: 1px solid #e4e5e7;
    position: relative;
  }
  a.nav-link {
    color: #62646a;
    display: block;
    font-size: 16px;
    line-height: 24px;
    padding: 6px 10px !important;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #1dbf73;
    }
  }
  .option_list_list {
    position: absolute;
    top: 47px;
    width: 100vw;
    background-color: #fff;
    z-index: 11111;
    left: 0;
    font-size: 14px;
  }
  nav.navbar.navbar-expand.navbar-light.bg-light {
    padding: 0px;
  }

  @media (max-width: 567px) {
    .navbar > .container,
    .navbar > .container-fluid,
    .navbar > .container-lg,
    .navbar > .container-md,
    .navbar > .container-sm,
    .navbar > .container-xl,
    .navbar > .container-xxl {
      justify-content: end;
      padding-bottom: 8px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .navbar > .container,
    .navbar > .container-fluid,
    .navbar > .container-lg,
    .navbar > .container-md,
    .navbar > .container-sm,
    .navbar > .container-xl,
    .navbar > .container-xxl {
      justify-content: end;
      padding-bottom: 8px;
    }
  }
`;
