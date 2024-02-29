import React from "react";
import styled from "styled-components";
import profile from "../../../Images/Boyspic.png";

export default function Dashboard() {
  return (
    <Root>
      <div className="main_div">
        <div className="seller_performance">
          <div className="profile_detail">
            <div>
              <img src={profile}></img>
            </div>
            <div>
              <a href="/">developerphanom...</a>
            </div>
            
          </div>
          <div class="profile_spec">
              <p className="level">My level</p>
              <p className="seller">New Seller</p>
            </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #f5f5f5;
  .main_div {
    display: flex;
    padding: 20px 20px 0;
  }
  .seller_performance {
    background: #fff;
    padding: 1px 20px 5px;
    width: 25%;
    .profile_detail {
      padding-top: 24px;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      img {
        height: 60px;
        width: 60px;
        margin-right: 20px;
      }

      a{
        color:#62646a;
        font-size:18px;
        text-decoration:none;
        font-weight:700;
      }
    }
    .profile_spec{
        display:flex;
        justify-content: space-between;
        padding-top:16px;
        .level{
          color:#74767e;
          font-size:16px;
          line-height: 24px;
          font-weight:400;
        }
        .seller{
          color:#74767e;
          font-size:14px;
          line-height: 22px;
          font-weight:700;
        }
      }
  }
`;
