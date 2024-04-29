import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

export default function ShowOrder() {
  const targetDate = new Date("2024-05-01T00:00:00");

  return (
    <Root>
      <header>
        <div className="progress">
          <b style={{ fontSize: "14px" }}>
            {" "}
            <IoLocationSharp /> Waiting for info from buyer
          </b>
        </div>
        <div className="deliver_order">
          <button>Nudge Buyer</button>
        </div>
      </header>

      <div className="wave" style={{ background: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          {" "}
          <h3>
            {" "}
            <CiStar /> Order #FO15ERF44599
          </h3>{" "}
          <h1>$ 5.00</h1>
        </div>
        <div
          className="title_user"
          style={{ display: "flex", color: "gray", alignItems: "center" }}
        >
          <p
            style={{
              padding: "0px 10px 0px 40px",
              color: "gray",
              fontSize: "13px",
            }}
          >
            Buyer : <b style={{ color: "#0ba102" }}>Ankita </b>
          </p>
          |<span> May 12,2015</span>
        </div>
        <div className="app_table">
          <div className="app_header">
            <div>CAMS Id</div>
            <div>Student Name</div>
            <div>University Name</div>
            <div>Course Name</div>
          </div>

          <div className="app_body">
            <div>
              <span>student_firstname</span>
            </div>
            <div>
              <span>className</span>
            </div>
            <div>
              <span>className</span>
            </div>
            <div>
              <span>className</span>
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            <span style={{ fontWeight: "600", fontSize: "14px" }}>
              {" "}
              Total:50
            </span>
          </div>
        </div>
      </div>

      {/* <CountdownTimer targetDate={targetDate} /> */}
    </Root>
  );
}
const Root = styled.section`
  background-color: #f8f9fa;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    padding: 20px;
    height: 80px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: 1px solid lightgray;
    box-shadow: 1px 1px 5px 1px lightgray;
    border-top: 1px solid #f2f2f2;
    .progress {
      background-color: transparent;
      height: 100%;
      padding-top: 10px;
      b {
        color: #f58603;
        display: contents;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    .deliver_order {
      button {
        background-color: #0ba102;
        border: 1px solid #0ba102;
        border-radius: 3px;
        color: #fff;
        padding: 5px 8px;
        text-shadow: 0 -1px 1px rgb(0 0 0 / 54%);
        font-size: 14px;
      }
    }
  }
  .wave {
    border: 1px solid lightgray;
    margin: 40px 0px;
    padding: 20px;
    width: 60vw;
    h1 {
      margin: 0;
    }
    h3 {
      margin: 0;
      font-weight: 600;
    }
    .title_user {
      p {
        margin: 0;
      }
      span {
        font-size: 14px;
        color: gray;
        font-weight: 600;
        padding-left: 10px;
      }
    }

    .app_table {
      display: flex;
      flex-direction: column;
      padding: 5px;
      font-family: "Roboto", "sana-serif";
      width: 100%;
      margin: 10px;
      .app_header {
        display: flex;
        background: #f8f9fa;
        text-align: center;
        color: gray;
        border-bottom: 1px solid lightgray;
        > div {
          flex: 1 1;
          padding: 5px;
          font-weight: 500;
          font-size: 14px;
        }
      }
      .app_body {
        display: flex;
        font-family: "Roboto", sans-serif;
        background: #f8f9fa;
        > div {
          flex: 1;
          border-bottom: 1px solid lightgray;
          text-transform: capitalize;
          background-color: #fff;
          text-align: center;
          padding: 5px;

          span {
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
