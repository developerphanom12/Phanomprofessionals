import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import styled from "styled-components";
import Metadata from "./Metadata";

export default function EditOverview() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSoftOpen, setIsSoftOpen] = useState(false);

  return (
    <Root>
      <div className="main_div_section">
        <div className="input_group">
          <div className="input_label">
            <span>Gig title</span>
            As your Gig storefront, your{" "}
            <b>title is the most important place</b> to include keywords that
            buyers would likely use to search for a service like yours.
          </div>
          <div className="input_div">
            <textarea placeholder="text" />
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Category</span>
            Choose the category and sub-category most suitable for your Gig.
          </div>
          <div className="input_div">
            <button onClick={() => setIsOpen(!isOpen)}>
              PROGRAMMING & TECH <IoIosArrowDown />
            </button>
            {isOpen && (
              <div className="option">
                <p>Option A</p>
                <p>Option B</p>
                <p>Option C</p>
              </div>
            )}
            <button onClick={() => setIsSoftOpen(!isSoftOpen)}>
              SOFTWARE DEVELOPMENT <IoIosArrowDown />
            </button>
            {isSoftOpen && (
              <div className="option1">
                <p>Option A</p>
                <p>Option B</p>
                <p>Option C</p>
              </div>
            )}
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Service type</span>
          </div>
          <div className="input_div">
            <button onClick={() => setIsOpen(!isOpen)}>
              WEB APPLICATIONS <IoIosArrowDown />
            </button>
            {isOpen && (
              <div className="option">
                <p>Option A</p>
                <p>Option B</p>
                <p>Option C</p>
              </div>
            )}
          </div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Gig metadata</span>
          </div>
          <div className="input_divv"><Metadata/></div>
        </div>
        <div className="input_group">
          <div className="input_label">
            <span>Search tags</span>
            Tag your Gig with buzz words that are relevant to the services you
            offer. Use all 5 tags to get found.
          </div>
          <div className="input_div_area">
            <div>
              <h6>Positive keywords</h6>
            </div>
            <div>
              <span>
                Enter search terms you feel your buyers will use when looking
                for your service.
              </span>
            </div>
            <input placeholder="tag here" />
          </div>
        </div>
        <div className="input_group">
          <div className="input_label"></div>
          <div className="information">
            <span>
              <IoInformationCircle />
              Please note:
            </span>
            Some categories require that sellers verify their skills.
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  .main_div_section {
    background: #fff;
    display: flex;
    flex-direction: column;
    border: 1px solid #dadbdd;
    border-radius: 5px;
    width: 75vw;
    .input_group {
      display: flex;
      width: 100%;
      padding: 10px;
      justify-content: space-between;
      .input_label {
        width: 22vw;
        padding: 28px;
        display: flex;
        flex-direction: column;
        color: #404145;
        font-size: 14px;
        line-height: 21px;
        span {
          color: #222325;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 7px;
        }
      }
      .input_div_area {
        display: flex;
        padding: 10px;
        width: 45vw;
        justify-content: center;
        flex-direction: column;
        span {
          margin-bottom: 16px;
          font-size: 14px;
          line-height: 21px;
          color: #7a7d85;
        }
        h6 {
          color: #404145;
          line-height: 24px;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 7px;
        }

        input {
          width: 100%;
          border: 1px solid #dadbdd;
          padding: 8px;
          outline: none;
          margin-top: 10px;
        }
      }
      .information {
        display: flex;
        padding: 10px;
        align-items: center;
        width: 45vw;
        color: #62646a;
        font-size: 14px;
        span {
          color: #fc832b;
          font-weight: 600;
          display: flex;
          align-items: center;
          padding: 0px 5px;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
      .input_divv {
        width: 45vw;
        position: relative;
        padding: 10px;
        justify-content: space-between;
        display: flex;
        align-items: center;
      }
      .input_div{
        width: 45vw;
        position: relative;
        padding: 10px;
        justify-content: space-between;
        display: flex;
        align-items: center;
        textarea {
          width: 100%;
          border: 1px solid #dadbdd;
          border-radius: 7px;
          padding: 8px;
          height: 22vh;
          outline: none;
        }
        button {
          display: flex;
          justify-content: space-between;
          width: 250px;
          height: 35px;
          padding: 5px;
          background-color: #fff;
          border: 1px solid #dbdbdb;
          font-size: 14px;
          font-weight: 500;
          color: #202020;
        }
        .option,
        .option1 {
          z-index: 111;
          display: flex;
          flex-direction: column;
          border: 1px solid #dbdbdbdb;
          padding: 10px;
          position: absolute;
          margin: 5px;
          background: #fff;
          color: #62646a;
        }
        .option {
          top: 46px;
          left: 4px;
          width: 250px;
          height: 280px;
        }
        .option1 {
          top: 46px;
          left: 285px;
          width: 250px;
          height: 280px;
        }
      }
    }
  }
`;
