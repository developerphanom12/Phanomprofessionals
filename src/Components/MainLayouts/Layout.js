import styled from "styled-components";
import Navbar from "./Navbar";
import PreNav from "./PreNav";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <Root>
      <div className="top_bar">
        <Navbar />
      </div>
      <div className="main_body">{children}</div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  min-height: 100vh;
  height: 100%;

  .main_bar {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    overflow: hidden;

    .top_bar {
      background: #ffffff;
      display: flex;
      /* position: sticky; */
      height: 70px;
      background-image: linear-gradient(
        to bottom right,
        #c6a5ffc7,
        #c6a5ff63,
        #ffffff,
        #c6a5ff24
      );
      width: 100%;
    }
    .main_body {
      height: 90%;
      width: 100%;
    }
  }
`;
