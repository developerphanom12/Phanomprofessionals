import React from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PausedGigs() {
  const navigate = useNavigate();
  return (
    <Root>
      <div className="gig_box">
        <div className="svg_file" onClick={()=>{navigate("/create")}}>
        <IoIosAdd />
        </div>
        <div className="text_gig">
          <b onClick={navigate("/create")}>Create a new gig</b>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  .gig_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #dadbdd;
    background-color: #fff;
    width: 232px;
    min-height: 260px;
    padding-bottom: 8px;
    float: left;
    position: relative;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    .svg_file {
      margin: 20px 10px;
      svg {
        color: #fff;
        background-color: #222325;
        border: 5px solid #222325;
        border-radius: 50%;
        width: 70px;
        height: 70px;
      }
    }
    .text_gig {
      width: 100%;
      text-align: center;
      b {
        color: #555;
        font-size: 14px;
      }
    }
  }
`;
