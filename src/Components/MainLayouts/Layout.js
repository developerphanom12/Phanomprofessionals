import styled from "styled-components";
import Navbar from "./Navbar";
import PostNav from "./PostNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Root>
      <div className="top_bar">
        {/* <Navbar /> */}
        {/* <PostNav/> */}
      </div>
      <div className="main_body">{children}</div>
      <div>
      <Footer />
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;

  .main_bar {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .top_bar {
      background: #ffffff;
      display: flex;
      position: sticky;
      height: 120px;
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
      height: 85%;
      width: 100%;
    }
  }
`;
