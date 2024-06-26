import React, { useState } from "react";
import styled from "styled-components";
import { IoAttach, IoLocationSharp, IoMailOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoMdArrowDropdown, IoMdMegaphone } from "react-icons/io";
import CountdownTimer from "./CountdownTimer";

export default function ShowOrder() {
  const targetDate = new Date("2024-05-08T00:00:00");
  const [buttonText, setButtonText] = useState("Nudge Buyer");
  const [showChildPage, setShowChildPage] = useState(false);

  const handleNudgeClick = () => {
    setButtonText("Buyer Nudged");
    setShowChildPage(true);
  };

  return (
    <Root>
      <>
        <header>
          <div className="progress">
            <b style={{ fontSize: "14px" }}>
              {" "}
              <IoLocationSharp /> Waiting for info from buyer
            </b>
          </div>
          <div className="deliver_order">
            <button onClick={handleNudgeClick}>{buttonText}</button>
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
              <div style={{ width: "30vw", textAlign: "start" }}>item</div>
              <div style={{ width: "100px" }}>Quantity</div>
              <div style={{ width: "100px" }}>Duration</div>
              <div style={{ width: "100px" }}>Amount</div>
            </div>

            <div className="app_body">
              <div style={{ width: "30vw", textAlign: "start" }}>
                <span style={{ width: "100%" }}>
                  Provide a video testimonial
                </span>
              </div>
              <div style={{ width: "100px" }}>
                <span>+1</span>
              </div>
              <div style={{ width: "100px" }}>
                <span>29 Days</span>
              </div>
              <div style={{ width: "100px" }}>
                <span>$5.0</span>
              </div>
            </div>
            <div style={{ textAlign: "end" }}>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  padding: "5px 20px",
                }}
              >
                {" "}
                Total: 50
              </span>
            </div>
          </div>
        </div>
        <div className="order_not_yet">
          <div style={{ color: "#05878f" }}>
            <IoMdMegaphone />
            <h6
              style={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Order not started{" "}
            </h6>
          </div>
          <p>
            We are waiting for the buyer to submit the requirements.
            <br /> until then, the countdown for this order will not start
          </p>
          <button onClick={handleNudgeClick}>{buttonText}</button>
        </div>

        {showChildPage && (
          <div>
            <CountdownTimer targetDate={targetDate} />
          </div>
        )}
        <div className="quick_response">
          <select>
            <option>Use a Quick Response </option>
            <option></option>
            <option></option>
          </select>
          <div className="attach_file">
            <textarea></textarea>
            <div className="svg_attach">
              <div style={{display:"flex",alignItems:"center"}}>
                <div style={{border:'1px solid lightgray',borderRadius:"3px",padding:"5px",margin:"0px 4px"}}>
                  {" "}
                  <IoAttach /> Attach files
                </div>{" "}
                max. size: 30MB
              </div>
              <div style={{border:'1px solid lightgray',borderRadius:"3px",padding:"5px",margin:"0px 4px"}}>
                <IoMailOutline /> Send
              </div>
            </div>
          </div>
        </div>
      </>
    </Root>
  );
}

const Root = styled.section`
  background-color: #f8f9fa;
  width: 100vw;
  /* height: 100vh; */
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
    margin: 40px 0px 10px;
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
      padding: 5px 0px;
      font-family: "Roboto", "sana-serif";
      width: 100%;
      margin: 10px 0px;
      .app_header {
        display: flex;
        background: #d9dadb52;
        text-align: center;
        justify-content: space-between;
        color: gray;
        font-weight: 600;
        border-bottom: 1px solid lightgray;
        > div {
          padding: 2px 15px;
          font-weight: 500;
          font-size: 13px;
          text-transform: uppercase;
        }
      }
      .app_body {
        display: flex;
        font-family: "Roboto", sans-serif;
        background: #f8f9fa;
        border-bottom: 1px solid lightgray;
        justify-content: space-between;
        > div {
          background-color: #fff;
          text-align: center;
          padding: 5px 15px;
          font-weight: 500;
          font-size: 14px;

          span {
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
    }
  }
  .order_not_yet {
    background-color: #fff;
    border: 1px solid lightgray;
    margin: 20px 0px 0px;
    padding: 20px;
    font-size: 14px;
    width: 60vw;
    text-align: center;
    svg {
      transform: rotate(-24deg);
      width: 47px;
      height: 33px;
    }
    p {
      text-align: center;
      color: #686868;
    }
    button {
      border: 1.5px solid lightgray;
      background-color: #fff;
      padding: 4px 14px;
      color: #686868;
      border-radius: 3px;
      box-shadow: 1px 1px 7px 1px #d3d3d3a1;
    }
  }
  .quick_response {
    border: 1px solid lightgray;
    padding: 10px 20px 20px;
    font-size: 14px;
    width: 60vw;
    select {
      word-wrap: normal;
      border: none;
      background: transparent;
      color: #0ba102;
      outline: none;
      font-weight: 600;
    }
    .attach_file {
      background-color: #fff;
      border: 1px solid lightgray;
      padding: 10px;
      display: flex;
      flex-direction: column;
      textarea {
        width: 100%;
        border: none;
        outline: none;
        padding: 10px;
        height: 250px;
        overflow: auto;
      }
      .svg_attach {
        display: flex;
        align-items: center;
        color: #b3b1b1;
        justify-content: space-between;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
