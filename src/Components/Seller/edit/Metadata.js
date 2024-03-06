import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { FaCircleDot, FaRegCircle } from "react-icons/fa6";
import styled from "styled-components";

export default function Metadata() {
  const [active, setActive] = useState("page1");

  return (
    <Root>
      <div className="main_metadata">
        <div className="button_tab_area">
          <button
            className={active === "page1" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page1");
            }}
          >
            programming language
          </button>
        </div>
        <div className="button_tab_area">
          <button
            className={active === "page2" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page2");
            }}
          >
            programming language
          </button>
        </div>
        <div className="button_tab_area">
          <button
            className={active === "page3" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page3");
            }}
          >
            programming language
          </button>
        </div>
        <div className="button_tab_area">
          <button
            className={active === "page4" ? "btn_1 active" : "btn_1"}
            onClick={() => {
              setActive("page4");
            }}
          >
            programming language
          </button>
        </div>
      </div>
      <div className="all_pages">
        {active === "page1" ? (
          <div className="button_pages">
            <h6>Select the language you provide services for*</h6>
            <div className="select_tabs">
              <ul>
                <li>
                  <label>
                    {" "}
                    <input />
                    ASP.NET
                  </label>
                  <label>
                    {" "}
                    <input />
                    JavaScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    PHP
                  </label>
                  <label>
                    {" "}
                    <input />
                    Ruby/RoR
                  </label>
                  <label>
                    {" "}
                    <input />
                    Flash
                  </label>
                  <label>
                    {" "}
                    <input />
                    TypeScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    Go
                  </label>
                  <label>
                    {" "}
                    <input />
                    C&C++
                  </label>
                  <label>
                    {" "}
                    <input />
                    Lua
                  </label>
                  <label>
                    {" "}
                    <input />
                    MATLAB
                  </label>
                  <label>
                    {" "}
                    <input />
                    Rust
                  </label>
                  <label>
                    {" "}
                    <input />
                    AutoHotkey
                  </label>
                </li>
                <li>
                  <label>
                    {" "}
                    <input />
                    HTML & CSS
                  </label>
                  <label>
                    {" "}
                    <input />
                    Perl
                  </label>
                  <label>
                    {" "}
                    <input />
                    Python
                  </label>
                  <label>
                    {" "}
                    <input />
                    Scala
                  </label>
                  <label>
                    {" "}
                    <input />
                    Java
                  </label>
                  <label>
                    {" "}
                    <input />
                    C#
                  </label>
                  <label>
                    {" "}
                    <input />
                    Kotlin
                  </label>
                  <label>
                    {" "}
                    <input />
                    VB
                  </label>
                  <label>
                    {" "}
                    <input />
                    Delphi
                  </label>
                  <label>
                    {" "}
                    <input />
                    Assembly
                  </label>
                  <label>
                    {" "}
                    <input />
                    Pine Script
                  </label>
                  <label>
                    {" "}
                    <input />
                    Haskell
                  </label>
                </li>
              </ul>
            </div>
          </div>
        ) : active === "page2" ? (
          <div className="button_pages">
            <h6>Select the language you provide services for*</h6>
            <div className="select_tabs">
              <ul>
                <li>
                  <label>
                    {" "}
                    <input />
                    ASP.NET
                  </label>
                  <label>
                    {" "}
                    <input />
                    JavaScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    PHP
                  </label>
                  <label>
                    {" "}
                    <input />
                    Ruby/RoR
                  </label>
                  <label>
                    {" "}
                    <input />
                    Flash
                  </label>
                  <label>
                    {" "}
                    <input />
                    TypeScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    Go
                  </label>
                  <label>
                    {" "}
                    <input />
                    C&C++
                  </label>
                  <label>
                    {" "}
                    <input />
                    Lua
                  </label>
                  <label>
                    {" "}
                    <input />
                    MATLAB
                  </label>
                  <label>
                    {" "}
                    <input />
                    Rust
                  </label>
                  <label>
                    {" "}
                    <input />
                    AutoHotkey
                  </label>
                </li>
              </ul>
            </div>
          </div>
        ) : active === "page3" ? (
          <div className="button_pages">
            <h6>Select the language you provide services for*</h6>
            <div className="select_tabs">
              <ul>
                <li>
                  <label>
                    {" "}
                    <input />
                    ASP.NET
                  </label>
                  <label>
                    {" "}
                    <input />
                    JavaScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    PHP
                  </label>
                  <label>
                    {" "}
                    <input />
                    Ruby/RoR
                  </label>
                  <label>
                    {" "}
                    <input />
                    Flash
                  </label>
                  <label>
                    {" "}
                    <input />
                    TypeScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    Go
                  </label>
                  <label>
                    {" "}
                    <input />
                    C&C++
                  </label>
                  <label>
                    {" "}
                    <input />
                    Lua
                  </label>
                  <label>
                    {" "}
                    <input />
                    MATLAB
                  </label>
                  <label>
                    {" "}
                    <input />
                    Rust
                  </label>
                  <label>
                    {" "}
                    <input />
                    AutoHotkey
                  </label>
                </li>
              </ul>
            </div>
          </div>
        ) : active === "page4" ? (
          <div className="button_pages">
            <h6>Select the language you provide services for*</h6>
            <div className="select_tabs">
              <ul>
                <li>
                  <label>
                    {" "}
                    <input />
                    ASP.NET
                  </label>
                  <label>
                    {" "}
                    <input />
                    JavaScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    PHP
                  </label>
                  <label>
                    {" "}
                    <input />
                    Ruby/RoR
                  </label>
                  <label>
                    {" "}
                    <input />
                    Flash
                  </label>
                  <label>
                    {" "}
                    <input />
                    TypeScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    Go
                  </label>
                  <label>
                    {" "}
                    <input />
                    C&C++
                  </label>
                  <label>
                    {" "}
                    <input />
                    Lua
                  </label>
                  <label>
                    {" "}
                    <input />
                    MATLAB
                  </label>
                  <label>
                    {" "}
                    <input />
                    Rust
                  </label>
                  <label>
                    {" "}
                    <input />
                    AutoHotkey
                  </label>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="button_pages">
            <h6>Select the language you provide services for*</h6>
            <div className="select_tabs">
              <ul>
                <li>
                  <label>
                    {" "}
                    <input />
                    ASP.NET
                  </label>
                  <label>
                    {" "}
                    <input />
                    JavaScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    PHP
                  </label>
                  <label>
                    {" "}
                    <input />
                    Ruby/RoR
                  </label>
                  <label>
                    {" "}
                    <input />
                    Flash
                  </label>
                  <label>
                    {" "}
                    <input />
                    TypeScript
                  </label>
                  <label>
                    {" "}
                    <input />
                    Go
                  </label>
                  <label>
                    {" "}
                    <input />
                    C&C++
                  </label>
                  <label>
                    {" "}
                    <input />
                    Lua
                  </label>
                  <label>
                    {" "}
                    <input />
                    MATLAB
                  </label>
                  <label>
                    {" "}
                    <input />
                    Rust
                  </label>
                  <label>
                    {" "}
                    <input />
                    AutoHotkey
                  </label>
                </li>
                <li>
                  <label>
                    {" "}
                    <input />
                    HTML & CSS
                  </label>
                  <label>
                    {" "}
                    <input />
                    Perl
                  </label>
                  <label>
                    {" "}
                    <input />
                    Python
                  </label>
                  <label>
                    {" "}
                    <input />
                    Scala
                  </label>
                  <label>
                    {" "}
                    <input />
                    Java
                  </label>
                  <label>
                    {" "}
                    <input />
                    C#
                  </label>
                  <label>
                    {" "}
                    <input />
                    Kotlin
                  </label>
                  <label>
                    {" "}
                    <input />
                    VB
                  </label>
                  <label>
                    {" "}
                    <input />
                    Delphi
                  </label>
                  <label>
                    {" "}
                    <input />
                    Assembly
                  </label>
                  <label>
                    {" "}
                    <input />
                    Pine Script
                  </label>
                  <label>
                    {" "}
                    <input />
                    Haskell
                  </label>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  .main_metadata {
    display: flex;
    flex-direction: column;
  }
  .all_pages {
    display: flex;
    .button_pages {
      display: flex;
      flex-direction: column;
      padding: 12px 24px 24px;
      h6 {
        font-size: 14px;
        color: #74767e;
        line-height: 140%;
        font-weight: 700;
      }
      .select_tabs {
        display: flex;
        flex-direction: column;
        ul {
          display: flex;
          li {
            flex: 1;
            display: flex;
            flex-direction: column;
            label {
              padding: 10px;
              font-size: 13px;
              input {
                width: 20px;
                height: 20px;
                margin-right:5px ;
                border-radius: 20px;
                border: 1px solid #dbdbdb;
                &:hover {
                  border: 1px solid #202020;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
`;
