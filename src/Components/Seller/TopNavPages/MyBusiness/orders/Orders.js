import React, { useState } from "react";
import styled from "styled-components";
import Priority from "./Priority";
import Active from "./Active";
import Late from "./Late";
import Delivered from "./Delivered";
import Completed from "./Completed";
import Cancelled from "./Cancelled";
import Starred from "./Starred";
import { GigButton } from "../../../../../GlobalStyles";
import { IoSearch } from "react-icons/io5";

export default function Orders() {
  const [active, setActive] = useState("priority");
  const [user, setUser] = useState();

  return (
    <Root>
      <div className="order_header">
        <h1>Manage Orders</h1>
        <div className="input_div">
          <input placeholder="Search My History..." />
          <IoSearch />
        </div>
      </div>
      <div className="tab_button_area">
        <div className="nav_tab">
          <div>
            <GigButton
              className={active === "priority" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("priority");
              }}
            >
              PRIORITY
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "active" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("active");
              }}
            >
              ACTIVE
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "late" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("late");
              }}
            >
              LATE
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "delivered" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("delivered");
              }}
            >
              DELIVERED
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "completed" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("completed");
              }}
            >
              COMPLETED
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "cancelled" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("cancelled");
              }}
            >
              CANCELLED
            </GigButton>
          </div>
          <div>
            <GigButton
              className={active === "starred" ? "btn_1 active" : "btn_1"}
              onClick={() => {
                setActive("starred");
              }}
            >
              STARRED
            </GigButton>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {active === "priority" ? (
                <Priority detail={user} />
              ) : active === "active" ? (
                <Active detail={user} />
              ) : active === "late" ? (
                <Late detail={user} />
              ) : active === "delivered" ? (
                <Delivered detail={user} />
              ) : active === "completed" ? (
                <Completed />
              ) : active === "cancelled" ? (
                <Cancelled />
              ) : active === "starred" ? (
                <Starred />
              ) : (
                <Priority />
              )}
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f7f7f7;
  padding: 20px;
  .order_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    .input_div {
      border-bottom: 1px solid #dadbdd;
      input {
        outline: none;
        background-color: #f7f7f7;
        border: 1px solid #f7f7f7;
        color: #dadbdd;
        font-size: 14px;
      }
      svg {
        color: #999;
        width: 18px;
        height: 18px;
        font-weight: 600;
      }
    }
    h1 {
      font-family: macan, helvetica neue, Helvetica, Arial, sans-serif !important;
      color: #404145;
      font-weight: 300;
      font-size: 40px;
      line-height: 120%;
    }
  }
  .tab_button_area {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #99999973;
    margin: 20px 0px;
    .nav_tab {
      display: flex;
      gap: 10px;
      /* padding: 10px; */
      color: #999;
      font-size: 14px;
      line-height: 42px;
      font-weight: 400;
      text-decoration: none;
      text-transform: uppercase;
      @media (max-width: 786px) {
        flex-direction: column;
      }

      .btn_1 {
        background-color: transparent;
        border: none;
        width: fit-content;
        padding: 10px;
        color: #999;

        @media (max-width: 566px) {
          min-width: 80px;
          width: 100%;
          padding: 5px;
          font-size: small;
          &:hover {
            background-color: transparent;
            color: black;
          }
        }
      }
      .active {
        color: #202020;
        @media (max-width: 400px) {
          .active {
            background-color: transparent;
            color: black;
          }
        }
      }
    }
    .create_btn {
      display: flex;
      align-items: center;
    }
  }
  .table {
    width: 100%;
    height: 100%;
    /* border: 1px solid #99999973; */
    background: #f7f7f7;
    @media (max-width: 600px) {
      padding: 0;
    }
  }
`;
