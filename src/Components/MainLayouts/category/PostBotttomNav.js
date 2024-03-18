import { useState } from "react";
import ContainerFluid from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import GraphicsDesign from "./GraphicsDesign";

function PostBotttomNav() {
  const [isListOpen2, setIsListOpen2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsListOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsListOpen2(false);
  };
  return (
    <Root>
      <Navbar bg="light" data-bs-theme="light">
        <ContainerFluid fluid>
        
          <Nav>
            <div   onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              onClick={() => {
                setIsListOpen2(!isListOpen2);
              }}>

            <Nav.Link
              href="#home"
            
            >
              Graphics & Design
              <div className={isListOpen2 ? "option_list_list" : "off"}>
                <GraphicsDesign/> 
                </div>
            </Nav.Link>
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
  }
  a.nav-link {
    color: #62646a;
    display: block;
    font-size: 16px;
    line-height: 24px;
    padding: 6px 14px !important;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #1dbf73;
    }
  }
.option_list_list{
position: relative;
top:1px;
}
`;