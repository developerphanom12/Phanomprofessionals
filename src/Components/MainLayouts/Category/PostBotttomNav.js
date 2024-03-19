import { useState } from "react";
import ContainerFluid from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import GraphicsDesign from "./GraphicsDesign";

function PostBotttomNav() {
  const [isListOpen1, setIsListOpen1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsListOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsListOpen1(false);
  };
  return (
    <Root>
      <Navbar bg="light" data-bs-theme="light">
        <ContainerFluid fluid>
          <Nav>
            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              id="graphic"
            >
              <Nav.Link href="#home">Graphics & Design</Nav.Link>
              {isListOpen1 && (
                <div className="option_list_list">
                  <GraphicsDesign />
                </div>
              )}
            </div>
            <Nav.Link href="#features">Programming & Tech</Nav.Link>
            <Nav.Link href="#pricing">Digital Marketing</Nav.Link>
            <Nav.Link href="#pricing">Video & Animation</Nav.Link>
            <Nav.Link href="#pricing">Writing & Translation</Nav.Link>
            <Nav.Link href="#pricing">Music & Audio</Nav.Link>
            <Nav.Link href="#pricing">Business</Nav.Link>
            <Nav.Link href="#pricing">Consulting</Nav.Link>
            <Nav.Link href="#pricing">Data</Nav.Link>
            <Nav.Link href="#pricing">AI Services</Nav.Link>
          </Nav>
        </ContainerFluid>
      </Navbar>
    </Root>
  );
}

export default PostBotttomNav;
const Root = styled.section`
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
    top: 80px;
    width: 100vw;
    background-color: #fff;
    z-index: 11111;
  }
`;
